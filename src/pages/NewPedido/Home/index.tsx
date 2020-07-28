import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import {
  Searchbar, Card, Title, Paragraph, IconButton, Colors,
} from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

import money from '../../../../assets/moneyPrice.png';
import mais1 from '../../../../assets/mais1.png';
import menos from '../../../../assets/menos.png';

import styles from './styles';

export default function Rota() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const [items, setItems] = React.useState([
    {
      photo: 'https://http2.mlstatic.com/pacoto-rabico-de-cabelo-xuxinhas-com-20-unidades-colorido-D_NQ_NP_997836-MLB27172348581_042018-F.jpg', nameRef: 'Xuxinhas pac. 10 unidades', cod: 'Cód.: 0205', price: 'R$ 9,99', quant: 0,
    },
    {
      photo: 'https://lh3.googleusercontent.com/proxy/Vix-I2bVHnAIwPi-wulHOjvy6eAxFsjxd4PxvH3L9qiuuKFOACavsvb4Ig6x2pxczSKTQJmTChr7JNVtzNCws2NCFC2g_PIq1zR1prijzFWLPaJZrSf_eqW2CpjvZ26gTJKPnrTGBA0NqnxkR7wuMdqaNU8tTwSAroXTW4M', nameRef: 'Prendedor de Roupa', cod: 'Cód.: 5986', price: 'R$ 2,90', quant: 0,
    },
    {
      photo: 'https://www.callfarma.com.br/imagens/produtos/lixa-para-pes-e-v-a-rosa-zalike.png', nameRef: 'Lixa de Pé EVA', cod: 'Cód.: 7845', price: 'R$ 6,90', quant: 0,
    },
    {
      photo: 'https://blisther.com.br/produtos/produto1250-1.jpg', nameRef: 'Varal Nylon', cod: 'Cód.: 2398', price: 'R$ 2,99', quant: 0,
    },
    {
      photo: 'https://http2.mlstatic.com/coador-de-cafe-de-pano-industrial-9-unid--D_NQ_NP_925648-MLB31130842396_062019-F.jpg', nameRef: 'Coador de Café', cod: 'Cód.: 0125', price: 'R$ 5,99', quant: 0,
    },
    {
      photo: 'https://static3.tcdn.com.br/img/img_prod/159791/lixa_para_unhas_preta_reta_com_gramatura_01_unidade_santa_clara_4191_1_20181210111746.jpg', nameRef: 'Lixa de Unhas', cod: 'Cód.: 5642', price: 'R$ 7,90', quant: 0,
    },
  ]);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />

      <FlatGrid
        itemDimension={130}
        showsVerticalScrollIndicator={false}
        data={items}
        spacing={10}
        renderItem={({ item }) => (
          <View>
            <Card style={styles.card}>
              <Card.Cover style={styles.cardPhoto} source={{ uri: item.photo }} />
              <Title>{item.nameRef}</Title>
              <Paragraph>{item.cod}</Paragraph>
              <View style={styles.botton}>
                <Title style={styles.cardPrice}>{item.price}</Title>
                <View style={styles.flexRow}>
                  <TouchableOpacity>
                    <Image source={menos} />
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 8 }}>{item.quant}</Text>
                  <TouchableOpacity onPress={() => {}}>
                    <Image source={mais1} />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </View>
        )}
      />
      <View style={styles.barras}>
        <View style={styles.barraPrice}>
          <View style={styles.flexRow}>
            <Image source={money} />
            <Title style={styles.barraPriceTitle}>Preço total da Venda</Title>
          </View>
          <View>
            <Title style={styles.price}>R$ 61,87</Title>
          </View>
        </View>
        <TouchableOpacity style={styles.barraProceed} onPress={() => {}}>
          <Title style={{ color: '#fff' }}>Prosseguir</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}
