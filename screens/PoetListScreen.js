import { FlatList, Platform, StyleSheet, View } from "react-native";

import React from "react";
import POET from "../data/Poet";
import HeaderView from "../components/HeaderView";
import ItemPoet from "../components/ItemPoet";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
const PoetListScreen = (props) => {
  const _renderItem = (itemData) => {
    const name = itemData.item.poetName;

    return (
      <ItemPoet
        data={name}
        onPressEvent={() => {
          props.navigation.navigate("PoetryScreen", {
            poetID: itemData.item.poetId,
            poetTitle: itemData.item.poetName,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <HeaderView />
      <View style={styles.flatScreen}>
        <FlatList
          numColumns={2}
          data={POET}
          keyExtractor={(item, index) => index.toString()}
          key={Math.random()}
          renderItem={_renderItem.bind(this)}
        />
      </View>
    </View>
  );
};

PoetListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Poets",
    headerLeft: () => {
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  flatScreen: {
    padding: 40,
    width: "100%",
  },
});



export default PoetListScreen;
