import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_SEARCH_API_KEY } from '@env';
import { View } from 'react-native';
import { colors } from '../styles/colors';
import { idiom } from '../constants/translate';
import { CloseIcon } from '../styles/components/icons';

const GooglePlacesInput = () => {
  const { light, lightBlue, white30 } = colors;
  return (
    <View>
      <CloseIcon />
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_SEARCH_API_KEY,
          language: idiom,
          types: '(cities)',
        }}
        enablePoweredByContainer={false}
        fetchDetails={true}
        textInputProps={{
          placeholderTextColor: white30,
          selectionColor: white30,
        }}
        styles={{
          textInput: {
            backgroundColor: lightBlue,
            color: light,
            paddingLeft: 40,
          },
          textInputContainer: { width: 410, backgroundColor: light },
          listView: { height: 300, width: 400 },
        }}
        debounce={500}
      />
    </View>
  );
};

export default GooglePlacesInput;
