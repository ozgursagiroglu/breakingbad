import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';

type Style = {
  root: ViewStyle;
  title: TextStyle;
  row: ViewStyle;
  item: ViewStyle;
  layer: ViewStyle;
  name: TextStyle;
};

const SCREEN_PADDING = 16;
const GRID_GAP = 16;
// (screenWidth - ((screenPadding * 2) + (grid gap))) / 2
const ITEM_WIDTH =
  (Dimensions.get('screen').width - (SCREEN_PADDING * 2 + GRID_GAP)) / 2;

export default StyleSheet.create<Style>({
  root: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 24,
  },

  row: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },

  item: {
    position: 'relative',
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.5,
    marginBottom: 16,
  },

  layer: {
    paddingHorizontal: 16,
    paddingVertical: 8,

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  name: {
    fontSize: 16,
    color: 'white',
  },
});
