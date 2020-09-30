import React from 'react';
import styled from 'styled-components/native';
import { Portal, Modal, Provider } from 'react-native-paper';

interface LoadingModalProps {
  isVisible: boolean;
}

function LoadingModal({ isVisible }: LoadingModalProps) {
  return (
    <Provider>
      <Portal>
        <Modal visible={isVisible} dismissable={false}>
          <Container>
            <Spinner />
            <Text>Carregando...</Text>
          </Container>
        </Modal>
      </Portal>
    </Provider>
  );
}

const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0d60ba',
})`
  margin: 30px 0;
`;

const Text = styled.Text`
  color: #0d60ba;
  font-size: 20px;
`;

export default LoadingModal;
