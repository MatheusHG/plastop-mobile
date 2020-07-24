import React from 'react';
import { View, Image } from 'react-native';
import { Appbar, List } from 'react-native-paper'

import styles from './styles'

export default function Rota() {
  return (
    <View style={styles.containerMenu}>
      <Appbar.Header style={styles.headerMenu}>
        <Image source={require('../../../assets/splash-min.png')} style={{width: '45%', marginBottom: 'auto'}} />
      </Appbar.Header>

      <List.Section style={styles.sectionMenu}>
        <View style={styles.itemMenuBottom}>
          <List.Item onPress={() => {}} title="Novo Pedido" titleStyle={styles.titleMenu}
            left={() => <Image source={require('../../../assets/addProduct.png')}  style={styles.itemMenu} />}
            right={() => <Image source={require('../../../assets/next.png')}  style={styles.itemMenuNext} />} />
        </View>
        <View style={styles.itemMenuBottom}>
          <List.Item onPress={() => {}} title="Todos os Pedidos" titleNumberOfLines={2} titleStyle={styles.titleMenu}
            left={() => <Image source={require('../../../assets/all.png')}  style={styles.itemMenu} />}
            right={() => <Image source={require('../../../assets/next.png')}  style={styles.itemMenuNext} />} />
        </View>
        <View style={styles.itemMenuBottom}>
          <List.Item onPress={() => {}} title="Clientes" titleStyle={styles.titleMenu}
            left={() => <Image source={require('../../../assets/friends.png')}  style={styles.itemMenu} />}
            right={() => <Image source={require('../../../assets/next.png')}  style={styles.itemMenuNext} />} />
        </View>
        <View style={styles.itemMenuBottom}>
          <List.Item onPress={() => {}} title="Gerenciamento dos Produtos" titleNumberOfLines={2} titleStyle={styles.titleMenu}
            left={() => <Image source={require('../../../assets/gerenciar.png')}  style={styles.itemMenu} />}
            right={() => <Image source={require('../../../assets/next.png')}  style={styles.itemMenuNext} />} />
        </View>
      </List.Section>
    </View>
  );
};