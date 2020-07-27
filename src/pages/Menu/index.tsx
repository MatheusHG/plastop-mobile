import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ScrollView } from 'react-native';
import { Appbar, List } from 'react-native-paper';

import styles from './styles';

import splashMin from '../../../assets/splash-min.png';
import addProduct from '../../../assets/addProduct.png';
import next from '../../../assets/next.png';
import all from '../../../assets/all.png';
import friends from '../../../assets/friends.png';
import gerenciar from '../../../assets/gerenciar.png';

export default function Rota() {
  const navigation = useNavigation();

  function handleNavigationNewPedido() {
    navigation.navigate('NewPedidoHome');
  }
  function handleNavigationAllPedidosHome() {
    navigation.navigate('AllPedidosHome');
  }
  function handleNavigationClientesHome() {
    navigation.navigate('ClientesHome');
  }
  function handleNavigationGerenciamentoHome() {
    navigation.navigate('GerenciamentoHome');
  }

  return (
    <View style={styles.containerMenu}>
      <Appbar.Header style={styles.headerMenu}>
        <Image source={splashMin} style={{ width: '45%', marginBottom: 'auto' }} />
      </Appbar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <List.Section style={styles.sectionMenu}>
          <View style={styles.itemMenuBottom}>
            <List.Item
              onPress={handleNavigationNewPedido}
              title="Novo Pedido"
              titleStyle={styles.titleMenu}
              left={() => <Image source={addProduct} style={styles.itemMenu} />}
              right={() => <Image source={next} style={styles.itemMenuNext} />}
            />
          </View>
          <View style={styles.itemMenuBottom}>
            <List.Item
              onPress={handleNavigationAllPedidosHome}
              title="Todos os Pedidos"
              titleNumberOfLines={2}
              titleStyle={styles.titleMenu}
              left={() => <Image source={all} style={styles.itemMenu} />}
              right={() => <Image source={next} style={styles.itemMenuNext} />}
            />
          </View>
          <View style={styles.itemMenuBottom}>
            <List.Item
              onPress={handleNavigationClientesHome}
              title="Clientes"
              titleStyle={styles.titleMenu}
              left={() => <Image source={friends} style={styles.itemMenu} />}
              right={() => <Image source={next} style={styles.itemMenuNext} />}
            />
          </View>
          <View style={styles.itemMenuBottom}>
            <List.Item
              onPress={handleNavigationGerenciamentoHome}
              title="Gerenciamento dos Produtos"
              titleNumberOfLines={2}
              titleStyle={styles.titleMenu}
              left={() => <Image source={gerenciar} style={styles.itemMenu} />}
              right={() => <Image source={next} style={styles.itemMenuNext} />}
            />
          </View>
        </List.Section>
      </ScrollView>

    </View>
  );
}
