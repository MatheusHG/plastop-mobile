import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  View, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import { Dispatch } from 'redux';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { State, ProductOrder } from '../../../interfaces';

import {
  Container, Cards, CardPrice, Price, Barras, BarraPrice, Discount, Quantidade,
  Row, TitlePrice, TitleValue, BarraProsseguir, BarraDiscount, ViewBottom,
} from './styles';

import money from '../../../../assets/moneyPrice.png';
import price from '../../../../assets/price.png';
import delet from '../../../../assets/delete.png';

type ParamList = {
  NewPedidoConfirmacao: {
    totalValor: number;
    products: ProductOrder[];
  };
};

interface PageProps {
  setProducts: (products: ProductOrder[]) => void;
}

function formatPrice(priceNum: number) {
  return `R$${priceNum.toFixed(2)}`.replace('.', ',');
}

function NewPedidoConfirmacao({ setProducts }: PageProps) {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'NewPedidoConfirmacao'>>();
  const { totalValor, products } = route.params;

  const [items, setItems] = React.useState<ProductOrder[]>([]);
  const [originalTotal, setOriginalTotal] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [discount, setDiscount] = React.useState<number>(0);

  useEffect(() => {
    setItems(products);
    setTotal(totalValor);
    setOriginalTotal(totalValor);
  }, []);

  useEffect(() => {
    const newValue = Math.max(originalTotal - discount, 0);

    if (discount) setTotal(newValue);
    else if (originalTotal) setTotal(originalTotal);
  }, [discount]);

  const onDelete = (code: number) => {
    let newValue = 0;

    const newItems = items.filter((e) => {
      if (e.codigo !== code) {
        newValue += e.preco * e.quantidade;

        return true;
      }

      return false;
    });

    setItems(newItems);
    setTotal(newValue);
  };

  const handleNext = () => {
    setProducts(items.map((e) => {
      e.codigo_produto = e.codigo;
      e.url_imagem = e.url_image;

      return e;
    }));
    navigation.navigate('ClientesHome', { isOrder: true });
  };

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
                <Paragraph>
                  Cod.:
                  {' '}
                  {item.codigo}
                </Paragraph>
                <CardPrice>
                  <Price>{formatPrice(item.preco)}</Price>
                  <ViewBottom>
                    <Quantidade>
                      Quantidade:
                      {' '}
                      {item.quantidade}
                    </Quantidade>
                    <TouchableOpacity onPress={() => onDelete(item.codigo)}>
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
            placeholderTextColor="#000"
            keyboardType="numeric"
            onChangeText={(text: string) => setDiscount(Number(text || '0'))}
          />
        </BarraDiscount>
        <BarraPrice>
          <Row>
            <Image source={money} />
            <TitlePrice>TOTAL</TitlePrice>
          </Row>
          <TitleValue>
            {formatPrice(total)}
          </TitleValue>
        </BarraPrice>
        <BarraProsseguir onPress={handleNext}>
          <Title style={{ color: '#fff' }}>Prosseguir</Title>
        </BarraProsseguir>
      </Barras>
    </Container>
  );
}

const mapStateToProps = ({ isLoading, token }: State) => ({
  isLoading, token,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setProducts: (products: ProductOrder[]) => {
    dispatch({
      type: 'SET_PRODUCTS',
      payload: { products },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPedidoConfirmacao);
