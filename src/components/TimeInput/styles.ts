import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { heebo400 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    width: 80,
    position: 'relative',
    marginTop: 10,
  },

  inputBorder: {
    height: 54,
    borderRadius: 26,
    padding: 2,
  },

  input: {
    height: '100%',
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    fontFamily: heebo400,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default styles;
