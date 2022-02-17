import { View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LeftButton, RightButton } from './SearchButtons';

export default function SearchBar() {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
      }}
    >
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderRightButton={() => <RightButton />}
        renderLeftButton={() => <LeftButton />}
        query={{}}
        placeholder='Search'
      />
    </View>
  );
}
