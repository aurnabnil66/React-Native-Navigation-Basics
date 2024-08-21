import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  defaultText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: 'black',
  },
  goToText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: 'blue',
  },
});

export default styles;
