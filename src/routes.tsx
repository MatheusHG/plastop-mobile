import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


// App Pages

import Login from './pages/Login/index'

import Menu from './pages/Menu/index'

import GerenciamentoHome from './pages/Gerenciamentos/Home'
import GerenciamentoCadastrar from './pages/Gerenciamentos/Cadastrar'

import NewPedidoHome from './pages/NewPedido/Home'
import NewPedidoConfirmacao from './pages/NewPedido/Confirmacao'
import NewPedidoDadosEntrega from './pages/NewPedido/DadosEntrega'
import NewPedidoDadosCliente from './pages/NewPedido/DadosCliente'

import AllPedidosHome from './pages/AllPedidos/Home'
import AllPedidosDetalhes from './pages/AllPedidos/Detalhes'

import ClientesHome from './pages/Clientes/Home'
import ClientesDados from './pages/Clientes/DadosCliente'


const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" >
                <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
                <Stack.Screen name="GerenciamentoHome" component={GerenciamentoHome} options={{ title: 'GerenciamentoHome' }} />
                <Stack.Screen name="GerenciamentoCadastrar" component={GerenciamentoCadastrar} options={{ title: 'GerenciamentoCadastrar' }} />
                <Stack.Screen name="NewPedidoHome" component={NewPedidoHome} options={{ title: 'NewPedidoHome' }} />
                <Stack.Screen name="NewPedidoConfirmacao" component={NewPedidoConfirmacao} options={{ title: 'NewPedidoConfirmacao' }} />
                <Stack.Screen name="NewPedidoDadosEntrega" component={NewPedidoDadosEntrega} options={{ title: 'NewPedidoDadosEntrega' }} />
                <Stack.Screen name="NewPedidoDadosCliente" component={NewPedidoDadosCliente} options={{ title: 'NewPedidoDadosCliente' }} />
                <Stack.Screen name="AllPedidosHome" component={AllPedidosHome} options={{ title: 'AllPedidosHome' }} />
                <Stack.Screen name="AllPedidosDetalhes" component={AllPedidosDetalhes} options={{ title: 'AllPedidosDetalhes' }} />
                <Stack.Screen name="ClientesHome" component={ClientesHome} options={{ title: 'ClientesHome' }} />
                <Stack.Screen name="ClientesDados" component={ClientesDados} options={{ title: 'ClientesDados' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}