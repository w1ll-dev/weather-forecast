import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Title,
  Wrapper,
  SearchIcon,
  BackIcon,
} from '../styles/components/AppBar';

interface AppBarProps {
  title: string;
  rightAction?: any;
  leftAction?: any;
}

export default function AppBar({
  title,
  rightAction,
  leftAction,
}: AppBarProps) {
  return (
    <Wrapper>
      {leftAction && (
        <TouchableOpacity onPress={leftAction}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <Title hasLeftAction={leftAction}>{title}</Title>
      {rightAction && (
        <TouchableOpacity onPress={rightAction}>
          <SearchIcon />
        </TouchableOpacity>
      )}
    </Wrapper>
  );
}
