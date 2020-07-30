import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

export default function Rota() {
  const navigation = useNavigation();

  function handleNavigationMenu() {
    navigation.navigate('Menu');
  }

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem vindo(a)</Text>
          <Text style={styles.titleSub}>
            Ao aplicativo de vendas da Empresa
            <Text style={{ color: '#FFBE0B' }}> Plastop</Text>
          </Text>
          <Text style={styles.titleLogin}>Faça seu login para começar as suas vendas</Text>
        </View>

        <View style={styles.inputLogin}>
          <View style={styles.action}>
            <Icon
              name="user"
              color="#000"
              size={20}
              style={{
                padding: 10, borderRightWidth: 1, borderRightColor: '#c1c1c1', marginRight: 15,
              }}
            />
            <TextInput
              placeholder="E-mail"
              placeholderTextColor="#c1c1c1"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <Icon
              name="lock"
              color="#000"
              size={20}
              style={{
                padding: 10, borderRightWidth: 1, borderRightColor: '#c1c1c1', marginRight: 15,
              }}
            />
            <TextInput
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor="#c1c1c1"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleNavigationMenu}>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
