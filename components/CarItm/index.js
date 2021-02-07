import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../Button';
import styles from './styles';

const CarItm = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          type={'primary'}
          content={'Custom Order'}
          onPress={() => {
            console.warn('Custom order was pressed');
          }}
        />
        <Button
          type={'secondary'}
          content={'Existing Inventory'}
          onPress={() => {
            console.warn('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItm;
