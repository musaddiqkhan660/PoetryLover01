import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Poetry from "../data/Poetry";
const PoetryListScreen = (props) => {
  const poetIDModel = props.navigation.getParam("poetID");
  const poetIDPoetry = Poetry.find((p) => p.poetId === poetIDModel);

  return (
    <View style={{ overflow: "hidden" }}>
      <ScrollView>
        <View style={styles.screen}>
          {Poetry.map(
            (item, index) =>
              poetIDPoetry.poetId === item.poetId && (
                <View key={index} style={styles.cart_of_poetry}>
                  <View style={styles.poetry_text}>
                    <Text style={styles.singlePoetry}>
                      {item.poetry_text.map((item) => (
                        <Text key={Math.random()}>{item + "\n"}</Text>
                      ))}
                    </Text>
                  </View>
                  <View style={styles.social}>
                    <Text>Whats</Text>
                    <Text>Share</Text>
                    <Text>Copy</Text>
                  </View>
                </View>
              )
          )}
        </View>
      </ScrollView>
    </View>
  );
};
PoetryListScreen.navigationOptions = (navData) => {
  const poetName = navData.navigation.getParam("poetTitle");

  return { headerTitle: poetName };
};
const styles = StyleSheet.create({
  screen: { marginBottom: 20 },
  poetry_text: { padding: 10 },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  singlePoetry: {
    fontSize: 20,
    textAlign: "center",
  },
  cart_of_poetry: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    paddingBottom: 10,
  },
});
export default PoetryListScreen;
