import React from 'react';
import styled from 'styled-components/native';

function OrderCard() {
  return (
    <Container>
      <ContainerInfo>
        <Info>Emissão: </Info>
        <StrongInfo>05/05/2020</StrongInfo>
      </ContainerInfo>
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

export default OrderCard;
