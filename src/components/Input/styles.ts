import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'relative',
    marginTop: 10,
  },

  label: {
    position: 'absolute',
    top: -10,
    left: 25,
    color: theme.colors.baby_blue90,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 22,
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    zIndex: 1,
  },

  inputBorder: {
    width: '100%',
    height: 54,
    borderRadius: 26,
    padding: 2,
  },

  input: {
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
});

export default styles;
