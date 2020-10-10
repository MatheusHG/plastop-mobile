import React, { SetStateAction, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, Image, Alert, ScrollView,
} from 'react-native';
import {
  Searchbar, Card, Title, Paragraph,
} from 'react-native-paper';
import debounce from 'awesome-debounce-promise';
import { useNavigation } from '@react-navigation/native';

import ProductItem from './components/ProductItem';
import LoadingModal from '../../../components/LoadingModal';
import api from '../../../services/api';
import money from '../../../../assets/moneyPrice.png';
import { NewOrderProduct } from '../../../interfaces';
import styles from './styles';

export default function NewPedidosHome() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [originalItems, setOriginalItems] = React.useState<NewOrderProduct[]>([]);
  const [items, setItems] = React.useState<NewOrderProduct[]>([]);
  const [total, setTotal] = React.useState<Number>(0);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get('/produtos');

      const newItems = response.data.map((e: NewOrderProduct) => {
        e.quantidade = 0;
        return e;
      });

      setOriginalItems(newItems);
      setItems(newItems);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ocorreu um erro na comunicação com o servidor.');
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts();
      setTotal(0);
    });

    return unsubscribe;
  }, [navigation]);

  const handleClick = () => {
    navigation.navigate('NewPedidoConfirmacao', { totalValor: total, products: originalItems.filter((e) => e.quantidade > 0) });
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

  const handlePlus = (code: number) => {
    let newTotal = 0;

    const newItems = originalItems.map((e) => {
      if (e.codigo === code) {
        e.quantidade += 1;
      }

      newTotal += e.preco * e.quantidade;
      return e;
    });

    setOriginalItems(newItems);
    setTotal(newTotal);
  };

  const handleMinus = (code: number) => {
    let newTotal = 0;

    const newItems = originalItems.map((e) => {
      if (e.codigo === code) {
        e.quantidade -= 1;
        if (e.quantidade < 0) e.quantidade = 0;
      }

      newTotal += e.preco * e.quantidade;
      return e;
    });

    setOriginalItems(newItems);
    setTotal(newTotal);
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
            <ProductItem
              key={String(Math.random())}
              code={item.codigo}
            />
          )) || ''
        }
      </ScrollView>
      <View style={styles.barras}>
        <View style={styles.barraPrice}>
          <View style={styles.flexRow}>
            <Image source={money} />
            <Title style={styles.barraPriceTitle}>Preço total da Venda</Title>
          </View>
          <View>
            <Title style={styles.price}>
              R$
              {' '}
              {total.toFixed(2)}
            </Title>
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
