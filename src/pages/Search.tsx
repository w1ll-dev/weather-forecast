import React from 'react';
import { Text } from 'react-native';
import GooglePlacesInput from '../components/GooglePlacesInput';
import { Container } from '../styles/components/common';

export function Search() {
  return (
    <Container>
      <GooglePlacesInput />
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search</Text>
      </Container>
    </Container>
  );
}
