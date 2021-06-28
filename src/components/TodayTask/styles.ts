import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { baby_blue80, cyan90 } = theme.colors;
const { poppins600, heebo400 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 220,
    height: 160,
    marginLeft: 17,
    marginTop: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    backgroundColor: '#FFFFFF',
    width: 215,
    height: 155,
    borderRadius: 23,
  },

  titleView: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(16, 96, 255, 0.25)',
  },

  title: {
    width: '100%',
    height: '100%',
    color: cyan90,
    fontFamily: poppins600,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  taskData: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  dataView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dataIcon: {
    marginRight: 5,
  },

  dataText: {
    fontFamily: heebo400,
    fontSize: 15,
    color: baby_blue80,
    width: 180,
  },

  checkButtonView: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
});

export default styles;
