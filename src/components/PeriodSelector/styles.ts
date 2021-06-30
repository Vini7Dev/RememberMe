import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { baby_blue90 } = theme.colors;
const { poppins600 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  buttonView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  btnLeft: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightColor: '#00A6CB',
    borderRightWidth: 1,
  },

  btnRight: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderLeftColor: '#00A6CB',
    borderLeftWidth: 1,
  },

  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bntText: {
    color: baby_blue90,
    fontFamily: poppins600,
    fontSize: 18,
    lineHeight: 26,
  },

  bntSelectedText: {
    color: '#FFFFFF',
    fontFamily: poppins600,
    fontSize: 18,
    lineHeight: 26,
  },
});

export default styles;
