import React, { useEffect, SetStateAction } from 'react';
import {
  View, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';

import {
  Container, Cards, CardPrice, Price, Barras, BarraPrice, Discount, Quantidade,
  Row, TitlePrice, TitleValue, BarraProsseguir, BarraDiscount, ViewBottom,
} from './styles';

import money from '../../../../assets/moneyPrice.png';
import price from '../../../../assets/price.png';
import delet from '../../../../assets/delete.png';

interface Product {
  codigo: number;
  nome: string;
  preco: number;
  url_image: string;
  quantidade: number;
}

type ParamList = {
  NewPedidoConfirmacao: {
    totalValor: number;
    products: Product[];
  };
};

export default function NewPedidoConfirmacao() {
  const route = useRoute<RouteProp<ParamList, 'NewPedidoConfirmacao'>>();
  const { totalValor, products } = route.params;

  const [items, setItems] = React.useState<Product[]>([]);
  const [total, setTotal] = React.useState<Number>(0);

  useEffect(() => {
    setItems(products);
    setTotal(totalValor);
  }, []);

  return (
    <Container>

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {
          items.map((item) => (
            <View key={String(Math.random())} style={{ width: '45%', marginVertical: 10 }}>
              <Cards>
                <Card.Cover style={{ height: 100 }} source={{ uri: item.url_image }} />
                <Title>{item.nome}</Title>
                <Paragraph>{item.codigo}</Paragraph>
                <CardPrice>
                  <Price>{item.preco}</Price>
                  <ViewBottom>
                    <Quantidade>
                      Quantidade:
                      {' '}
                      {item.quantidade}
                    </Quantidade>
                    <TouchableOpacity onPress={() => {}}>
                      <Image source={delet} />
                    </TouchableOpacity>
                  </ViewBottom>
                </CardPrice>
              </Cards>
            </View>
          ))
        }
      </ScrollView>

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
          <TitleValue>
            R$
            {' '}
            {total.toFixed(2)}
          </TitleValue>
        </BarraPrice>
        <BarraProsseguir onPress={() => {}}>
          <Title style={{ color: '#fff' }}>Prosseguir</Title>
        </BarraProsseguir>
      </Barras>
    </Container>
  );
}
