import React from 'react';
import { TextInputProps } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../styles';
import {
  SearchIcon,
  Wrapper,
  StyledSearchInput,
  IconButton,
} from '../styles/components/SearchInput';

interface SearchInputProps extends TextInputProps {
  placeholder: string;
  blurOnSubmit: boolean;
  value: string;
  onChangeText: any;
}

export function SearchInput({
  placeholder,
  onChangeText,
  blurOnSubmit,
  value,
}: SearchInputProps) {
  const navigation = useNavigation();

  function handleClear() {
    navigation.navigate('CitiesSave');
  }

  return (
    <Wrapper>
      <StyledSearchInput
        placeholder={placeholder}
        placeholderTextColor={colors.white30}
        selectionColor={colors.white30}
        blurOnSubmit={blurOnSubmit}
        value={value}
        onChangeText={onChangeText}
      />
      <IconButton onPress={handleClear}>
        <SearchIcon />
      </IconButton>
    </Wrapper>
  );
}
