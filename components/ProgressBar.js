import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ProgressBar() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.txt}>BATTERY</Text>
          <Text style={styles.info}>95</Text>
          <Text>%</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.txt}>RANGE</Text>
          <Text style={styles.info}>35</Text>
          <Text>km</Text>
        </View>
      </View>
      <View style={styles.barWrapper}>
        <View style={styles.active}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  txt: {
    color: "#8E8E8E",
    fontSize: 10,
    fontWeight: "700",
    paddingRight: 5,
  },
  info: {
    fontSize: 20,
    fontWeight: "700",
  },
  barWrapper: {
    width: "90%",
    position: "relative",
    backgroundColor: "#D2D2D2",
    height: 30,
    borderRadius: 30,
  },
  active: {
    backgroundColor: "#0FAA4B",
    height: 30,
    borderRadius: 30,
    width: "65%",
  },
});
