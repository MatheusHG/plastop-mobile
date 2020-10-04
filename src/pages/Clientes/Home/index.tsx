import React, { useState, SetStateAction } from 'react';
import { FlatList, Alert, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import debounce from 'awesome-debounce-promise';
import { Searchbar } from 'react-native-paper';
import { Container } from './styles';

import LoadingModal from '../../../components/LoadingModal';
import ClientCard from './components/ClientCard';
import FabButton from '../../../components/FabButton';
import api from '../../../services/api';
import { Client } from '../../../interfaces';

type ParamList = {
  ClientesHome: {
    isOrder?: boolean;
  };
};

function ClientesHome() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'ClientesHome'>>();
  const { isOrder } = route.params;

  const [originalClients, setOriginalClients] = useState<Client[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getClients = async () => {
    setLoading(true);
    try {
      const response = await api.get('/clientes');
      setLoading(false);

      setClients(response.data);
      setOriginalClients(response.data);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ocorreu um erro na comunicação com o servidor.');
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getClients();
    });

    return unsubscribe;
  }, [navigation]);

  const searchItem = debounce((search) => {
    if (search) {
      const result = originalClients.filter((item) => {
        if (!item.nome) return false;

        const normalizedName = item.nome.toLowerCase();
        const normalizedSearch = search.toLowerCase();

        return normalizedName.includes(normalizedSearch);
      });

      return result;
    }

    return originalClients;
  }, 300);

  const onChangeSearch = async (query: SetStateAction<string>) => {
    setSearchQuery(query);

    const newItems = await searchItem(query);
    setClients(newItems);
  };

  const handleClick = () => {
    navigation.navigate('ClientesDados', { isNew: true, isOrder });
  };

  const handleClickCard = (item: Client) => {
    navigation.navigate('ClientesDados', { isNew: false, codigo: item.codigo, isOrder });
  };

  return (
    <Container>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          backgroundColor: '#EEEEEE',
          marginTop: 10,
          width: '95%',
          borderRadius: 15,
        }}
      />

      <FlatList
        data={clients}
        keyExtractor={() => String(Math.random())}
        style={{
          width: '95%',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: '100%',
          paddingBottom: 75,
        }}
        renderItem={
        ({ item }: { item: Client }) => (
          <ClientCard
            client={item}
            onPress={() => handleClickCard(item)}
          />
        )
      }
      />
      <FabButton icon="plus" onPress={handleClick} />
      <LoadingModal isVisible={loading} />
    </Container>
  );
}

export default ClientesHome;
