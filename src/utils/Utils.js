import {Alert} from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const removeValueAsyncStorage = async key => {
//   await AsyncStorage.removeItem(key);
// };

// export const bmiHealthValue = async (height, weight) => {
//   if (weight && height) {
//     const bmiheight = height / 100;
//     const bmi = weight / (bmiheight * bmiheight);
//     console.log('Press');
//     return bmi.toFixed(2);
//   }
//   return null;
// };

export const showAlert = message => {
  Alert.alert(
    '',
    message,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};

// export const showDeleteAlert = (message, onOkPress,reportId) => {
//   Alert.alert(
//     '',
//     message,
//     [
//       {text: 'OK', onPress:  () => onOkPress(reportId)},
//       {text: 'CANCEL', onPress: () => console.log('OK Pressed')},
//     ],
//     {cancelable: false},
//   );
// };
