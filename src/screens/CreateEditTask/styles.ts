import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { baby_blue90, cyan90 } = theme.colors;
const { poppins600, heebo500 } = theme.fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },

  titleView: {
    alignItems: 'center',
  },

  title: {
    color: cyan90,
    fontFamily: poppins600,
    fontSize: 30,
    marginBottom: -18,
  },

  form: {
    marginTop: 15,
    paddingHorizontal: 20,
  },

  inputMargin: {
    marginVertical: 6,
  },

  periodSelectorView: {
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },

  timeLabel: {
    marginTop: 10,
    marginBottom: -10,
    marginLeft: 8,
    color: baby_blue90,
    fontSize: 20,
    fontFamily: heebo500,
  },

  timeInputsContainer: {
    flexDirection: 'row',
  },

  timeDivisionText: {
    fontFamily: heebo500,
    fontSize: 40,
    lineHeight: 70,
    color: baby_blue90,
    marginHorizontal: 3,
  },

  submitButtonView: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default styles;
