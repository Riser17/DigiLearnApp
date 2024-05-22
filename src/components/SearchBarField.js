import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';
import Icon from 'react-native-ionicons';
import Digi from '../Digi';

const SearchBarField = props => {
  const handleTextChange = text => {
    if (props.onSearch) {
      props.onSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name="md-search"
          size={22}
          color="#999999"
          style={{alignSelf: 'center'}}
        />
        <TextInput
          style={styles.searchInput}
          placeholder={props.placeholdertext}
          placeholderTextColor={'#C1C1C1'}
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16,
  },
  searchContainer: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#DADADA',
    height: 40,
    flexDirection: 'row',
    paddingLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  searchInput: {
    marginLeft: 5,
    width: Digi.constant.screenWidth - 60,
    height: '100%',
    color: '#999999',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default SearchBarField;
