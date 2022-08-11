import { View, Text, Platform } from "react-native";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

const About = () => {
  return (
    <View>
      <Text>About</Text>
    </View>
  );
};

export default About;

About.navigationOptions = (navData) => {
  return {
    headerTitle: "About Us",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Home"
          iconName={Platform.OS === "android" ? "ios-home" : "ios-home"}
          onPress={() => navData.navigation.navigate('AllPoets')}
        />
      </HeaderButtons>
    ),
  };
};
