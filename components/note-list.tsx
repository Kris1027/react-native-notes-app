import { FlatList } from 'react-native';
import NoteItem, { type NoteProps } from './note-item';

type NoteListProps = {
  notes: NoteProps[];
};

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NoteItem item={item} />}
    />
  );
};

export default NoteList;
