import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const Imagem = styled.Image`
    width: 35px;
    height: 35px;
`;

export const ContainerImagem = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
`;

export const ContainerAmarelo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    padding: 15px;
`;

export const CardInfo = styled.View`
    background-color: #f3ca40;
    position: relative;
`;

export const Titulo = styled.Text`
    align-self: center;
    font-weight: bold;
    font-size: 18px;
    margin-top: 5%
`;
