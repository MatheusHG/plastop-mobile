import React, { useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
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

  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getClients = async () => {
    setLoading(true);
    try {
      const response = await api.get('/clientes');
      setLoading(false);

      setClients(response.data);
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

  const handleClick = () => {
    navigation.navigate('ClientesDados', { isNew: true, isOrder });
  };

  const handleClickCard = (item: Client) => {
    navigation.navigate('ClientesDados', { isNew: false, codigo: item.codigo, isOrder });
  };

  return (
    <Container>
      <FlatList
        data={clients}
        keyExtractor={() => String(Math.random())}
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
