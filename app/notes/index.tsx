import AddNoteModal from '@/components/add-note-modal';
import NoteList from '@/components/note-list';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Note One' },
    { id: '2', text: 'Note Two' },
    { id: '3', text: 'Note Three' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() == '') return;

    setNotes((prevNotes) => [...prevNotes, { id: Date.now.toString(), text: newNote }]);

    setNewNote('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NotesScreen;
