import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function StudentCard({ student, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>

        <Image
          source={student.image}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={styles.name}>
            {student.name}
          </Text>

          <Text style={styles.course}>
            {student.course}
          </Text>
        </View>

      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  course: {
    marginTop: 5,
    color: '#666',
  },
});