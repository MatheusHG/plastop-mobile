import React from 'react';
import {
  StyleSheet, Text, View, Dimensions, Image, TouchableOpacity,
} from 'react-native';
import { Title } from 'react-native-paper';
// import styles from '../../Login/styles';
import Calendario from '../../../../assets/calendario.png';
import Dinheiro from '../../../../assets/dinheiro.png';
import FormCLiente from '../../../components/FormCliente';

export default function Rota() {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <Text style={styles.titulo}>Última Compra</Text>
        <View style={styles.containerAmarelo}>
          <View style={styles.containerAmarelo}>
            <Image style={styles.imagem} source={Calendario} />
            <Text style={styles.text}>02/04/1990</Text>
          </View>
          <View style={styles.containerAmarelo}>
            <Image style={styles.imagem} source={Dinheiro} />
            <Text style={styles.text}>02/04/1990</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerList}>
        <FormCLiente />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.deletar} onPress={() => {}}>
          <Title style={{ color: '#FFF' }}>Deletar</Title>
        </TouchableOpacity>
        <TouchableOpacity style={styles.salvar} onPress={() => {}}>
          <Title style={{ color: '#FFF' }}>Salvar</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor: '#f3ca40',
    width,
    flex: 1,
  },
  containerAmarelo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  imagem: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  containerList: {
    flex: 5,
    padding: 10,
    marginBottom: 100,
  },
  container: {
    width,
    height,
    flexDirection: 'column',
  },
  text: {
    fontSize: 18,
  },
  titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 5,
  },
  button: {
    width,
    position: 'absolute',
    bottom: 10,
  },
  salvar: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#4CAF50',
  },
  deletar: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FF0000',
  },
});
