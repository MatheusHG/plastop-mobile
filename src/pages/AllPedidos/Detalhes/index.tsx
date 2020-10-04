import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
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

export default function OrderDetails() {
  const route = useRoute<RouteProp<ParamList, 'AllPedidosDetalhes'>>();
  const navigation = useNavigation();
  const { codigoPedido } = route.params;

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
      <FabButton icon="delete-forever" backgroundColor="#e50000" />
      <LoadingModal isVisible={loading} />
    </>
  );
}
