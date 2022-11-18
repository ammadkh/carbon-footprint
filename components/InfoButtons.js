import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function InfoButtons() {
  const [bluetoothOn, setBluetoothOn] = useState(true);
  const [keyOn, setKeyOn] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/location.png")}
          style={styles.location}
        ></Image>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            console.log("clicked");
            setBluetoothOn((prev) => !prev);
          }}
          style={{
            ...styles.blueToothContainer,
            backgroundColor: !bluetoothOn ? "#d2d2d2" : "#FFD03A",
          }}
        >
          <View style={styles.imgWrapper}>
            <Image
              source={require("../assets/bluetooth.png")}
              style={styles.bt}
            ></Image>
          </View>
          <View style={styles.txtWrapper}>
            <Text style={styles.btnTxt}>{!bluetoothOn ? "OFF" : "ON"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log("clicked");
            setKeyOn((prev) => !prev);
          }}
          style={{
            ...styles.key,
            backgroundColor: !keyOn ? "#d2d2d2" : "#FFD03A",
          }}
        >
          <Image
            source={require("../assets/vibration.png")}
            style={styles.vibs}
          ></Image>
          <Image
            source={require("../assets/vibration.png")}
            style={styles.vibration}
          ></Image>
          <Image
            source={require("../assets/port.png")}
            style={styles.port}
          ></Image>
          <View style={styles.keyCont}>
            <Image
              source={require("../assets/key.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            ></Image>
          </View>
          <View style={{ position: "absolute", bottom: 5 }}>
            <Text style={styles.btnTxt}>{!keyOn ? "OFF" : "ON"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "100%",
  },
  location: {
    width: 30,
    height: 30,
  },
  blueToothContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  txtWrapper: {
    position: "absolute",
    bottom: 5,
  },
  bt: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  port: {
    width: 8,
    height: 8,
    resizeMode: "contain",
    position: "absolute",
    top: 14,
    left: 16,
    zIndex: 2,
  },
  keyCont: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  vibration: {
    width: 8,
    height: 8,
    resizeMode: "contain",
    position: "absolute",
    top: 8,
    left: 11,
    zIndex: 2,
  },
  vibs: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    position: "absolute",
    top: 5,
    left: 8,
    zIndex: 2,
  },
  key: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  btnTxt: {
    fontSize: 6,
    fontWeight: "800",
  },
});
