import React, { SetStateAction, useEffect } from 'react';
import {
  Text, View, TouchableOpacity, Image, Alert, ScrollView,
} from 'react-native';
import {
  Searchbar, Title,
} from 'react-native-paper';
import debounce from 'awesome-debounce-promise';
import { useNavigation } from '@react-navigation/native';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ProductItem from './components/ProductItem';
import LoadingModal from '../../../components/LoadingModal';
import api from '../../../services/api';
import money from '../../../../assets/moneyPrice.png';
import { NewOrderProduct, State } from '../../../interfaces';
import styles from './styles';

interface NewPedidosHomeProps {
  setProduct: (product: NewOrderProduct) => void;
  newOrderProducts: {
    [code: string]: NewOrderProduct;
  };
}

function NewPedidosHome({ setProduct, newOrderProducts }: NewPedidosHomeProps) {
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

      const newItems: NewOrderProduct[] = response.data.map((e: NewOrderProduct) => {
        e.quantidade = 0;
        return e;
      });

      setOriginalItems(newItems);
      setItems(newItems);

      newItems.forEach((product) => {
        setProduct(product);
      });

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
    navigation.navigate('NewPedidoConfirmacao', {
      totalValor: total,
      products: Object.keys(newOrderProducts)
        .filter((e) => newOrderProducts[e].quantidade > 0)
        .map((e) => newOrderProducts[e]),
    });
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
          height: '100%',
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

const mapStateToProps = ({ newOrderProducts }: State) => ({
  newOrderProducts,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProduct: (product: NewOrderProduct) => {
    dispatch({
      type: 'SET_ORDER_PRODUCT',
      payload: { product },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPedidosHome);
