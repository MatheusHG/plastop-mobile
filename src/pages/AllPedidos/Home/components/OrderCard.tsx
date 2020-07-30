import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { StrongInfo, Info } from '../styles';
import { Order } from '../../../../interfaces';

interface OrderCardProps {
  order: Order;
}

function OrderCard({ order }: OrderCardProps) {
  const navigation = useNavigation();

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
          <Details onPress={() => navigation.navigate('AllPedidosDetalhes')}>
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

const Data = styled(Card)`
  width: 100%;
  background-color: #eee;
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
  background-color: #eff211;
  padding: 5px 10px;
  border-radius: 15px;
`;

export default OrderCard;
