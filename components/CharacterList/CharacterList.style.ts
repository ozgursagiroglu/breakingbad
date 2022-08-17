import {StyleSheet, ViewStyle} from 'react-native';

type Style = {
  row: ViewStyle;
};

export default StyleSheet.create<Style>({
  row: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});
