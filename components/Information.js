import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Information() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>CARBON SAVED</Text>
        <View style={{ flexDirection: "row", paddingVertical: 5 }}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.digits}>28,5</Text>
          </View>
          <Text>kg</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>SPEED</Text>
        <View style={styles.speed}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.digits}>52</Text>
          </View>
          <Text style={{ fontSize: 10 }}>km/h</Text>
        </View>
      </View>
      <View style={styles.cost}>
        <Text style={styles.heading}>TRIP COST (IDR)</Text>
        <View style={{ flexDirection: "row", paddingVertical: 5 }}>
          <View style={{ paddingRight: 5 }}>
            <Text style={styles.digits}>1.265.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    width: "90%",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#8E8E8E",
    paddingVertical: 10,
  },
  heading: {
    color: "#8E8E8E",
    fontSize: 10,
    fontWeight: "700",
    paddingRight: 5,
  },
  digits: {
    fontSize: 14,
    fontWeight: "700",
  },
  speed: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "baseline",
  },
  cost: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
});
