import React from 'react';
import {View} from 'react-native';
import styles from './AppLayout.style';

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({children}) => {
  return <View style={styles.root}>{children}</View>;
};

export default AppLayout;
