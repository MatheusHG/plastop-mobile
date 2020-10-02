import React, { useEffect, useState, SetStateAction } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Alert } from 'react-native';
import {
  Searchbar, Card, Title, Paragraph, IconButton, Colors, Button, Dialog, Portal,
} from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

import api from '../../../services/api';
import LoadingModal from '../../../components/LoadingModal';
import FabButton from '../../../components/FabButton';

import styles from './styles';

interface Product {
  codigo: number;
  nome: string;
  preco: number;
  url_image: string;
}

export default function Rota() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await api.get('/produtos');
        setLoading(false);

        setItems(response.data);
      } catch (error) {
        setLoading(false);
        Alert.alert('Ocorreu um erro na comunicação com o servidor.');
      }
    })();
  }, []);

  function handleNavigationCadastrar() {
    navigation.navigate('GerenciamentoCadastrar');
  }

  const onChangeSearch = (query: SetStateAction<string>) => setSearchQuery(query);

  const hideDialog = () => setVisible(false);

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
              <Card.Cover style={styles.cardPhoto} source={{ uri: item.url_image }} />
              <Title>{item.nome}</Title>
              <Paragraph>{item.codigo}</Paragraph>
              <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <Title style={styles.cardPrice}>{item.preco}</Title>
                <IconButton
                  icon="delete"
                  color={Colors.red500}
                  size={24}
                  onPress={() => setVisible(true)}
                  style={styles.delete}
                />
              </View>
            </Card>
          </View>
        )}
      />
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Paragraph style={styles.modalTitle}>Deseja realmente Deletar o produto?</Paragraph>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)} theme={{ colors: { primary: 'red' } }}>Cancelar</Button>
          <Button onPress={() => {}} theme={{ colors: { primary: '#4CAF50' } }}>Confirmar</Button>
        </Dialog.Actions>
      </Dialog>

      <LoadingModal isVisible={loading} />
      <FabButton icon="plus" onPress={handleNavigationCadastrar} />
    </View>

  );
}
