import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

export default function Station() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>ODOMETER</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.numWrapper}>
            <Text style={styles.reading}>164.325</Text>
          </View>
          <Text>km</Text>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log("clicked")}
        >
          <Image
            source={require("../assets/station.jpg")}
            width={10}
            height={10}
            style={styles.station}
          ></Image>
          <Image
            source={require("../assets/tool.png")}
            style={styles.tool}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  wrapper: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#8E8E8E",
    fontSize: 10,
    fontWeight: "700",
    paddingVertical: 5,
  },
  numWrapper: {
    paddingRight: 5,
  },
  reading: {
    fontSize: 14,
    fontWeight: "700",
  },
  btnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  station: {
    color: "black",
    width: 40,
    height: 35,
    position: "absolute",
  },
  tool: {
    color: "black",
    position: "absolute",
    right: "52%",
    width: 10,
    height: 10,
  },
});
