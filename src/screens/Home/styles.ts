import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

const { cyan90 } = theme.colors;
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

  subtitle: {
    color: cyan90,
    fontFamily: heebo500,
    fontSize: 22,
  },

  tasksListArea: {
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    marginHorizontal: 10,
    borderRadius: 15,
    padding: 15,
    elevation: 5,
  },

  tasksListTitleView: {
    position: 'relative',
  },

  tasksListTitle: {
    color: cyan90,
    fontFamily: poppins600,
    fontSize: 30,
    textAlign: 'center',
  },

  filterButtonView: {
    position: 'absolute',
    top: 2,
    right: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  filterButtonContainer: {
    width: 36,
    height: 36,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
  },
});

export default styles;
