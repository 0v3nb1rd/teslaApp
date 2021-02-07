import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';

const Button = (props) => {
  const { type, content, onPress } = props;

  const bgColor = type === 'primary' ? '#171A20CC' : 'FFFFFFA6';
  const txtColor = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, { backgroundColor: bgColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.txt, { color: txtColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
