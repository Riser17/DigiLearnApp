import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearAuthDetails,
  loginUser,
} from '../../api/slice/authSlice/authApiSlice';
import styles from './LoginStyle';
import DigiInputField from '../../components/DigiInputField';
import Digi from '../../Digi';
import Icon from 'react-native-ionicons';
import {showAlert} from '../../utils/Utils';

function Login(props) {
  const [isLoginButtonEnable, setIsLoginButtonEnable] = useState(false);
  const [isAcknowledge, setIsAcknowledge] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();
  const loginApiStatus = useSelector(state => state.auth.status);
  const loginApiError = useSelector(state => state.auth.error);

  useEffect(() => {
    if (loginApiStatus === 'succeeded') {
      showAlert('Login successful');
      props.navigation.navigate('SceenHeader');
    } else if (loginApiStatus === 'failed') {
      showAlert('Invalid login');
      dispatch(clearAuthDetails());
    }
  }, [loginApiStatus]);

  useEffect(() => {
    if (loginApiError) {
      showAlert(loginApiError);
      dispatch(clearAuthDetails());
    }
  }, [loginApiError]);

  const checkFieldAreEmpty = () => {
    // if (
    //   emailRef?.current?.value?.length &&
    //   passwordRef?.current?.value?.length &&
    //   isAcknowledge
    // ) {
    //   if (!isLoginButtonEnable) {
    //     setIsLoginButtonEnable(true);
    //   }
    // } else {
    //   if (isLoginButtonEnable) {
    //     setIsLoginButtonEnable(false);
    //   }
    // }
  };

  const buttonPressed = () => {
    validateForm();
  };

  const validateForm = () => {
    console.log('isLoginButtonEnabled', isLoginButtonEnable);
    if (isLoginButtonEnable) {
      let errorMessage = '';
      let isValidForm = true;
      let reg =
        /^[a-zA-Z0-9+_.-]+@[_a-zA-Z0-9-]+(?:\.[_a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/i;
      if (reg.test(emailRef?.current?.value) === false) {
        errorMessage = 'Email must be a valid email';
        isValidForm = false;
      } else if (passwordRef?.current?.value.length < 7) {
        errorMessage = 'Minimum 7 characters required';
        isValidForm = false;
      }

      if (isValidForm) {
        Keyboard.dismiss();
        const payload = {
          email: emailRef?.current?.value,
          password: passwordRef?.current?.value,
        };

        dispatch(loginUser(payload));
      } else {
        showAlert(errorMessage);
      }
    }
  };

  const acknowledgePress = () => {
    console.log('Acknowledge', isAcknowledge);
    const updatedValue = !isAcknowledge;
    console.log('isUpdated', updatedValue);
    setIsAcknowledge(updatedValue);

    setIsLoginButtonEnable(updatedValue);

    checkFieldAreEmpty();
  };

  const forgotButtonPressed = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Image
          source={Digi.image.logoHeader}
          style={{margin: 20}}
          resizeMode="contain"
        />
        <Image style={styles.logoLogin} source={Digi.image.orgLogo}></Image>

        <View style={styles.loginFieldContainer}>
          <Text style={styles.headerText}>Sign-in</Text>
          <DigiInputField
            inputRef={emailRef}
            placeholderText={'Email address or user name'}
            keyboardType={'email-address'}
            secureTextEntry={false}
            onChangeText={value => {
              emailRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <DigiInputField
            inputRef={passwordRef}
            placeholderText={'Password'}
            keyboardType={'default'}
            secureTextEntry={true}
            onChangeText={value => {
              passwordRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <View style={styles.forgotPasswordContainer}>
            <Pressable
              style={styles.forgotButton}
              onPress={forgotButtonPressed}>
              <Text style={styles.forgotPasswordText}>Forgotten Password?</Text>
            </Pressable>
          </View>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 80}}
            onPress={acknowledgePress}>
            <View
              style={{
                height: 27,
                width: 27,
                backgroundColor: '#ffffff',
                borderRadius: 6,
                borderWidth: 1,
                borderColor: '#B2D6FF',
                justifyContent: 'center',
              }}>
              {isAcknowledge === true ? (
                <Icon
                  size={22}
                  color="#0469DE"
                  name="md-checkmark"
                  style={{alignSelf: 'center'}}
                />
              ) : null}
            </View>
            <Text style={styles.acknowledge}>
              By signing up, you agree to our{' '}
              <Text style={{color: '#0469DE'}}>terms of service</Text> and{' '}
              <Text style={{color: '#0469DE'}}>privacy policy</Text>.
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.loginbutton,
              {
                opacity: isLoginButtonEnable == true ? 1.0 : 0.6,
              },
            ]}
            onPress={buttonPressed}>
            {loginApiStatus === 'loading' ? (
              <ActivityIndicator
                size="small"
                color="#090909"></ActivityIndicator>
            ) : (
              <Text style={styles.buttonText}>Sign-in</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
