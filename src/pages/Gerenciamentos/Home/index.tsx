import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import {
  Searchbar, Card, Title, Paragraph, IconButton, Colors,
} from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';
import FabButton from '../../../components/FabButton';

import styles from './styles';

export default function Rota() {
  const navigation = useNavigation();

  function handleNavigationCadastrar() {
    navigation.navigate('GerenciamentoCadastrar');
  }

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const [items, setItems] = React.useState([
    {
      photo: 'https://http2.mlstatic.com/pacoto-rabico-de-cabelo-xuxinhas-com-20-unidades-colorido-D_NQ_NP_997836-MLB27172348581_042018-F.jpg', nameRef: 'Xuxinhas pac. 10 unidades', cod: 'Cód.: 0205', price: 'R$ 9,99',
    },
    {
      photo: 'https://lh3.googleusercontent.com/proxy/Vix-I2bVHnAIwPi-wulHOjvy6eAxFsjxd4PxvH3L9qiuuKFOACavsvb4Ig6x2pxczSKTQJmTChr7JNVtzNCws2NCFC2g_PIq1zR1prijzFWLPaJZrSf_eqW2CpjvZ26gTJKPnrTGBA0NqnxkR7wuMdqaNU8tTwSAroXTW4M', nameRef: 'Prendedor de Roupa', cod: 'Cód.: 5986', price: 'R$ 2,90',
    },
    {
      photo: 'https://www.callfarma.com.br/imagens/produtos/lixa-para-pes-e-v-a-rosa-zalike.png', nameRef: 'Lixa de Pé EVA', cod: 'Cód.: 7845', price: 'R$ 6,90',
    },
    {
      photo: 'https://blisther.com.br/produtos/produto1250-1.jpg', nameRef: 'Varal Nylon', cod: 'Cód.: 2398', price: 'R$ 2,99',
    },
    {
      photo: 'https://http2.mlstatic.com/coador-de-cafe-de-pano-industrial-9-unid--D_NQ_NP_925648-MLB31130842396_062019-F.jpg', nameRef: 'Coador de Café', cod: 'Cód.: 0125', price: 'R$ 5,99',
    },
    {
      photo: 'https://static3.tcdn.com.br/img/img_prod/159791/lixa_para_unhas_preta_reta_com_gramatura_01_unidade_santa_clara_4191_1_20181210111746.jpg', nameRef: 'Lixa de Unhas', cod: 'Cód.: 5642', price: 'R$ 7,90',
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
              <IconButton
                icon="delete"
                color={Colors.red500}
                size={20}
                onPress={() => {}}
                style={styles.delete}
              />
              <Title style={styles.cardPrice}>{item.price}</Title>
            </Card>
          </View>
        )}
      />
      <FabButton icon="plus" onPress={handleNavigationCadastrar} />
    </View>
  );
}
