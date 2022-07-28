import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HeaderView = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerintro}>
        <Text style={styles.appname}>Poetry Lover</Text>
        <Text style={styles.socialname}>f:@poetry_lover</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
  headerintro: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 80,
  },
  appname: {
    fontSize: 40,
    fontWeight: "bold",
  },
  socialname: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default HeaderView;
