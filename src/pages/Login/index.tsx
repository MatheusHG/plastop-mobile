import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import LoadingModal from '../../components/LoadingModal';
import { login } from '../../services/auth';
import api from '../../services/api';
import { State } from '../../interfaces';
import styles from './styles';

interface RotaProps {
  setLogged: (token: string) => void;
}

function Rota({ setLogged }: RotaProps) {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Preencha todas as informações necessárias!');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/login', { user: username, password });
      const { token } = response.data;

      await login(token);
      setLoading(false);
      setLogged(token);
    } catch (error) {
      setLoading(false);
      Alert.alert(JSON.stringify(error.response.data.error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Bem vindo(a)</Text>
          <Text style={styles.titleSub}>
            Ao aplicativo de vendas da Empresa
            <Text style={{ color: '#FFBE0B' }}> Plastop</Text>
          </Text>
          <Text style={styles.titleLogin}>Faça seu login para começar as suas vendas</Text>
        </View>

        <View style={styles.inputLogin}>
          <View style={styles.action}>
            <Icon
              name="user"
              color="#000"
              size={20}
              style={{
                padding: 10, borderRightWidth: 1, borderRightColor: '#c1c1c1', marginRight: 15,
              }}
            />
            <TextInput
              placeholder="Usuário"
              placeholderTextColor="#c1c1c1"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.action}>
            <Icon
              name="lock"
              color="#000"
              size={20}
              style={{
                padding: 10, borderRightWidth: 1, borderRightColor: '#c1c1c1', marginRight: 15,
              }}
            />
            <TextInput
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor="#c1c1c1"
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <LoadingModal isVisible={loading} />
    </View>
  );
}

const mapStateToProps = ({ token }: State) => ({
  token,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLogged: (token: string) => {
    dispatch({
      type: 'SET_USER_CRED',
      payload: { token },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Rota);
