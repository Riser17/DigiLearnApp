import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LearningHub from '../screens/learninghub/LearningHub';
import Library from '../screens/library/Library';
import Icon from 'react-native-ionicons';

const Drawer = createDrawerNavigator();

const SceenHeader = () => {
  return (
    <Drawer.Navigator
      backBehavior="none"
      screenOptions={({navigation}) => ({
        headerTintColor: '#ffffff',
        headerStyle: {backgroundColor: '#1E1E2D'},
        headerTitleStyle: {color: '#FFFFFF'},

        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              gap: 20,
            }}>
            <Icon
              size={22}
              name="md-notifications-outline"
              color="#ffffff"
              //onPress={() => navigation.navigate('UserProfile')}
            />
            <Icon
              size={22}
              name="md-person"
              color="#ffffff"
              onPress={() => navigation.navigate('UserProfile')}
            />
          </View>
        ),
      })}>
      <Drawer.Screen name="Learning Hub" component={LearningHub} />
      <Drawer.Screen name="Library" component={Library} />
    </Drawer.Navigator>
  );
};

export default SceenHeader;
