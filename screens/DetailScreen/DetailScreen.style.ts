import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

type Style = {
  root: ViewStyle;
  content: ViewStyle;
  backButton: ViewStyle;
  backIcon: ImageStyle;
  name: TextStyle;
  nickname: TextStyle;
  status: TextStyle;
  occupation: TextStyle;
  seasons: TextStyle;
};

export default StyleSheet.create<Style>({
  root: {
    position: 'relative',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'flex-end',
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    left: 24,
    width: 36,
    height: 36,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 36,

    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  name: {
    fontSize: 16,
    lineHeight: 36,
    fontWeight: '500',
    color: '#ffffff',
  },
  nickname: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 24,
  },
  status: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  occupation: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    marginBottom: 4,
  },
  seasons: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
  },
});
