import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/Login';
import Menu from './pages/Menu';
import GerenciamentoHome from './pages/Gerenciamentos/Home';
import GerenciamentoCadastrar from './pages/Gerenciamentos/Cadastrar';
import NewPedidoHome from './pages/NewPedido/Home';
import NewPedidoConfirmacao from './pages/NewPedido/Confirmacao';
import NewPedidoDadosEntrega from './pages/NewPedido/DadosEntrega';
import AllPedidosHome from './pages/AllPedidos/Home';
import AllPedidosDetalhes from './pages/AllPedidos/Detalhes';
import ClientesHome from './pages/Clientes/Home';
import ClientesDados from './pages/Clientes/DadosCliente';
import Confirmacao from './pages/Confirmacao';

import { State } from './interfaces';
import { getToken, logout } from './services/auth';

const Stack = createStackNavigator();

const loggedRoutes = () => (
  <>
    <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
    <Stack.Screen name="GerenciamentoHome" component={GerenciamentoHome} options={{ title: 'Produtos' }} />
    <Stack.Screen name="GerenciamentoCadastrar" component={GerenciamentoCadastrar} options={{ title: 'Produto' }} />
    <Stack.Screen name="NewPedidoHome" component={NewPedidoHome} options={{ title: 'Realizar Pedido' }} />
    <Stack.Screen name="NewPedidoConfirmacao" component={NewPedidoConfirmacao} options={{ title: 'Confirmação' }} />
    <Stack.Screen name="DadosEntrega" component={NewPedidoDadosEntrega} options={{ title: 'Dados da Entrega' }} />
    <Stack.Screen name="AllPedidosHome" component={AllPedidosHome} options={{ title: 'Vendas' }} />
    <Stack.Screen name="AllPedidosDetalhes" component={AllPedidosDetalhes} options={{ title: 'Detalhes' }} />
    <Stack.Screen name="ClientesHome" component={ClientesHome} options={{ title: 'Clientes' }} />
    <Stack.Screen name="ClientesDados" component={ClientesDados} options={{ title: 'Dados do Cliente' }} />
    <Stack.Screen name="Confirmacao" component={Confirmacao} options={{ headerShown: false }} />
  </>
);

interface RoutesProps {
  isLoading: boolean;
  token: string | null;
  setLogged: (token: string | null) => void;
}

function Routes({ isLoading, token, setLogged }: RoutesProps) {
  useEffect(() => {
    (async () => {
      const newToken = await getToken();
      if (newToken) setLogged(newToken);
      else setLogged(null);
    })();
  }, []);

  if (isLoading) return <AppLoading />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#03071E',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      >
        {
          !token
            ? (
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            ) : (
              loggedRoutes()
            )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({ isLoading, token }: State) => ({
  isLoading, token,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLogged: (token: string | null) => {
    dispatch({
      type: 'SET_USER_CRED',
      payload: { token },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
