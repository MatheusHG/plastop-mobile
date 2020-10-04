import React, { SetStateAction } from 'react';
import {
  Text, View, TouchableOpacity, Image, Alert, ScrollView,
} from 'react-native';
import {
  Searchbar, Card, Title, Paragraph,
} from 'react-native-paper';
import debounce from 'awesome-debounce-promise';
import { useNavigation } from '@react-navigation/native';

import LoadingModal from '../../../components/LoadingModal';
import api from '../../../services/api';
import money from '../../../../assets/moneyPrice.png';
import mais1 from '../../../../assets/mais1.png';
import menos from '../../../../assets/menos.png';

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

export default function NewPedidosHome() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [originalItems, setOriginalItems] = React.useState<Product[]>([]);
  const [items, setItems] = React.useState<Product[]>([]);

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

  const handleClick = () => {
    navigation.navigate('NewPedidoConfirmacao');
  };

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

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {
          items.map((item) => (
            <View key={String(Math.random())} style={{ width: '45%', marginVertical: 10 }}>
              <Card style={styles.card}>
                <Card.Cover style={styles.cardPhoto} source={{ uri: item.url_image }} />
                <Title>{item.nome}</Title>
                <Paragraph>{item.codigo}</Paragraph>
                <View style={styles.botton}>
                  <Title style={styles.cardPrice}>{formatPrice(item.preco)}</Title>
                  <View style={styles.flexRow}>
                    <TouchableOpacity>
                      <Image source={menos} />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 8 }}>0</Text>
                    <TouchableOpacity onPress={() => {}}>
                      <Image source={mais1} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.barras}>
        <View style={styles.barraPrice}>
          <View style={styles.flexRow}>
            <Image source={money} />
            <Title style={styles.barraPriceTitle}>Preço total da Venda</Title>
          </View>
          <View>
            <Title style={styles.price}>R$ 61,87</Title>
          </View>
        </View>
        <TouchableOpacity style={styles.barraProceed} onPress={() => handleClick()}>
          <Title style={{ color: '#fff' }}>Prosseguir</Title>
        </TouchableOpacity>
      </View>

      <LoadingModal isVisible={loading} />
    </View>
  );
}
