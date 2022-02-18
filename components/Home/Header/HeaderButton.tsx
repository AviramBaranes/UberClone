import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { SetStateAction } from 'react';

interface HeaderButtonProps {
  active: string;
  setActive: React.Dispatch<SetStateAction<string>>;
  text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  active,
  setActive,
  text,
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: active === text ? 'black' : 'white',
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 30,
    },
    text: {
      fontSize: 15,
      fontWeight: '900',
      color: active === text ? 'white' : 'black',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={() => setActive(text)}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
