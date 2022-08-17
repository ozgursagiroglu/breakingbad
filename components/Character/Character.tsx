import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ICharacter, StackParams} from '../../interfaces';
import styles from './Character.style';

type Props = {
  item: ICharacter;
  index: number;
};

const Character: React.FC<Props> = ({item, index}) => {
  const navigation = useNavigation<NavigationProp<StackParams>>();

  const handleDetail = useCallback(
    () => navigation.navigate('Detail', {id: item.char_id}),
    [item, navigation],
  );

  return (
    <TouchableOpacity
      testID={`character-item-${index}`}
      activeOpacity={0.9}
      onPress={handleDetail}>
      <ImageBackground source={{uri: item.img}} style={styles.item}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={[styles.layer]}>
          <Text style={styles.name}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Character;
