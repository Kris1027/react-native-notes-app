import { StyleSheet, Text, View } from 'react-native';

const NotesScreen = () => {
  return (
    <View>
      <Text style={styles.container}>Notes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default NotesScreen;
