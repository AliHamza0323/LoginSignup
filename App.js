import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    

  },
});
