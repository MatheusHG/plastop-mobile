import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { StrongInfo, Info } from '../styles';
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
        <PriceContainer>
          <PriceInfo>
            <Info>Preço do pedido: </Info>
            <StrongInfo>
              R$
              {' '}
              {order.price}
            </StrongInfo>
          </PriceInfo>
          <Details>
            <StrongInfo>Ver mais detalhes</StrongInfo>
          </Details>
        </PriceContainer>
      </Data>
    </Container>
  );
}

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

const PriceContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  align-items: flex-end;
`;

const PriceInfo = styled.View`
  flex-direction: row;
`;

const Details = styled(RectButton)`
  margin-top: 6px;
  background-color: #FFF211;
  padding: 5px 10px;
  border-radius: 15px;
`;

export default OrderCard;
