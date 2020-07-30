import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  StrongInfo, Info,
} from '../Home/styles';
import {
  Container, DetailsContainer, Title, Data, DataContainer, DataWrap, Space,
} from './styles';
import FabButton from '../../../components/FabButton';
import ShareButton from './components/ShareButton';
import ProductCard from './components/ProductCard';
import { Order } from '../../../interfaces';

interface OrderDetails {
  order?: Order;
}

export default function OrderDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { order }: OrderDetails = route.params ? route.params : { order: null };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareButton />,
    });
  }, [navigation]);

  return (
    <>
      <Container>
        <DetailsContainer>
          <Title>Endereço da Entrega</Title>
          <Data>
            <DataContainer>
              <DataWrap width="100%">
                <StrongInfo>Nome do Cliente: </StrongInfo>
                <Info>{order?.name}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Forma de Pagamento: </StrongInfo>
                <Info>{order?.paymentForm}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Telefone: </StrongInfo>
                <Info>{order?.phone}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>Cidade: </StrongInfo>
                <Info>{order?.city}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>UF: </StrongInfo>
                <Info>{order?.uf}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>Endereço: </StrongInfo>
                <Info>{order?.address}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>Número: </StrongInfo>
                <Info>{order?.number}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Nome da Loja: </StrongInfo>
                <Info>{order?.storeName}</Info>
              </DataWrap>

              <DataWrap width="100%" wrap>
                <StrongInfo>Observação: </StrongInfo>
                <Info>{order?.note}</Info>
              </DataWrap>
            </DataContainer>
          </Data>
        </DetailsContainer>
        <DetailsContainer>
          <Title>Produtos</Title>
          {
            order?.products.map((item) => (
              <ProductCard key={String(Math.random())} product={item} />
            ))
          }
        </DetailsContainer>
        <Space />
      </Container>
      <FabButton icon="delete-forever" backgroundColor="#e50000" />
    </>
  );
}
