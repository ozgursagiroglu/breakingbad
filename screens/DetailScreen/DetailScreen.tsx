import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useGetCharactersQuery} from '../../store/services/characterService';
import styles from './DetailScreen.style';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParams} from '../../interfaces';

type Props = {route: any};

const DetailScreen: React.FC<Props> = ({route}) => {
  const characterId = route.params.id;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const {character} = useGetCharactersQuery(undefined, {
    skip: !characterId,
    selectFromResult: ({data}) => ({
      character: data?.find(item => item.char_id === characterId),
    }),
  });

  const backButtonTop = Platform.OS === 'ios' ? insets.top : 24;

  return (
    <ImageBackground
      source={{uri: character?.img}}
      resizeMode="cover"
      style={styles.root}>
      <TouchableOpacity
        onPress={navigation.goBack}
        activeOpacity={0.9}
        style={[
          styles.backButton,
          {
            top: backButtonTop,
          },
        ]}>
        <Image
          source={require('../../assets/icons8-back-48.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={[
          styles.content,
          Platform.OS === 'ios'
            ? {
                paddingBottom: insets.bottom,
              }
            : {},
        ]}>
        <Text style={styles.name}>{character?.name} </Text>

        <Text style={styles.nickname}>
          {character?.nickname}{' '}
          <Text style={styles.status}>{character?.status}</Text>
        </Text>
        <Text style={styles.occupation}>
          {character?.occupation.join(', ')}
        </Text>

        <Text style={styles.seasons}>
          Seasons: {character?.appearance.join(', ')}
        </Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default DetailScreen;
