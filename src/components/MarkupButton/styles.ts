import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { heebo500 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    borderRadius: 50,
    marginVertical: 5,
    marginHorizontal: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 2,
  },

  insideGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },

  content: {
    borderRadius: 20,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 25,
    fontFamily: heebo500,
    lineHeight: 35,
  },
});

export default styles;
