import * as react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function RecipesMain({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Main page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
