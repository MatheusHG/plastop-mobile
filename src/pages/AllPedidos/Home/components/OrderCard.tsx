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
          <DataWrap>
            <StrongInfo>Nome do Cliente: </StrongInfo>
            <Info>{order.name}</Info>
          </DataWrap>

          <DataWrap>
            <StrongInfo>Telefone: </StrongInfo>
            <Info>{order.phone}</Info>
          </DataWrap>

          <DataWrap>
            <StrongInfo>Cidade: </StrongInfo>
            <Info>{order.city}</Info>
          </DataWrap>

          <DataWrap>
            <StrongInfo>Forma de Pagamento: </StrongInfo>
            <Info>{order.paymentForm}</Info>
          </DataWrap>
        </DataContainer>
      </Data>
    </Container>
  );
}

const Info = styled.Text``;

const StrongInfo = styled.Text`
  font-weight: bold;
`;

const Container = styled.View`
  padding: 10px 20px;
`;

const ContainerInfo = styled.View`
  flex-direction: row;
`;

const Data = styled.View`
  width: 100%;
  background-color: #ddd;
  padding: 10px;
  border-radius: 15px;
  margin-top: 5px;
`;

const DataContainer = styled.View`
  width: 100%;
`;

const DataWrap = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export default OrderCard;
