import {StyleSheet, ViewStyle} from 'react-native';

type Style = {
  root: ViewStyle;
};

export default StyleSheet.create<Style>({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
