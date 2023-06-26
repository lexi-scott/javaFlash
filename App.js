import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/components/bottomNav';


export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      // {/* <StatusBar style="auto" /> */}
    // </View>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
