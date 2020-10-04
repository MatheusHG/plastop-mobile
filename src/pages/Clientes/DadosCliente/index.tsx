import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Keyboard, Platform, Image,
  KeyboardAvoidingView, Alert, TouchableWithoutFeedback,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';

import {
  Title, TextInput, Dialog, Paragraph, Button,
} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import LoadingModal from '../../../components/LoadingModal';
import {
  Imagem, ContainerAmarelo, CardInfo, ContainerImagem,
  Titulo,
} from './styles';
import api from '../../../services/api';

import Calendario from '../../../../assets/calendario.png';
import Dinheiro from '../../../../assets/dinheiro.png';
import Line from '../../../../assets/line.png';
import { Client } from '../../../interfaces';

type ParamList = {
  ClientesDados: {
    isNew: boolean;
    codigo?: number;
    isOrder?: boolean;
  };
};

function getNormalizedDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return `${day}/${month}/${year}`;
}

function formatPrice(price: number) {
  return `R$${price.toFixed(2)}`.replace('.', ',');
}

function ClientesDados() {
  const navigation = useNavigation();

  const route = useRoute<RouteProp<ParamList, 'ClientesDados'>>();
  const theme = { colors: { primary: '#03071E' } };
  const { isNew, codigo, isOrder } = route.params;

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [social, setSocial] = useState('');
  const [fantasyName, setFantasyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [rg, setRg] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [address, setAddress] = useState('');
  const [reference, setReference] = useState('');
  const [number, setNumber] = useState('');
  const [neighbour, setNeighbour] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [data, setData] = useState<string | null>(null);
  const [total, setTotal] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (!isNew && codigo) {
        setLoading(true);

        try {
          const response = await api.get(`/clientes/${codigo}`);
          const newClient: Client = response.data;

          setName(newClient.nome as string);
          setCode(String(newClient.codigo));
          setSocial(newClient.razao_social as string);
          setFantasyName(newClient.nome_fantasia as string);
          setCnpj(newClient.cnpj as string);
          setRg(newClient.rg as string);
          setCity(newClient.cidade as string);
          setUf(newClient.uf as string);
          setAddress(newClient.rua as string);
          setReference(newClient.referencia as string);
          setNumber(String(newClient.numero));
          setNeighbour(newClient.bairro as string);
          setPhone1(newClient.telefone1 as string);
          setPhone2(newClient.telefone2 as string);
          setData(newClient.data as string | null);
          setTotal(newClient.total as string | null);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          Alert.alert('Ocorreu um erro na comunicação com o servidor.');
        }
      }
    })();
  }, []);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const body = {
        codigo: code,
        nome: name,
        razao_social: social,
        nome_fantasia: fantasyName,
        cnpj,
        rg,
        cidade: city,
        uf,
        rua: address,
        numero: number,
        bairro: neighbour,
        referencia: reference,
        telefone1: phone1.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''),
        telefone2: phone2.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''),
      };

      if (isNew) {
        await api.post('/clientes', body);
      } else {
        await api.put('/clientes', body);
      }

      setLoading(false);
      if (!isOrder) {
        navigation.navigate('ClientesHome');
      } else {
        navigation.navigate('DadosEntrega', { client: body });
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

  const onDelete = async () => {
    setLoading(true);
    try {
      const response = await api.delete(`/clientes?codigo=${codigo}`);

      Alert.alert(response.data.message);

      setLoading(false);
      navigation.navigate('ClientesHome');
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerMain}
    >
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {
            (!isNew && data) && (
              <CardInfo>
                <Titulo>Última Compra</Titulo>
                <ContainerAmarelo>
                  <ContainerImagem>
                    <Imagem source={Calendario} />
                    <Text style={styles.text}>{getNormalizedDate(new Date(data))}</Text>
                  </ContainerImagem>
                  <Image source={Line} />
                  <ContainerImagem>
                    <Imagem source={Dinheiro} />
                    <Text style={styles.text}>{formatPrice(Number(total))}</Text>
                  </ContainerImagem>
                </ContainerAmarelo>
              </CardInfo>
            )
          }
          <ScrollView style={styles.form}>
            <View style={styles.containerRow}>
              <TextInput
                label="Nome do Cliente"
                style={styles.large}
                theme={theme}
                value={name}
                autoCapitalize="words"
                onChangeText={setName}
              />
              <TextInput
                label="Código"
                style={styles.medium}
                keyboardType="number-pad"
                maxLength={8}
                theme={theme}
                value={code}
                onChangeText={(text) => setCode(text.replace(',', '').replace('.', ''))}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Razão Social"
                style={styles.large}
                theme={theme}
                value={social}
                onChangeText={setSocial}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Nome Fantasia"
                style={styles.large}
                theme={theme}
                value={fantasyName}
                onChangeText={setFantasyName}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="CNPJ/CPF"
                style={styles.large}
                keyboardType="number-pad"
                theme={theme}
                value={cnpj}
                onChangeText={setCnpj}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Incrição Estadual/RG"
                style={styles.large}
                keyboardType="number-pad"
                theme={theme}
                value={rg}
                onChangeText={setRg}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Cidade"
                style={styles.large}
                theme={theme}
                value={city}
                onChangeText={setCity}
              />
              <TextInput
                label="UF"
                style={styles.medium}
                maxLength={2}
                theme={theme}
                value={uf}
                onChangeText={setUf}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Endereço"
                style={styles.large}
                theme={theme}
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                label="Número"
                style={styles.medium}
                keyboardType="number-pad"
                theme={theme}
                value={number}
                onChangeText={setNumber}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Bairro"
                style={styles.large}
                theme={theme}
                value={neighbour}
                onChangeText={setNeighbour}
              />
              <TextInput
                label="Referência"
                style={styles.large}
                theme={theme}
                value={reference}
                onChangeText={setReference}
              />
            </View>
            <View style={styles.containerRow}>
              <TextInput
                label="Telefone 1"
                style={styles.large}
                theme={theme}
                value={phone1}
                onChangeText={setPhone1}
                render={
                  ({ style, value, onChangeText }) => (
                    <TextInputMask
                      style={style}
                      keyboardType="number-pad"
                      value={value}
                      onChangeText={onChangeText}
                      type="custom"
                      options={{
                        mask: '(99) 99999-9999',
                      }}
                    />
                  )
                }
              />
              <TextInput
                label="Telefone 2"
                style={styles.large}
                theme={theme}
                value={phone2}
                onChangeText={setPhone2}
                render={
                  ({ style, value, onChangeText }) => (
                    <TextInputMask
                      style={style}
                      keyboardType="number-pad"
                      value={value}
                      onChangeText={onChangeText}
                      type="custom"
                      options={{
                        mask: '(99) 99999-9999',
                      }}
                    />
                  )
                }
              />
            </View>
            <View style={{ width: '100%', height: 140 }} />
          </ScrollView>
          <View style={styles.button}>
            {
              (!isNew && !isOrder) && (
                <TouchableOpacity style={styles.deletar} onPress={() => setVisible(true)}>
                  <Title style={{ color: '#FFF' }}>Deletar</Title>
                </TouchableOpacity>
              )
            }
            <TouchableOpacity style={styles.salvar} onPress={handleCreate}>
              <Title style={{ color: '#FFF' }}>Salvar</Title>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <LoadingModal isVisible={loading} />

      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Paragraph style={{
          fontSize: 18,
          padding: 15,
        }}
        >
          Deseja realmente deletar o cliente?

        </Paragraph>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)} theme={{ colors: { primary: 'red' } }}>Cancelar</Button>
          <Button onPress={onDelete} theme={{ colors: { primary: '#4CAF50' } }}>Confirmar</Button>
        </Dialog.Actions>
      </Dialog>
    </KeyboardAvoidingView>
  );
}

export default ClientesDados;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  containerList: {
    width: '100%',
    padding: 10,
    marginBottom: 100,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  salvar: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  deletar: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FF0000',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  large: {
    flex: 2,
    margin: 10,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
  },
  medium: {
    flex: 1,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    margin: 10,
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
});
