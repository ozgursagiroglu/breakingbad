import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppLayout from '../../components/common/AppLayout/AppLayout';
import {ICharacter, StackParams} from '../../interfaces';
import {useGetCharactersQuery} from '../../store/services/characterService';
import styles from './HomeScreen.style';

type Props = {};

const keyExtractor = (item: ICharacter) => String(item.char_id);

const HomeScreen: React.FC<Props> = ({}) => {
  const {data = []} = useGetCharactersQuery();
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const insets = useSafeAreaInsets();
  const handleDetail = useCallback(
    (item: ICharacter) => navigation.navigate('Detail', {id: item.char_id}),
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: {item: ICharacter; index: number}) => (
      <TouchableOpacity activeOpacity={0.9} onPress={() => handleDetail(item)}>
        <ImageBackground source={{uri: item.img}} style={styles.item}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={[styles.layer]}>
            <Text style={styles.name}>{item.name}</Text>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    ),
    [handleDetail],
  );

  return (
    <AppLayout>
      <View style={{paddingTop: insets.top}}>
        <Text style={styles.title}>Breaking Bad Characters</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </AppLayout>
  );
};

export default HomeScreen;
