import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StylishButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CBF50',borderRadius: 5,paddingVertical: 10,paddingHorizontal: 20,marginHorizontal: 10,
  },
  text: {
    color: 'white',fontWeight: 'bold',textAlign: 'center',
  },
});

export default StylishButton;
