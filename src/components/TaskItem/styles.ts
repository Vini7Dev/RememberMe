import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { baby_blue80, cyan90 } = theme.colors;
const { poppins600, heebo400 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '103%',
    marginTop: 15,
    padding: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 23,
  },

  titleView: {
    width: '100%',
    marginTop: 5,
    marginBottom: -5,
    paddingHorizontal: 10,
  },

  title: {
    width: '100%',
    color: cyan90,
    fontFamily: poppins600,
    fontSize: 18,
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
    flex: 1,
    fontFamily: heebo400,
    fontSize: 15,
    color: baby_blue80,
  },

  checkButtonView: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
});

export default styles;
