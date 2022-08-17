import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ICharacter} from '../../interfaces';
import {useGetCharactersQuery} from '../../store/services/characterService';
import Character from '../Character/Character';
import styles from './CharacterList.style';

type Props = {};

const keyExtractor = (item: ICharacter) => String(item.char_id);

const CharacterList: React.FC<Props> = ({}) => {
  const {data = []} = useGetCharactersQuery();

  const renderItem = useCallback(
    ({item, index}: {item: ICharacter; index: number}) => (
      <Character item={item} index={index} />
    ),
    [],
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      columnWrapperStyle={styles.row}
      testID="items"
    />
  );
};

export default CharacterList;
