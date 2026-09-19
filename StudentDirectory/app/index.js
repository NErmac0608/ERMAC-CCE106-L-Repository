import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';

import StudentCard from '../components/StudentCard';
import students from '../data/students';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Student Directory
      </Text>

      <Text style={styles.subtitle}>
        Search for a student
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student name..."
        value={search}
        onChangeText={setSearch}
      />

      {filteredStudents.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No students found.
          </Text>

          <Text style={styles.emptySubtext}>
            Try searching for another name.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <StudentCard
              student={item}
              onPress={() =>
                router.push(`/students/${item.id}`)
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginBottom: 15,
  },

  searchInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },

  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  emptySubtext: {
    marginTop: 8,
    color: '#666',
  },
});