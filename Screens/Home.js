import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import BottomSheet from "../components/BottomSheet";
import InfoButtons from "../components/InfoButtons";
import MapView from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";

const colors = [
  "#ffffff",
  "rgba(255,255,255, 0)",
  "rgba(255,255,255, 0)",
  "rgba(255,255,255, 0)",
  "#ffffff",
  "#ffffff",
  "#ffffff",
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <LinearGradient colors={colors} style={{ flex: 1 }}></LinearGradient>
        </MapView>
        <InfoButtons />
      </View>
      <BottomSheet />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.5,
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
});
