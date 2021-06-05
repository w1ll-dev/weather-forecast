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
  handleClear: any;
}

export function SearchInput({
  handleClear,
  placeholder,
  onChangeText,
  blurOnSubmit,
  value,
}: SearchInputProps) {
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
