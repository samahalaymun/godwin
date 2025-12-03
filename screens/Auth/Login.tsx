import { View, Text, StyleSheet } from "react-native";

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
