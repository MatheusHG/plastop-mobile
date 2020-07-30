import React from 'react';
import {
  StyleSheet, View, Button, TouchableOpacity,
} from 'react-native';
import { TextInput, Title } from 'react-native-paper';

export default function Rota() {
  const [codigo, setCodigo] = React.useState('');
  const [nomeProduto, setNomeProduto] = React.useState('');
  const [preco, setPreco] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30, width: '100%', alignItems: 'center' }}>
        <TextInput
          label="Código do Produto"
          value={codigo}
          mode="flat"
          underlineColor="#03071E"
          selectionColor="#03071E"
          theme={{ colors: { primary: '#03071E' } }}
          style={{ width: '90%', marginBottom: 30, backgroundColor: '#fff' }}
          onChangeText={(text) => setCodigo(text)}
        />
        <TextInput
          label="Nome do Produto"
          value={nomeProduto}
          mode="flat"
          underlineColor="#03071E"
          selectionColor="#03071E"
          theme={{ colors: { primary: '#03071E' } }}
          style={{ width: '90%', marginBottom: 30, backgroundColor: '#fff' }}
          onChangeText={(text) => setNomeProduto(text)}
        />
        <TextInput
          label="Preço (R$)"
          value={preco}
          mode="flat"
          underlineColor="#03071E"
          selectionColor="#03071E"
          theme={{ colors: { primary: '#03071E' } }}
          style={{ width: '90%', marginBottom: 30, backgroundColor: '#fff' }}
          onChangeText={(text) => setPreco(text)}
        />
      </View>
      <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <TouchableOpacity style={{ backgroundColor: '#FFBE0B', alignItems: 'center', padding: 10 }} onPress={() => {}}>
          <Title style={{ color: '#03071E' }}>Finalizar</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
