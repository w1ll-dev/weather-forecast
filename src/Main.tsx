import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './routes';
import { Container } from './styles/components/Common';
import { colors } from './styles';

export function Main() {
  return (
    <Container>
      <StatusBar backgroundColor={colors.lightBlue} />
      <Routes />
    </Container>
  );
}
