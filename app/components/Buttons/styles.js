import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    fontSize: 14,
    paddingVertical: 20,
    color: '$white',
  },
});
