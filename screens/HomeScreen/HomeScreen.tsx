import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CharacterList from '../../components/CharacterList/CharacterList';
import AppLayout from '../../components/common/AppLayout/AppLayout';
import styles from './HomeScreen.style';

type Props = {};

const HomeScreen: React.FC<Props> = ({}) => {
  const insets = useSafeAreaInsets();

  return (
    <AppLayout>
      <View style={{paddingTop: insets.top}}>
        <Text style={styles.title}>Breaking Bad Characters</Text>
      </View>
      <CharacterList />
    </AppLayout>
  );
};

export default HomeScreen;
