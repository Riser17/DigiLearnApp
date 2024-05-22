import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ionicons';

const DigiInputField = props => {
  const [secure, setSecure] = React.useState(props.secureTextEntry);

  const toggleSecure = () => {
    setSecure(!secure);
  };
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        ref={props.inputRef}
        style={[styles.inputField, props.inputFieldStyle]}
        placeholder={props.placeholderText}
        placeholderTextColor={'#B5B5C3'}
        keyboardType={props.keyboardType}
        secureTextEntry={secure}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        returnKeyType={props.returnKeyType}
        value={props.value}
        readOnly={props.readOnly ? props.readOnly : false}
        multiline={props.multiline ? props.multiline : false}
      />

      {props.secureTextEntry && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            padding: 14,
          }}
          onPress={toggleSecure}>
          {secure ? (
            <Icon
              name="eye-off"
              size={22}
              color="#B5B5C3"
              style={{alignSelf: 'center'}}
            />
          ) : (
            <Icon
              name="eye"
              size={22}
              color="#B5B5C3"
              style={{alignSelf: 'center'}}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 24,
  },
  inputField: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#2B2B2B',
    fontWeight: '400',
    fontSize: 14,
  },
});

export default DigiInputField;
