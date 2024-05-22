import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const AllModulesListContainer = ({
  item,
  index,
  selectedIndex,
  setSelectedIndex,
}) => {
  const handleItemPress = index => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.moduleContainer,
          {backgroundColor: index === selectedIndex ? '#E4F1FF' : '#FFFFFF'},
          {borderWidth: index === selectedIndex ? 0 : StyleSheet.hairlineWidth},
        ]}
        onPress={() => handleItemPress(index)}>
        <Text style={styles.moduleText}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default AllModulesListContainer;

const styles = StyleSheet.create({
  moduleContainer: {
    padding: 8,
    borderColor: '#DADADA',
    borderRadius: 6,
    marginLeft: 6,
  },
  moduleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#373737',
  },
});
