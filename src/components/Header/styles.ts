import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { white_transparent } = theme.colors;
const { heebo400, heebo700 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 102,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    paddingTop: 40,
    justifyContent: 'center',
    elevation: 11,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  nameView: {
    flexDirection: 'row',
    marginBottom: -5,
  },

  helloMessage: {
    color: '#FFFFFF',
    fontFamily: heebo400,
    fontSize: 22,
    lineHeight: 28,
  },

  name: {
    color: '#FFFFFF',
    fontFamily: heebo700,
    fontSize: 22,
    lineHeight: 28,
  },

  greeting: {
    color: white_transparent,
    fontFamily: heebo400,
    fontSize: 12,
    lineHeight: 15,
  },
});

export default styles;
