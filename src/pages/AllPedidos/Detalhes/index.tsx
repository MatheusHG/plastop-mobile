import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  StrongInfo, Info,
} from '../Home/styles';
import {
  Container, DetailsContainer, Title, Data, DataContainer, DataWrap,
} from './styles';
import { Order } from '../../../interfaces';

interface OrderDetails {
  order?: Order;
}

export default function OrderDetails() {
  const route = useRoute();
  const { order }: OrderDetails = route.params ? route.params : { order: null };

  return (
    <Container>
      <DetailsContainer>
        <Title>Endereço da Entrega</Title>
        <Data>
          <DataContainer>
            <DataWrap>
              <StrongInfo>Nome do Cliente: </StrongInfo>
              <Info>{order?.name}</Info>
            </DataWrap>

            <DataWrap>
              <StrongInfo>Telefone: </StrongInfo>
              <Info>{order?.phone}</Info>
            </DataWrap>

            <DataWrap>
              <StrongInfo>Cidade: </StrongInfo>
              <Info>{order?.city}</Info>
            </DataWrap>

            <DataWrap>
              <StrongInfo>Forma de Pagamento: </StrongInfo>
              <Info>{order?.paymentForm}</Info>
            </DataWrap>
          </DataContainer>
        </Data>
      </DetailsContainer>
    </Container>
  );
}
