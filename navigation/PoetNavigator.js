import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import PoetListScreen from "../screens/PoetListScreen";
import PoetryListScreen from "../screens/PoetryListScreen";

import AboutScreen from "../WasteScreen/About";
import { Platform, Dimensions } from "react-native";

import Colors from "../constants/Colors";
import ContentComponent from "../components/ContentComponent";

const PoetNavigator = createStackNavigator(
  {
    PoetScreen: PoetListScreen,
    PoetryScreen: {
      screen: PoetryListScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "" : "",
      },
      headerTintColor: Platform.OS === "android" ? "" : Colors.primary,
    },
  }
);

const BasicNavigator = createStackNavigator({
  About: { screen: AboutScreen },
});
const PoetDrawer = createDrawerNavigator(
  {
    AllPoets: PoetNavigator,
    About: BasicNavigator,
  },
  {
    initialRouteName: "AllPoets",
    contentComponent: ContentComponent,
    drawerWidth: Dimensions.get("window").width,
    drawerPosition: "left",
    drawerBackgroundColor: "transparent",
  }
);
export default createAppContainer(PoetDrawer);
