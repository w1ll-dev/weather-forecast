import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_SEARCH_API_KEY } from '@env';
import { colors } from '../styles/colors';
import { idiom, pt } from '../constants/translate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { CloseIcon } from '../styles/components/icons';

const GooglePlacesInput = () => {
  const { light, lightBlue, white30 } = colors;
  const navigation = useNavigation();

  function handleClear() {
    navigation.navigate('CitiesSave');
  }

  return (
    <GooglePlacesAutocomplete
      placeholder={pt.searchCityInputPlaceHolder}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_SEARCH_API_KEY,
        language: idiom,
        types: '(cities)',
      }}
      renderLeftButton={() => (
        <TouchableOpacity onPress={handleClear}>
          <CloseIcon />
        </TouchableOpacity>
      )}
      enablePoweredByContainer={false}
      fetchDetails={true}
      textInputProps={{
        placeholderTextColor: white30,
        selectionColor: white30,
      }}
      styles={{
        textInput: {
          fontSize: 16,
          height: 56,
          paddingLeft: 0,
          borderRadius: 0,
          backgroundColor: lightBlue,
          color: light,
        },
        container: {
          maxHeight: 56,
        },
        textInputContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: lightBlue,
        },
      }}
      debounce={500}
    />
  );
};

export default GooglePlacesInput;
