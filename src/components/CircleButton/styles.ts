import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { cyan100 } = theme.colors;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: cyan100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    borderRadius: 20,
  },

  containerTransparent: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: cyan100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentTransparent: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default styles;
