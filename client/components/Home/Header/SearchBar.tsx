import { View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LeftButton, RightButton } from './SearchButtons';

export default function SearchBar({
  setCity,
}: {
  setCity: Dispatch<SetStateAction<string>>;
}) {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
      }}
    >
      <GooglePlacesAutocomplete
        onPress={(data, detail = null) => {
          setCity(data.description.split(',')[0]);
        }}
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
        query={{ key: 'AIzaSyBH2Eq5Biok7U9fQEnM2JVa6iNf5QNd_to' }}
        placeholder='Search'
      />
    </View>
  );
}
