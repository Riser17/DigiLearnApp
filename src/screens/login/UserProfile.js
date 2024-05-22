import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
import {useDispatch} from 'react-redux';
import {logout, logoutUser} from '../../api/slice/authSlice/authApiSlice';

import Digi from '../../Digi';

const UserProfile = props => {
  const dispatch = useDispatch();

  const Settings = [
    {
      id: 1,
      name: 'Reset Password',
    },
    {
      id: 2,

      name: 'Profile Settings',
    },
    {
      id: 3,
      name: 'Billing & Invoices',
    },
  ];

  const handleLogout = () => {
    dispatch(logoutUser());
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={[styles.userProfileCard, styles.shadowProp]}>
        <View>
          <View style={styles.userInfoContainer}>
            <View>
              <Image
                style={styles.userProfilePicture}
                source={Digi.image.avatar}
              />
            </View>
          </View>
        </View>
        <View>
          {Settings?.map((sett, index) => (
            <View
              key={sett.id}
              style={[
                styles.optionContainer,
                {borderBottomWidth: index === 2 ? 0 : 1},
              ]}>
              <Text style={styles.maskedText}>{sett.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Text>Logout</Text>
        <Icon size={22} name="md-log-out" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Digi.colors.background,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#090909',
    marginLeft: 16,
  },
  userProfileCard: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 24,
    backgroundColor: '#FFFFFF',
    height: 316,
    width: 288,
    padding: 10,
  },
  userInfoContainer: {
    alignItems: 'center',
  },

  emeduseridborder: {
    textDecorationLine: 'underline',
  },
  shadowProp: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#5A5A5A',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 15,
    shadowOpacity: 1,

    elevation: 10,
    margin: 10,
  },

  userProfilePicture: {
    width: 84,
    height: 84,
    backgroundColor: 'lightgrey',
    borderRadius: 42,
    shadowColor: '#c0c0c0',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },

  maskedText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },

  optionContainer: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#F5F5F7',
  },
});
