import {StyleSheet} from 'react-native';
import Digi from '../../Digi';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Digi.colors.background,
  },

  loginFieldContainer: {
    paddingHorizontal: 20,
    backgroundColor: Digi.colors.grey,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    flexGrow: 1,
  },
  logoLogin: {
    width: 262,
    height: 145,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: 55,
  },
  forgotPasswordContainer: {
    width: '100%',
    height: 30,
    marginVertical: 12,
    alignItems: 'flex-end',
  },
  forgotButton: {
    height: 30,
    justifyContent: 'center',
  },
  forgotPasswordText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0469DE',
  },
  signUpTextContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  acknowledge: {
    paddingLeft: 8,
    color: '#413D3D',
    fontWeight: '500',
  },

  loginbutton: {
    width: '100%',
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0469DE',
    marginTop: 24,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  headerText: {
    fontSize: 24,
    color: '#413D3D',
    fontWeight: '700',
    marginTop: 24,
  },
});
