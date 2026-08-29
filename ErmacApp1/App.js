import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header} >My Custom Dashboard</Text>

      <StatCard 
        title= "Total Users 🙍"
        value="1,240"
        bgColor="#DDD9B7"
      />

      <StatCard
        title= "Revenue 💸"
        value="$12,450"
        bgColor="#BA9466"
        
      />

      <StatCard
        title= "Pending Issues ⚠️"
        value="3"
        bgColor="#E8E1D7"
      />

    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: '#FAEBD8',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 300,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3A2203',
    textAlign: 'center',
  },
});

