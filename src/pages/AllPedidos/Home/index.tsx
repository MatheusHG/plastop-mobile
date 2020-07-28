import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container, Header, HeaderInfo, Info, StrongInfo, SearchBar, OrderContainer, ContainerInfo,
} from './styles';
import OrderCard from './components/OrderCard';
import { Order } from '../../../interfaces';

const orders = [
  {
    name: 'Davi Sousa',
    phone: '(83) 9 998841809',
    city: 'Campina Grande - PB',
    paymentForm: 'Dinheiro',
    price: '52,92',
    date: '05/05/2020',
  },
  {
    name: 'Davi Sousa',
    phone: '(83) 9 998841809',
    city: 'Campina Grande - PB',
    paymentForm: 'Dinheiro',
    price: '52,92',
    date: '05/05/2020',
  },
  {
    name: 'Davi Sousa',
    phone: '(83) 9 998841809',
    city: 'Campina Grande - PB',
    paymentForm: 'Dinheiro',
    price: '52,92',
    date: '05/05/2020',
  },
];

export default function AllOrders() {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

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
          <StrongInfo>2 pedidos</StrongInfo>
        </HeaderInfo>
      </Header>

      <FlatList
        keyExtractor={() => String(Math.random())}
        data={orders}
        renderItem={(item: Order) => (
          <OrderCard order={item} />
        )}
      />
    </Container>
  );
}
