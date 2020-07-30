import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { Product } from '../../../../interfaces';
import { StrongInfo } from '../../Home/styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <ProductContainer>
    <ProductContent
      title={product.name}
      subtitle={product.code}
      right={() => (
        <StrongInfo>
          Quantidade:
          {product.quantity}
        </StrongInfo>
      )}
      rightStyle={{
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  </ProductContainer>
);

export const ProductContainer = styled(Card)`
  margin: 5px 0;
`;

export const ProductContent = styled(Card.Title)``;

export default ProductCard;
