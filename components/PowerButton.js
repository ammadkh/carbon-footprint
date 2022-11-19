import React, { useRef, useEffect, useState, useContext } from "react";
import { TouchableOpacity, View, Animated, StyleSheet } from "react-native";
import { PowerContext } from "../context/Power.context";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PowerButton() {
  const moveAnim = useRef(new Animated.Value(0)).current; // Initial value

  const [viewHeight, setViewHeight] = useState(0);
  const { powerOn, onPowerClick } = useContext(PowerContext);

  const onLayout = (height) => {
    if (height != viewHeight) {
      setViewHeight(height);
    }
  };

  useEffect(() => {
    if (powerOn) {
      powerOnAnimation();
    } else {
      powerOffAnimation();
    }
  }, [powerOn]);

  const powerOnAnimation = () => {
    Animated.timing(moveAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const powerOffAnimation = () => {
    Animated.timing(moveAnim, {
      toValue: viewHeight - 65,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPowerClick}
        onLayout={(event) => onLayout(event.nativeEvent?.layout?.height)}
        style={styles.btn}
      >
        <Animated.View
          style={{
            ...styles.icon,
            borderColor: powerOn ? "#FEC31A" : "#0FAA4B",
            shadowColor: powerOn ? "#FEC31A" : "#0FAA4B",
            bottom: moveAnim,
          }}
        >
          <Ionicons
            name="ios-power"
            size={30}
            color={powerOn ? "#FEC31A" : "#0FAA4B"}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    height: "85%",
    width: "50%",
    backgroundColor: "#d2d2d2",
    borderRadius: 40,
    marginBottom: 15,
    alignItems: "center",
  },
  icon: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "white",
    elevation: 3,
    borderWidth: 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
