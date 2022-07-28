import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import PoetListScreen from "../screens/PoetListScreen";
import PoetryListScreen from "../screens/PoetryListScreen";

import AboutScreen from "../WasteScreen/About";
import { Platform } from "react-native";

import Colors from "../constants/Colors";

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
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

const PoetDrawer = createDrawerNavigator(
  {
    PoetNav: PoetNavigator,
    AboutScreen: AboutScreen,
  },
  { defaultNavigationOptions: {} }
);
export default createAppContainer(PoetDrawer);
