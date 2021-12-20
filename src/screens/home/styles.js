import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  imgWrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  containerContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    top: 150,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  navigation: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    shadowColor: '#000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
});
