import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Product } from '../../../../interfaces';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <ProductContainer>
    <Wrapper>
      <Details>
        <ProductImage source={{ uri: product.url_imagem }} resizeMode="stretch" />
        <Infos>
          <StrongInfo>{product.nome}</StrongInfo>
          <Info>
            Cod.:
            {' '}
            {product.codigo_produto}
          </Info>
        </Infos>
      </Details>
      <Quantity>
        <StrongInfo fontSize="10px">Quantidade: </StrongInfo>
        <StrongInfo fontSize="20px">{product.quantidade}</StrongInfo>
      </Quantity>
    </Wrapper>
  </ProductContainer>
);

const ProductContainer = styled(Card)`
  width: 100%;
  height: 70px;
  margin: 5px 0;
  border-radius: 15px;
`;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  height: 100%;
`;

const ProductImage = styled.Image`
  height: 100%;
  width: 25%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const Quantity = styled.View`
  flex-wrap: wrap;
  align-items: center;
  margin-right: 10px;
`;

const Infos = styled.View`
  margin: 0 10px;
  overflow: hidden;
`;

const StrongInfo = styled.Text`
  font-weight: bold;
  font-size: ${(props) => props.fontSize || '11px'};
`;

const Info = styled.Text`
  font-size: ${(props) => props.fontSize || '11px'};
`;

const ProductContent = styled(Card.Title)``;

export default ProductCard;
