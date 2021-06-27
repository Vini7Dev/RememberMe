import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

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
    color: theme.colors.baby_blue70,
    fontSize: 20,
    fontWeight: '500',
  },

  greetings: {
    color: theme.colors.cyan90,
    fontSize: 35,
    fontWeight: '500',
  },

  question: {
    color: theme.colors.text,
    fontSize: 18,
  },
});

export default styles;
