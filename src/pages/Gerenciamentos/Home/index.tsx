import React, { useState, SetStateAction } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert } from 'react-native';
import {
  Searchbar, Card, Title, Paragraph, IconButton, Colors, Button, Dialog,
} from 'react-native-paper';
import debounce from 'awesome-debounce-promise';

import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../services/api';
import LoadingModal from '../../../components/LoadingModal';
import FabButton from '../../../components/FabButton';

import styles from './styles';

interface Product {
  codigo: number;
  nome: string;
  preco: number;
  url_image: string;
}

function formatPrice(price: number) {
  return `R$${price.toFixed(2)}`.replace('.', ',');
}

export default function Rota() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [originalItems, setOriginalItems] = useState<Product[]>([]);
  const [items, setItems] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get('/produtos');
      setLoading(false);

      setOriginalItems(response.data);
      setItems(response.data);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ocorreu um erro na comunicação com o servidor.');
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts();
    });

    return unsubscribe;
  }, [navigation]);

  const searchItem = debounce((search) => {
    if (search) {
      const resultName = originalItems.filter((item) => {
        const normalizedName = item.nome.toLowerCase();
        const normalizedSearch = search.toLowerCase();

        return normalizedName.includes(normalizedSearch);
      });

      const resultCode = originalItems.filter((item) => String(item.codigo).includes(search));

      return [...resultName, ...resultCode];
    }

    return originalItems;
  }, 300);

  const onChangeSearch = async (query: SetStateAction<string>) => {
    setSearchQuery(query);

    const newItems = await searchItem(query);
    setItems(newItems);
  };

  const hideDialog = () => setVisible(false);

  const onDelete = async () => {
    setVisible(false);
    setLoading(true);
    try {
      const response = await api.delete(`/produtos?codigo=${currentCode}`);

      Alert.alert(response.data.message);

      setLoading(false);
      await getProducts();
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
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center',
        }}
      >
        {
          items.map((item) => (
            <View key={String(Math.random())} style={{ width: '45%', marginVertical: 10 }}>
              <Card
                style={styles.card}
                onPress={() => navigation.navigate('GerenciamentoCadastrar', {
                  isNew: false,
                  product: {
                    codigo: item.codigo,
                    preco: item.preco,
                    nome: item.nome,
                    imageUri: item.url_image,
                  },
                })}
              >
                <Card.Cover style={styles.cardPhoto} source={{ uri: item.url_image }} />
                <Title>{item.nome}</Title>
                <Paragraph>
                  Cod.:
                  {` ${item.codigo}`}
                </Paragraph>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 40,
                  width: '100%',
                }}
                >
                  <Title style={styles.cardPrice}>{formatPrice(item.preco)}</Title>
                  <IconButton
                    icon="delete"
                    color={Colors.red500}
                    size={24}
                    onPress={() => {
                      setCurrentCode(item.codigo);
                      setVisible(true);
                    }}
                    style={styles.delete}
                  />
                </View>
              </Card>
            </View>
          ))
        }
        <View style={{ width: '100%', height: 70 }} />
      </ScrollView>

      <Dialog visible={visible} onDismiss={hideDialog}>
        <Paragraph style={styles.modalTitle}>Deseja realmente deletar o produto?</Paragraph>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)} theme={{ colors: { primary: 'red' } }}>Cancelar</Button>
          <Button onPress={onDelete} theme={{ colors: { primary: '#4CAF50' } }}>Confirmar</Button>
        </Dialog.Actions>
      </Dialog>

      <LoadingModal isVisible={loading} />
      <FabButton icon="plus" onPress={() => navigation.navigate('GerenciamentoCadastrar', { isNew: true, product: {} })} />
    </View>

  );
}
