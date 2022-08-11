import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const ContentComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.goBack()}
      activeOpacity={1}
      style={styles.drawerTransparent}
    >
      <TouchableOpacity
        disabled={false}
        activeOpacity={1}
        style={styles.drawer}
      >
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.specificImage}>
              <Image
                source={require("../assets/profile.png")}
                style={styles.headerImage}
              />
            </View>
            <Text style={[styles.text, { color: "#fff" }]}>My Profile</Text>
          </View>
          <TouchableNativeFeedback
            onPress={() => props.navigation.navigate("About")}
            // underlayColor={"rgba(0,0,0,0.2"}
          >
            <View style={styles.row}>
              <AntDesign name="contacts" size={24} color="black" />
              <Text style={styles.text}>Contacts</Text>
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  drawerTransparent: {
    flex: 1,
    backgroundColor: "transparent",
  },
  drawer: {
    flex: 1,
    width: 320,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  headerImage: {
    borderRadius: 100,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 10,
  },
  menu: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 50,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    color: "white",
  },
  line: {
    width: "90%",
    alignSelf: "center",
    height: 1,
    backgroundColor: "gray",
    margin: 15,
  },
});
export default ContentComponent;
