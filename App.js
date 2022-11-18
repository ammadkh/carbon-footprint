import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { PowerContextProvider } from "./context/Power.context";
import Home from "./Screens/Home";

export default function App() {
  return (
    <PaperProvider>
      <PowerContextProvider>
        <Home />
      </PowerContextProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
