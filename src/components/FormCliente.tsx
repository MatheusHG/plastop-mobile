import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default function FormCLiente() {
  const theme = { colors: { primary: '#03071E' } };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerRow}>
        <TextInput
          label="Nome do Cliente"
          style={styles.large}
          theme={theme}
        />
        <TextInput
          label="Código"
          style={styles.medium}
          keyboardType="number-pad"
          maxLength={8}
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Razão Social"
          style={styles.large}
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Nome Fantasia"
          style={styles.large}
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="CNPJ/CPF"
          style={styles.large}
          keyboardType="number-pad"
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Incrição Estadual/RG"
          style={styles.large}
          keyboardType="number-pad"
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Cidade"
          style={styles.large}
          theme={theme}
        />
        <TextInput
          label="UF"
          style={styles.medium}
          maxLength={2}
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Endereço"
          style={styles.large}
          theme={theme}
        />
        <TextInput
          label="Número"
          style={styles.medium}
          keyboardType="number-pad"
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Bairro"
          style={styles.large}
          theme={theme}
        />
      </View>
      <View style={styles.containerRow}>
        <TextInput
          label="Telefone 1"
          style={styles.large}
          keyboardType="number-pad"
          theme={theme}
        />
        <TextInput
          label="Telefone 2"
          keyboardType="number-pad"
          style={styles.large}
          theme={theme}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  large: {
    flex: 2,
    margin: 10,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
  },
  medium: {
    flex: 1,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    margin: 10,
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
  },
});
