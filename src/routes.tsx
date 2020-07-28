import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// App Pages

import Login from './pages/Login';

import Menu from './pages/Menu';

import GerenciamentoHome from './pages/Gerenciamentos/Home';
import GerenciamentoCadastrar from './pages/Gerenciamentos/Cadastrar';

import NewPedidoHome from './pages/NewPedido/Home';
import NewPedidoConfirmacao from './pages/NewPedido/Confirmacao';
import NewPedidoDadosEntrega from './pages/NewPedido/DadosEntrega';
import NewPedidoDadosCliente from './pages/NewPedido/DadosCliente';

import AllPedidosHome from './pages/AllPedidos/Home';
import AllPedidosDetalhes from './pages/AllPedidos/Detalhes';

import ClientesHome from './pages/Clientes/Home';
import ClientesDados from './pages/Clientes/DadosCliente';

import Confirmacao from './pages/Confirmacao';

const Stack = createStackNavigator();

export default function Navigation() {
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
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="GerenciamentoHome" component={GerenciamentoHome} options={{ title: 'Produtos' }} />
        <Stack.Screen name="GerenciamentoCadastrar" component={GerenciamentoCadastrar} options={{ title: 'Produto' }} />
        <Stack.Screen name="NewPedidoHome" component={NewPedidoHome} options={{ title: 'Realizar Pedido' }} />
        <Stack.Screen name="NewPedidoConfirmacao" component={NewPedidoConfirmacao} options={{ title: 'NewPedidoConfirmacao' }} />
        <Stack.Screen name="NewPedidoDadosEntrega" component={NewPedidoDadosEntrega} options={{ title: 'NewPedidoDadosEntrega' }} />
        <Stack.Screen name="NewPedidoDadosCliente" component={NewPedidoDadosCliente} options={{ title: 'NewPedidoDadosCliente' }} />
        <Stack.Screen name="AllPedidosHome" component={AllPedidosHome} options={{ title: 'AllPedidosHome' }} />
        <Stack.Screen name="AllPedidosDetalhes" component={AllPedidosDetalhes} options={{ title: 'AllPedidosDetalhes' }} />
        <Stack.Screen name="ClientesHome" component={ClientesHome} options={{ title: 'Clientes' }} />
        <Stack.Screen name="ClientesDados" component={ClientesDados} options={{ title: 'Dados do Cliente' }} />
        <Stack.Screen name="Confirmacao" component={Confirmacao} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
