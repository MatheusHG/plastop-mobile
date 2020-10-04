import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { Button, Dialog, Paragraph } from 'react-native-paper';
import {
  StrongInfo, Info,
} from '../Home/styles';
import {
  Container, DetailsContainer, Title, Data, DataContainer, DataWrap, Space,
} from './styles';
import api from '../../../services/api';
import FabButton from '../../../components/FabButton';
import LoadingModal from '../../../components/LoadingModal';
import ShareButton from './components/ShareButton';
import ProductCard from './components/ProductCard';
import { Order, Product } from '../../../interfaces';

type ParamList = {
  AllPedidosDetalhes: {
    codigoPedido: number;
  };
};

function formatPrice(price: number) {
  return `R$${price.toFixed(2)}`.replace('.', ',');
}

export default function OrderDetails() {
  const route = useRoute<RouteProp<ParamList, 'AllPedidosDetalhes'>>();
  const navigation = useNavigation();
  const { codigoPedido } = route.params;

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codigo, setCodigo] = useState<string | undefined>('');
  const [total, setTotal] = useState<string | undefined>('');
  const [codigoCliente, setCodigoCliente] = useState<string | undefined>('');
  const [pagamento, setPagamento] = useState<string | undefined>('');
  const [observacao, setObservacao] = useState<string | undefined>('');
  const [data, setData] = useState<string | undefined>('');
  const [nome, setNome] = useState<string | undefined>('');
  const [nomeFantasia, setNomeFantasia] = useState<string | undefined>('');
  const [cidade, setCidade] = useState<string | undefined>('');
  const [rua, setRua] = useState<string | undefined>('');
  const [uf, setUf] = useState<string | undefined>('');
  const [numero, setNumero] = useState<string | undefined>('');
  const [telefone1, setTelefone1] = useState<string | undefined>('');
  const [telefone2, setTelefone2] = useState<string | undefined>('');
  const [products, setProducts] = useState<Product[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareButton onPress={() => console.log('compartilhou')} />,
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const response = await api.get(`/pedidos?codigo=${codigoPedido}`);
        const { pedido, produtos }: { pedido: Order, produtos: Product[] } = response.data;

        setLoading(false);
        setCodigo(String(pedido.codigo));
        setTotal(pedido.total);
        setCodigoCliente(String(pedido.codigo_cliente));
        setPagamento(pedido.pagamento);
        setObservacao(pedido.observacao);
        setData(pedido.data);
        setNome(pedido.nome);
        setNomeFantasia(pedido.nome_fantasia);
        setCidade(pedido.cidade);
        setRua(pedido.rua);
        setUf(pedido.uf);
        setNumero(String(pedido.numero));
        setTelefone1(pedido.telefone1);
        setTelefone2(pedido.telefone2);

        setProducts(produtos);
      } catch (error) {
        setLoading(false);
        Alert.alert('Ocorreu um erro na comunicação com o servidor.');
      }
    })();
  }, []);

  const onDelete = async () => {
    setLoading(true);
    try {
      const response = await api.delete(`/pedidos/${codigo}`);

      Alert.alert(response.data.message);

      setLoading(false);
      navigation.navigate('AllPedidosHome');
    } catch (error) {
      setLoading(false);

      if (error.response) {
        if (error.response.data.error) {
          Alert.alert(error.response.data.error);
        } else {
          Alert.alert('Ocorreu um erro inesperado.');
        }
      } else {
        Alert.alert('Ocorreu algum erro na comunicação com o servidor.');
      }
    }
  };

  return (
    <>
      <Container>
        <DetailsContainer>
          <Title>Endereço da Entrega</Title>
          <Data>
            <DataContainer>
              <DataWrap width="100%">
                <StrongInfo>Nome do Cliente: </StrongInfo>
                <Info>{nome}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Forma de Pagamento: </StrongInfo>
                <Info>{pagamento}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Telefone1: </StrongInfo>
                <Info>{telefone1}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Telefone: </StrongInfo>
                <Info>{telefone2}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>Cidade: </StrongInfo>
                <Info>{cidade}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>UF: </StrongInfo>
                <Info>{uf}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>Endereço: </StrongInfo>
                <Info>{rua}</Info>
              </DataWrap>

              <DataWrap>
                <StrongInfo>Número: </StrongInfo>
                <Info>{numero}</Info>
              </DataWrap>

              <DataWrap width="100%">
                <StrongInfo>Nome da Loja: </StrongInfo>
                <Info>{nomeFantasia}</Info>
              </DataWrap>

              <DataWrap width="100%" wrap>
                <StrongInfo>Observação: </StrongInfo>
                <Info>{observacao}</Info>
              </DataWrap>

              <DataWrap width="100%" wrap>
                <StrongInfo greater color="#081d56">Preço Total: </StrongInfo>
                <Info greater color="#081d56">{formatPrice(Number(total))}</Info>
              </DataWrap>
            </DataContainer>
          </Data>
        </DetailsContainer>
        <DetailsContainer>
          <Title>Produtos</Title>
          {
            products.map((item) => (
              <ProductCard key={String(Math.random())} product={item} />
            ))
          }
        </DetailsContainer>
        <Space />
      </Container>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Paragraph style={{
          fontSize: 18,
          padding: 15,
        }}
        >
          Deseja realmente deletar o produto?

        </Paragraph>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)} theme={{ colors: { primary: 'red' } }}>Cancelar</Button>
          <Button onPress={onDelete} theme={{ colors: { primary: '#4CAF50' } }}>Confirmar</Button>
        </Dialog.Actions>
      </Dialog>
      <FabButton onPress={() => setVisible(true)} icon="delete-forever" backgroundColor="#e50000" />
      <LoadingModal isVisible={loading} />
    </>
  );
}
