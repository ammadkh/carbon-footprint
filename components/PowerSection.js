import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Station from "./Station";
import Destination from "./Destination";
import PowerButton from "./PowerButton";

export default function PowerSection() {
  return (
    <View style={styles.conatiner}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Station />
        <PowerButton />
        <Destination />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Stations</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Power</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Destination</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
  wrapper: {
    flexDirection: "row",
    marginBottom: 10,
  },
  conatiner: {
    width: "90%",
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
  },
});
