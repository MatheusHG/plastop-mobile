import React, { useState, SetStateAction } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import debounce from 'awesome-debounce-promise';
import {
  Container, Header, HeaderInfo, Info, StrongInfo, SearchBar,
} from './styles';
import api from '../../../services/api';
import OrderCard from './components/OrderCard';
import LoadingModal from '../../../components/LoadingModal';
import { Order } from '../../../interfaces';

export default function AllOrders() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [originalOrders, setOriginalOrders] = useState<Order[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = async () => {
    setLoading(true);
    try {
      const response = await api.get('/pedidos');
      setLoading(false);

      setOriginalOrders(response.data);
      setOrders(response.data);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ocorreu um erro na comunicação com o servidor.');
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getOrders();
    });

    return unsubscribe;
  }, [navigation]);

  const searchItem = debounce((search) => {
    if (search) {
      const resultName = originalOrders.filter((item) => {
        const normalizedName = item.nome.toLowerCase();
        const normalizedSearch = search.toLowerCase();

        return normalizedName.includes(normalizedSearch);
      });

      const resultCities = originalOrders.filter((item) => {
        const normalizedName = item.cidade.toLowerCase();
        const normalizedSearch = search.toLowerCase();

        return normalizedName.includes(normalizedSearch);
      });

      return [...resultName, ...resultCities];
    }

    return originalOrders;
  }, 300);

  const onChangeSearch = async (query: SetStateAction<string>) => {
    setSearchQuery(query);

    const newItems = await searchItem(query);
    setOrders(newItems);
  };

  return (
    <Container>
      <Header>
        <SearchBar
          placeholder="Cidade/Cliente"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <HeaderInfo>
          <Info>Total de </Info>
          <StrongInfo>
            {orders.length}
            {' '}
            pedidos
          </StrongInfo>
        </HeaderInfo>
      </Header>

      <FlatList
        keyExtractor={() => String(Math.random())}
        data={orders}
        renderItem={({ item }) => (
          <OrderCard order={item} />
        )}
      />
      <LoadingModal isVisible={loading} />
    </Container>
  );
}
