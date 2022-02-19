import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Icon({ icon, text }: { icon: string; text: string }) {
  return (
    <TouchableOpacity>
      <FontAwesome5
        name={icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: 'center' }}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
