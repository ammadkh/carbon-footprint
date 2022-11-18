import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

export default function Destination() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.heading}>NEXT SERVICE</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.readingContainer}>
              <Text style={styles.reading}>181.525R</Text>
            </View>
            <Text>km</Text>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => console.log("clicked")}
          >
            <Image
              source={require("../assets/destination.jpg")}
              width={30}
              height={30}
              style={styles.image}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoWrapper: {
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
  readingContainer: {
    paddingRight: 5,
  },
  reading: {
    fontSize: 14,
    fontWeight: "700",
  },
  btnContainer: {
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
    position: "relative",
  },
  image: {
    color: "black",
    position: "absolute",
    width: 30,
    height: 30,
  },
  btnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
