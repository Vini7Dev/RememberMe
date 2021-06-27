import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: theme.fonts.poppins600,
  },
});

export default styles;
