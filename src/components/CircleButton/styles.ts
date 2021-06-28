import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { cyan100 } = theme.colors;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: cyan100,
  },
});

export default styles;
