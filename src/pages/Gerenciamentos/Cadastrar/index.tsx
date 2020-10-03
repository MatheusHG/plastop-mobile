import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, KeyboardAvoidingView,
  Alert, Image, ScrollView, Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import {
  TextInput, Title, Button, Dialog, Paragraph,
} from 'react-native-paper';

import api from '../../../services/api';
import LoadingModal from '../../../components/LoadingModal';

interface ImageProp {
  uri: string;
}

interface Product {
  codigo: number;
  nome: string;
  preco: number;
  imageUri: string;
}

type ParamList = {
  GerenciamentoCadastrar: {
    isNew: boolean;
    product: Product;
  };
};

const makePhotoFormData = (image: ImageProp) => ({
  name: image.uri.split('/').pop(),
  type: 'image/jpeg',
  uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
});

export default function Rota() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'GerenciamentoCadastrar'>>();
  const { isNew, product } = route.params;

  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const [codigo, setCodigo] = React.useState(product.codigo || 0);
  const [nomeProduto, setNomeProduto] = React.useState(product.nome || '');
  const [preco, setPreco] = React.useState(product.preco || 0);
  const [image, setImage] = React.useState<ImageProp | null>({ uri: product.imageUri } || null);

  const onConfirm = async () => {
    if (!codigo || !nomeProduto || !preco || !image) {
      Alert.alert('Preencha todas as informações');
      return;
    }

    setLoading(true);
    try {
      // eslint-disable-next-line no-undef
      const form = new FormData();
      form.append('codigo', String(codigo));
      form.append('nome', nomeProduto);
      form.append('preco', String(preco));
      form.append('file', makePhotoFormData(image as ImageProp) as unknown as Blob);

      let response;
      if (isNew) {
        response = await api.post('/produtos', form);
      } else {
        response = await api.put('/produtos', form);
      }

      Alert.alert(response.data.message);

      if (isNew) {
        setCodigo(0);
        setNomeProduto('');
        setPreco(0);
        setImage(null);
        setLoading(false);
      } else {
        navigation.navigate('GerenciamentoHome');
      }
    } catch (error) {
      setLoading(false);

      if (error.response) {
        if (error.response.data.error) {
          Alert.alert(error.response.data.error);
        } else {
          Alert.alert('Ocorreu um erro inesperado.');
        }
      } else {
        Alert.alert('Ocorreu algum erro na comunicação com o servidor.');
      }
    }
  };

  const handleImage = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Atenção', 'É preciso permitir o uso da camêra!');
      return;
    }

    setAlert(true);
  };

  const finishPicker = async (mode: string) => {
    let pickerResult = null;

    if (mode === 'gallery') {
      pickerResult = await ImagePicker.launchImageLibraryAsync({ quality: 0.7 });
    } else {
      pickerResult = await ImagePicker.launchCameraAsync({ quality: 0.7 });
    }

    if (!pickerResult || pickerResult.cancelled === true) {
      return;
    }

    setImage(pickerResult);
    setAlert(false);
  };

  return (
    <ScrollView style={{ flex: 1 }}>

      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
          <TextInput
            label="Código do Produto"
            value={String(codigo)}
            mode="flat"
            underlineColor="#03071E"
            selectionColor="#03071E"
            keyboardType="decimal-pad"
            theme={{ colors: { primary: '#03071E' } }}
            style={{ width: '90%', marginBottom: 30, backgroundColor: '#fff' }}
            onChangeText={(text) => setCodigo(Number(text))}
          />
          <TextInput
            label="Nome do Produto"
            value={nomeProduto}
            mode="flat"
            underlineColor="#03071E"
            selectionColor="#03071E"
            theme={{ colors: { primary: '#03071E' } }}
            style={{ width: '90%', marginBottom: 30, backgroundColor: '#fff' }}
            onChangeText={(text) => setNomeProduto(text)}
          />
          <TextInput
            label="Preço (R$)"
            value={String(preco)}
            mode="flat"
            underlineColor="#03071E"
            selectionColor="#03071E"
            theme={{ colors: { primary: '#03071E' } }}
            style={{ width: '90%', marginBottom: 30, backgroundColor: '#fff' }}
            keyboardType="decimal-pad"
            onChangeText={(text) => setPreco(Number(text))}
          />
        </View>

        {
          image && (
            <Image
              source={image}
              style={{
                width: 150, height: 150, marginTop: 15, borderWidth: 2, borderColor: '#dcdcdc',
              }}
            />
          )
        }
        <Button icon="camera" color="blue" style={{ backgroundColor: '#dcdcdc' }} onPress={handleImage}>
          Escolher Foto
        </Button>

        <View style={{ width: '100%', marginTop: 60 }}>
          <TouchableOpacity
            style={{ backgroundColor: '#FFBE0B', alignItems: 'center', padding: 10 }}
            onPress={onConfirm}
          >
            <Title style={{ color: '#03071E' }}>Finalizar</Title>
          </TouchableOpacity>
        </View>

        <Dialog visible={alert} onDismiss={() => setAlert(false)}>
          <Paragraph style={{ fontSize: 18, padding: 15 }}>
            Escolha o método

          </Paragraph>
          <Dialog.Actions>
            <Button onPress={() => finishPicker('camera')}>
              Abrir Câmera
            </Button>
            <Button onPress={() => finishPicker('gallery')}>
              Abrir Galeria
            </Button>
          </Dialog.Actions>
        </Dialog>

      </KeyboardAvoidingView>
      <LoadingModal isVisible={loading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
