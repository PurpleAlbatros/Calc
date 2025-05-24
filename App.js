import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

class App extends React.Component {
  state = { mængde: 0, tilbud: 0, resultat: 0 };
  onAmountChange = (text) => {
    this.setState({ mængde: text });
  };

  onDiscountChange = (text) => {
    this.setState({ tilbud: text });
  };

  onButtonPress = () =>
    this.setState({
      resultat: this.state.mængde * (this.state.tilbud / 100),
    });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 22 }}> Tilbud udregner</Text>
        </View>
        <View
          style={{
            marginHorizontal: 45,
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginBottom: 10 }}>Total</Text>
          <TextInput style={styles.input} onChangeText={this.onAmountChange} />
        </View>
        <View style={{ marginHorizontal: 45 }}>
          <Text style={{ marginBottom: 10 }}>Tilbud (%)</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onDiscountChange}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={this.onButtonPress}>
            <Text style={{ color: "white" }}>Udregn</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.resultat,
            { color: this.state.resultat ? "green" : "black" },
          ]}
        >
          mængden efter tilbuddet er:
        </Text>
        <Text
          style={[
            styles.result,
            { color: this.state.resultat ? "green" : "black" },
          ]}
        >
          {this.state.resultat ? this.state.mængde - this.state.resultat : null}
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
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
  button: {
    backgroundColor: "red",
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
    color: "green",
  },
});
export default App;
