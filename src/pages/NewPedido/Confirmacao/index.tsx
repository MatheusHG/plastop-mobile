import React from 'react';
import {
  View, Image, TouchableOpacity,
} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

import {
  Container, Cards, CardPrice, Price, Barras, BarraPrice, Discount, Quantidade,
  Row, TitlePrice, TitleValue, BarraProsseguir, BarraDiscount, ViewBottom,
} from './styles';

import money from '../../../../assets/moneyPrice.png';
import price from '../../../../assets/price.png';
import delet from '../../../../assets/delete.png';

export default function NewPedidoConfirmacao() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const [items, setItems] = React.useState([
    {
      photo: 'https://http2.mlstatic.com/pacoto-rabico-de-cabelo-xuxinhas-com-20-unidades-colorido-D_NQ_NP_997836-MLB27172348581_042018-F.jpg', nameRef: 'Xuxinhas pac. 10 unidades', cod: 'Cód.: 0205', price: 'R$ 9,99', quant: 0,
    },
    {
      photo: 'https://http2.mlstatic.com/D_NQ_NP_765344-MLB28122713989_092018-O.jpg', nameRef: 'Prendedor de Roupa', cod: 'Cód.: 5986', price: 'R$ 2,90', quant: 0,
    },
    {
      photo: 'https://www.callfarma.com.br/imagens/produtos/lixa-para-pes-e-v-a-rosa-zalike.png', nameRef: 'Lixa de Pé EVA', cod: 'Cód.: 7845', price: 'R$ 6,90', quant: 0,
    },
  ]);
  return (
    <Container>
      <FlatGrid
        itemDimension={130}
        showsVerticalScrollIndicator={false}
        data={items}
        spacing={10}
        renderItem={({ item }) => (
          <View>
            <Cards>
              <Card.Cover style={{ height: 100 }} source={{ uri: item.photo }} />
              <Title>{item.nameRef}</Title>
              <Paragraph>{item.cod}</Paragraph>
              <CardPrice>
                <Price>{item.price}</Price>
                <ViewBottom>
                  <Quantidade>
                    Quantidade:
                    {' '}
                    {item.quant}
                  </Quantidade>
                  <TouchableOpacity onPress={() => {}}>
                    <Image source={delet} />
                  </TouchableOpacity>
                </ViewBottom>
              </CardPrice>
            </Cards>
          </View>
        )}
      />
      <Barras>
        <BarraDiscount>
          <Row>
            <Image source={price} />
            <TitlePrice>APLICAR DESCONTO</TitlePrice>
          </Row>
          <Discount
            placeholder="R$ 00,00"
            placeholderTextColor="#000"
            keyboardType="numeric"
            onChangeText={() => {}}
            onSubmitEditing={() => {}}
          />
        </BarraDiscount>
        <BarraPrice>
          <Row>
            <Image source={money} />
            <TitlePrice>TOTAL</TitlePrice>
          </Row>
          <TitleValue>R$ 61,87</TitleValue>
        </BarraPrice>
        <BarraProsseguir onPress={() => {}}>
          <Title style={{ color: '#fff' }}>Prosseguir</Title>
        </BarraProsseguir>
      </Barras>
    </Container>
  );
}
