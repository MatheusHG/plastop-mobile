import React, { useState, useEffect } from 'react';
import {
  View, TouchableOpacity, Image, TextInput,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

import styles from '../styles';
import mais1 from '../../../../../assets/mais1.png';
import menos from '../../../../../assets/menos.png';

interface Product {
  codigo: number;
  nome: string;
  preco: number;
  url_image: string;
  quantidade: number;
}

interface ProductItemProps {
  code: number;
}

function formatPrice(price: number) {
  return `R$${price.toFixed(2)}`.replace('.', ',');
}

function ProductItem({ code }: ProductItemProps) {
  const [quantity, setQuantity] = useState('0');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  return (
    <View key={String(Math.random())} style={{ width: '45%', marginVertical: 10 }}>
      <Card style={styles.card}>
        <Card.Cover style={styles.cardPhoto} source={{ uri: image }} />
        <Title>{name}</Title>
        <Paragraph>
          Cod.:
          {' '}
          {String(code || 0)}
        </Paragraph>
        <View style={styles.botton}>
          <Title style={styles.cardPrice}>{formatPrice(Number(price || 0))}</Title>
          <View style={styles.flexRow}>
            <TouchableOpacity onPress={() => setQuantity(String(Number(quantity) - 1))}>
              <Image source={menos} />
            </TouchableOpacity>
            <TextInput
              style={{ marginHorizontal: 8 }}
              value={quantity}
              onChangeText={setQuantity}
            />
            <TouchableOpacity onPress={() => setQuantity(String(Number(quantity) + 1))}>
              <Image source={mais1} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default ProductItem;
