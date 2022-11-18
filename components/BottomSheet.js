import React, { useContext, useEffect, useState } from "react";
import PowerSection from "./PowerSection";
import { LinearGradient } from "expo-linear-gradient";
import ProgressBar from "./ProgressBar";
import Information from "./Information";
import { PowerContext } from "../context/Power.context";

export default function BottomSheet() {
  const { powerOn } = useContext(PowerContext);
  const [colors, setColors] = useState([
    "#ffffff",
    "#FFFBEF",
    "#7FD19F",
    "#3CBA6C",
  ]);
  if (powerOn) {
  }
  useEffect(() => {
    if (powerOn) {
      setColors(["#ffffff", "#FFFBEF", "#FEE18F", "#FFCE45"]);
    } else {
      setColors(["#ffffff", "#FFFBEF", "#7FD19F", "#3CBA6C"]);
    }
  }, [powerOn]);
  return (
    <LinearGradient
      colors={colors}
      style={{ flex: 0.8, alignItems: "center", paddingVertical: 10 }}
    >
      <ProgressBar />
      <Information />
      <PowerSection />
    </LinearGradient>
  );
}
