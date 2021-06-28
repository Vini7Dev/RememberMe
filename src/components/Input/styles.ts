import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { baby_blue90 } = theme.colors;
const { heebo400, heebo500 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    marginTop: 10,
  },

  label: {
    position: 'absolute',
    top: -10,
    left: 25,
    color: baby_blue90,
    fontSize: 20,
    fontFamily: heebo500,
    lineHeight: 22,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
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
    fontSize: 18,
  },
});

export default styles;
