import * as React from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../styles';
import {
  CloseIcon,
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

function SearchInput({
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
        <CloseIcon />
      </IconButton>
    </Wrapper>
  );
}

export default SearchInput;
