import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import shareIcon from '../../../../../assets/shareIcon.png';

const ShareButton = ({ onPress }: { onPress?: () => void }) => (
  <Share onPress={onPress}>
    <ShareIcon source={shareIcon} resizeMode="contain" />
  </Share>
);

const { width } = Dimensions.get('window');

export const Share = styled(RectButton)`
  width: ${width * 0.07}px;
  height: ${width * 0.07}px;
  margin-right: ${width * 0.05}px;
`;

export const ShareIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ShareButton;
