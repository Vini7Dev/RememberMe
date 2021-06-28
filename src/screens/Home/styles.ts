import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { cyan90 } = theme.colors;
const { poppins600, heebo500 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },

  titleView: {
    alignItems: 'center',
  },

  title: {
    color: cyan90,
    fontFamily: poppins600,
    fontSize: 30,
    marginBottom: -18,
  },

  subtitle: {
    color: cyan90,
    fontFamily: heebo500,
    fontSize: 22,
  },
});

export default styles;
