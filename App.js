import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

import Cards from '../javaFlash/src/components/flashcard'

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
