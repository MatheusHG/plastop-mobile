import React, { useEffect } from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Image, Dimensions, StatusBar,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ConfirmationIcon from '../../../assets/confirmation.png';

type ParamList = {
  Confirmacao: {
    codigoPedido: number;
  };
};

export default function Confirmacao() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Confirmacao'>>();
  const { codigoPedido } = route.params;

  useEffect(() => {
    setTimeout(() => navigation.reset({
      index: 1,
      routes: [{ name: 'Menu' }, { name: 'AllPedidosDetalhes', params: { codigoPedido } }],
    }), 2000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#4CFF74" />
      <View style={styles.container}>
        <Image style={styles.imagem} source={ConfirmationIcon} />
        <Text style={styles.texto}>Pedido Realizado!</Text>
      </View>
    </>
  );
}
const { width } = Dimensions.get('window'); // full width
const { height } = Dimensions.get('window'); // full height

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    margin: 16,
    right: 0,
    top: 0,
  },
  container: {
    height,
    width,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CFF74',
  },
  imagem: {
    width: 150,
    height: 140,
    marginTop: 250,
  },
  texto: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 24,
    marginTop: 30,
  },
});
