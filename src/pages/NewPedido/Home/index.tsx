import React, { SetStateAction } from 'react';
import {
  Text, View, TouchableOpacity, Image, Alert, ScrollView,
} from 'react-native';
import {
  Searchbar, Card, Title, Paragraph, Dialog, TextInput, Button,
} from 'react-native-paper';
import debounce from 'awesome-debounce-promise';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import LoadingModal from '../../../components/LoadingModal';
import api from '../../../services/api';
import money from '../../../../assets/moneyPrice.png';
import { NewOrderProduct } from '../../../interfaces';
import styles from './styles';
import mais1 from '../../../../assets/mais2.png';
import menos from '../../../../assets/menos2.png';

interface Product {
  codigo: number;
  nome: string;
  preco: number;
  url_image: string;
  quantidade: number;
}

type ParamList = {
  NewPedidoHome: {
    fromHome?: boolean;
  };
};

function formatPrice(price: number) {
  return `R$${price.toFixed(2)}`.replace('.', ',');
}

export default function NewPedidosHome() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'NewPedidoHome'>>();
  let fromHome: boolean | undefined = false;
  if (route.params) {
    fromHome = route.params.fromHome;
  }

  const [modal, setModal] = React.useState(false);
  const [modalItem, setModalItem] = React.useState<Product>({
    codigo: 0,
    nome: '',
    preco: 0,
    quantidade: 0,
    url_image: '-',
  });
  const [inputQuantity, setInputQuantity] = React.useState('0');

  const [searchQuery, setSearchQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [originalItems, setOriginalItems] = React.useState<NewOrderProduct[]>([]);
  const [items, setItems] = React.useState<NewOrderProduct[]>([]);
  const [total, setTotal] = React.useState<Number>(0);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get('/produtos');

      const newItems = response.data.map((e: NewOrderProduct) => {
        e.quantidade = 0;
        return e;
      });

      setOriginalItems(newItems);
      setItems(newItems);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert('Ocorreu um erro na comunicação com o servidor.');
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (fromHome) {
        getProducts();
        setTotal(0);
        fromHome = false;
      }
    });

    return unsubscribe;
  }, [navigation]);

  const handleClick = () => {
    navigation.navigate('NewPedidoConfirmacao', {
      totalValor: total,
      products: originalItems.filter((e) => e.quantidade > 0),
    });
  };

  const searchItem = debounce((search) => {
    if (search) {
      const resultName = originalItems.filter((item) => {
        const normalizedName = item.nome.toLowerCase();
        const normalizedSearch = search.toLowerCase();

        return normalizedName.includes(normalizedSearch);
      });

      const resultCode = originalItems.filter((item) => String(item.codigo).includes(search));

      return [...resultName, ...resultCode];
    }

    return originalItems;
  }, 300);

  const onChangeSearch = async (query: SetStateAction<string>) => {
    setSearchQuery(query);

    const newItems = await searchItem(query);
    setItems(newItems);
  };

  const handlePlus = (code: number) => {
    let newTotal = 0;

    const newItems = originalItems.map((e) => {
      if (e.codigo === code) {
        e.quantidade += 1;
      }

      newTotal += e.preco * e.quantidade;
      return e;
    });

    setOriginalItems(newItems);
    setTotal(newTotal);
  };

  const handleMinus = (code: number) => {
    let newTotal = 0;

    const newItems = originalItems.map((e) => {
      if (e.codigo === code) {
        e.quantidade -= 1;
        if (e.quantidade < 0) e.quantidade = 0;
      }

      newTotal += e.preco * e.quantidade;
      return e;
    });

    setOriginalItems(newItems);
    setTotal(newTotal);
  };

  const handleQuantity = () => {
    let newTotal = 0;

    const newItems = originalItems.map((e) => {
      if (e.codigo === modalItem.codigo) {
        e.quantidade = Number(inputQuantity);
      }

      newTotal += e.preco * e.quantidade;
      return e;
    });

    setOriginalItems(newItems);
    setTotal(newTotal);
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />

      <ScrollView
        style={{
          width: '100%',
          height: '100%',
        }}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {
          items.map((item) => (
            <View key={String(Math.random())} style={{ width: '45%', marginVertical: 10 }}>
              <Card style={styles.card}>
                <Card.Cover style={styles.cardPhoto} source={{ uri: item.url_image }} />
                <Title>{item.nome}</Title>
                <Paragraph>
                  Cod.:
                  {' '}
                  {item.codigo}
                </Paragraph>
                <View style={styles.botton}>
                  <Title style={styles.cardPrice}>{formatPrice(item.preco)}</Title>
                  <View style={styles.flexRow}>
                    <TouchableOpacity onPress={() => handleMinus(item.codigo)}>
                      <Image style={{ width: 30, height: 30 }} source={menos} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setModalItem(item);
                        setModal(true);
                      }}
                      style={{ marginHorizontal: 10 }}
                    >
                      <Text style={{ fontSize: 18 }}>{item.quantidade}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handlePlus(item.codigo)}>
                      <Image style={{ width: 30, height: 30 }} source={mais1} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.barras}>
        <View style={styles.barraPrice}>
          <View style={styles.flexRow}>
            <Image source={money} />
            <Title style={styles.barraPriceTitle}>Preço total da Venda</Title>
          </View>
          <View>
            <Title style={styles.price}>
              R$
              {' '}
              {total.toFixed(2)}
            </Title>
          </View>
        </View>
        <TouchableOpacity style={styles.barraProceed} onPress={() => handleClick()}>
          <Title style={{ color: '#fff' }}>Prosseguir</Title>
        </TouchableOpacity>
      </View>

      <LoadingModal isVisible={loading} />
      <Dialog visible={modal} onDismiss={() => setModal(false)}>
        <View style={{
          height: 200,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}
        >
          <TextInput
            label="Nova quantidade do produto"
            style={{
              width: '100%',
              marginBottom: 10,
              backgroundColor: '#FFF',
              fontWeight: 'bold',
            }}
            theme={{ colors: { primary: '#03071E' } }}
            value={inputQuantity}
            autoCapitalize="none"
            onChangeText={(text: string) => setInputQuantity(String(Number(text)))}
          />
          <Dialog.Actions>
            <Button
              onPress={handleQuantity}
              mode="contained"
              theme={{ colors: { primary: '#27a333' } }}
            >
              Confirmar

            </Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </View>
  );
}
