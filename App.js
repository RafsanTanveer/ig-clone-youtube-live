import { View, Text, StyleSheet } from "react-native";
import Header from "./components/home/Header";
import HomeScreen from "./screens/HomeScreen";
import {SafeAreaView} from 'react-native-safe-area-context'


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
