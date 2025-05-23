import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

class App extends react.Component() {
  state = { mængde: 0, tilbud: 0, resultat: 0 };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    paddingVertical: 20,
    borderRadius: 10,
    fontSize: 20,
  },
  btn: {
    backgroundColor: "blue",
    alignItems: "center",
    height: 80,
    borderRadius: 10,
    marginTop: 60,
    width: 80,
    justifyContent: "center",
  },
  result: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 22,
  },
});
export default App;
