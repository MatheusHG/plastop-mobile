import React from 'react';
import styled from 'styled-components/native';
import { FAB } from 'react-native-paper';

interface FabButtonProps {
  backgroundColor?: string,
  icon: string,
  onPress?: () => void,
}

function FabButton({ backgroundColor, icon, onPress }: FabButtonProps) {
  return (
    <Container icon={icon} backgroundColor={backgroundColor} onPress={onPress} />
  );
}

const Container = styled(FAB)`
  position: absolute;
  margin: 16px;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.backgroundColor || '#2196F3'}
`;

export default FabButton;
