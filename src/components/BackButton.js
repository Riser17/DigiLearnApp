import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-ionicons';

const BackButton = props => {
  return (
    <Pressable style={styles.container} onPress={props.backButtonPressed}>
      <Icon name="md-arrow-back" size={22} color="#464E5F" />
      <Text style={{color: '#464E5F', fontSize: 14, fontWeight: '600'}}>
        {props.backText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
    gap: 6,
  },
});

export default BackButton;
