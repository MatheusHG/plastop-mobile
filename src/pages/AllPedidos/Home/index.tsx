import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container, Header, HeaderInfo, Info, StrongInfo, SearchBar,
} from './styles';
import OrderCard from './components/OrderCard';
import { Order } from '../../../interfaces';

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
          <StrongInfo>3 pedidos</StrongInfo>
        </HeaderInfo>
      </Header>

      <FlatList
        keyExtractor={() => String(Math.random())}
        data={orders}
        renderItem={({ item }) => (
          <OrderCard order={item} />
        )}
      />
    </Container>
  );
}

const products = [
  {
    photo: 'https://http2.mlstatic.com/pacoto-rabico-de-cabelo-xuxinhas-com-20-unidades-colorido-D_NQ_NP_997836-MLB27172348581_042018-F.jpg',
    name: 'Xuxinhas pac. 10 unidades',
    code: 'Cód.: 0205',
    price: 'R$ 9,99',
    quantity: 4,
  },
  {
    photo: 'https://www.callfarma.com.br/imagens/produtos/lixa-para-pes-e-v-a-rosa-zalike.png',
    name: 'Lixa de Pé EVA',
    code: 'Cód.: 7845',
    price: 'R$ 6,90',
    quantity: 4,
  },
  {
    photo: 'https://blisther.com.br/produtos/produto1250-1.jpg',
    name: 'Varal Nylon',
    code: 'Cód.: 2398',
    price: 'R$ 2,99',
    quantity: 4,
  },
  {
    photo: 'https://http2.mlstatic.com/coador-de-cafe-de-pano-industrial-9-unid--D_NQ_NP_925648-MLB31130842396_062019-F.jpg',
    name: 'Coador de Café',
    code: 'Cód.: 0125',
    price: 'R$ 5,99',
    quantity: 10,
  },
  {
    photo: 'https://static3.tcdn.com.br/img/img_prod/159791/lixa_para_unhas_preta_reta_com_gramatura_01_unidade_santa_clara_4191_1_20181210111746.jpg',
    name: 'Lixa de Unhas',
    code: 'Cód.: 5642',
    price: 'R$ 7,90',
    quantity: 10,
  },
  {
    photo: 'https://http2.mlstatic.com/prendedor-de-roupa-madeira-pregador-roupa-600-unds-D_NQ_NP_707102-MLB31196664571_062019-F.jpg',
    name: 'Prendedor de Roupa',
    code: 'Cód.: 5986',
    price: 'R$ 2,90',
    quantity: 4,
  },
];

const orders: Order[] = [
  {
    name: 'Davi Sousa',
    phone: '(83) 99884-1809',
    city: 'Campina Grande',
    uf: 'PB',
    address: 'Rua Dos Bobos',
    number: '0',
    district: 'Musical',
    note: '',
    storeName: 'Apple do Nordeste',
    paymentForm: 'Dinheiro',
    price: '52,92',
    date: '05/05/2020',
    products,
  },
  {
    name: 'Davi Sousa',
    phone: '(83) 99884-1809',
    city: 'Campina Grande',
    uf: 'PB',
    address: 'Rua Dos Bobos',
    number: '0',
    district: 'Musical',
    note: '',
    storeName: 'Apple do Nordeste',
    paymentForm: 'Dinheiro',
    price: '52,92',
    date: '05/05/2020',
    products,
  },
  {
    name: 'Davi Sousa',
    phone: '(83) 99884-1809',
    city: 'Campina Grande',
    uf: 'PB',
    address: 'Rua Dos Bobos',
    number: '0',
    district: 'Musical',
    note: '',
    storeName: 'Apple do Nordeste',
    paymentForm: 'Dinheiro',
    price: '52,92',
    date: '05/05/2020',
    products,
  },
];
