import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

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
    color: theme.colors.baby_blue90,
    fontSize: 20,
    fontFamily: theme.fonts.heebo500,
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
    fontFamily: theme.fonts.heebo400,
    fontSize: 18,
  },
});

export default styles;
