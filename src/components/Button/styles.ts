import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { poppins600 } = theme.fonts;

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
    fontFamily: poppins600,
  },
});

export default styles;
