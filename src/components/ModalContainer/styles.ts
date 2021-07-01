import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { cyan90 } = theme.colors;
const { poppins600 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  barTop: {
    marginTop: 25,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  barTopLine: {
    width: 50,
    borderWidth: 2,
    borderColor: cyan90,
  },

  titleView: {
    marginTop: 5,
    alignItems: 'center',
  },

  title: {
    color: cyan90,
    fontFamily: poppins600,
    fontSize: 30,
    lineHeight: 33,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: -18,
    width: '80%',
  },

  contentArea: {
    marginTop: 20,
  },
});

export default styles;
