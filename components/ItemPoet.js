import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import React from "react";

const ItemPoet = (props) => {
  const name = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <TouchableNativeFeedback>
          <Button
            title={name}
            onPress={props.onPressEvent}
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, },
  btnView: { margin: 5,},
});
export default ItemPoet;
