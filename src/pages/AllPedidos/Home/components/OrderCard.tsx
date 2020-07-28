import React from 'react';
import styled from 'styled-components/native';
import { Order } from '../../../../interfaces';

interface OrderCardProps {
  order: Order;
}

function OrderCard({ order }: OrderCardProps) {
  return (
    <Container>
      <ContainerInfo>
        <Info>Emissão: </Info>
        <StrongInfo>05/05/2020</StrongInfo>
      </ContainerInfo>

      <Data>
        <DataContainer>
          <DataInfo>Nome do Cliente: </DataInfo>
          <Info>{order.name}</Info>
          <DataInfo>Telefone: </DataInfo>
          <Info>{order.phone}</Info>
          <DataInfo>Cidade: </DataInfo>
          <Info>{order.city}</Info>
          <DataInfo>Forma de Pagamento: </DataInfo>
          <Info>{order.paymentForm}</Info>
        </DataContainer>
      </Data>
    </Container>
  );
}

const Info = styled.Text`
`;

const StrongInfo = styled.Text`
  font-weight: bold;
`;

const Container = styled.View`

`;

const ContainerInfo = styled.View`
  flex-direction: row;
`;

const Data = styled.View`
  width: 100%;
  background-color: #efefef;
`;

const DataContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const DataInfo = styled.Text``;

export default OrderCard;
