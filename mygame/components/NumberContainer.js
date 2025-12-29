import { View, Text, StyleSheet } from "react-native";
import React from "react";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText} numberOfLines={1}>
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#ddb52f",
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,

    // 🔑 KEY FIX
    minWidth: 100,
  },
  numberText: {
    color: "#ddb52f",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
});
