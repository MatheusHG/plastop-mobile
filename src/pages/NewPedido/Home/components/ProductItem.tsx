import React, { useState, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  View, TouchableOpacity, Image, TextInput,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

import styles from '../styles';
import mais1 from '../../../../../assets/mais1.png';
import menos from '../../../../../assets/menos.png';
import { NewOrderProduct, State } from '../../../../interfaces';

interface ProductItemProps {
  code: number;
  newOrderProducts: {
    [code: string]: NewOrderProduct;
  };
  setProduct: (product: NewOrderProduct) => void;
}

function formatPrice(price: number) {
  return `R$${price.toFixed(2)}`.replace('.', ',');
}

function ProductItem({ code, newOrderProducts, setProduct }: ProductItemProps) {
  const [oldQuantity, setOldQuantity] = useState('0');
  const [quantity, setQuantity] = useState('0');
  const [inputQuantity, setInputQuantity] = useState('0');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('-');

  useEffect(() => {
    if (newOrderProducts[String(code)]) {
      const product = newOrderProducts[String(code)];

      setQuantity(String(product.quantidade));
      setPrice(String(product.preco));
      setName(product.nome);
      setImage(product.url_image);
    }
    console.log('renderizado', code);
  }, []);

  useEffect(() => {
    if (quantity !== oldQuantity) {
      setOldQuantity(quantity);

      const newItem: NewOrderProduct = {
        codigo: code,
        nome: name,
        preco: Number(price),
        quantidade: Number(quantity),
        url_image: image,
      };

      setProduct(newItem);
    }
  }, [quantity]);

  const handleMinus = () => {
    let newValue = Number(quantity) - 1;

    if (newValue < 0) newValue = 0;

    setQuantity(String(newValue));
  };

  const handlePlus = () => {
    const newValue = Number(quantity) + 1;
    setQuantity(String(newValue));
  };

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
            <TouchableOpacity onPress={handleMinus}>
              <Image source={menos} />
            </TouchableOpacity>

            <TextInput
              style={{ marginHorizontal: 8 }}
              keyboardType="number-pad"
              value={inputQuantity}
              onChangeText={setInputQuantity}
            />

            <TouchableOpacity onPress={handlePlus}>
              <Image source={mais1} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
}

const mapStateToProps = ({ newOrderProducts }: State) => ({
  newOrderProducts,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProduct: (product: NewOrderProduct) => {
    dispatch({
      type: 'SET_ORDER_PRODUCT',
      payload: { product },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
