import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { baby_blue70, cyan90, text } = theme.colors;
const { poppins600, heebo400, heebo500 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 15,
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 91,
    height: 75,
  },

  appName: {
    color: baby_blue70,
    fontSize: 20,
    fontFamily: poppins600,
  },

  greetings: {
    color: cyan90,
    fontSize: 35,
    fontFamily: heebo500,
  },

  form: {
    width: '100%',
  },

  question: {
    color: text,
    fontSize: 18,
    fontFamily: heebo400,
  },
});

export default styles;
