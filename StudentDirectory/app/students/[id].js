import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {
  useLocalSearchParams,
  Stack,
} from 'expo-router';

import students from '../../data/students';

export default function StudentDetail() {
  const { id } = useLocalSearchParams();

  const student = students.find(
    (student) => student.id === id
  );

  if (!student) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Student not found.
        </Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: student.name,
        }}
      />

      <View style={styles.container}>

        <Image
          source={student.image}
          style={styles.image}
        />

        <Text style={styles.name}>
          {student.name}
        </Text>

        <Text style={styles.label}>
          Course
        </Text>

        <Text style={styles.course}>
          {student.course}
        </Text>

        <Text style={styles.label}>
          Student ID
        </Text>

        <Text style={styles.id}>
          {student.id}
        </Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f5f5f5',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 30,
    marginBottom: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },

  course: {
    fontSize: 18,
    marginTop: 5,
  },

  id: {
    fontSize: 18,
    marginTop: 5,
  },

  errorText: {
    fontSize: 20,
    marginTop: 50,
  },
});