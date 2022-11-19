import React, { useState } from "react";

export const PowerContext = React.createContext();

export const PowerContextProvider = ({ children }) => {
  const [powerOn, setPowerOn] = useState(true);

  const onPowerClick = () => {
    console.log("clicked");
    setPowerOn((prev) => !prev);
  };

  return (
    <PowerContext.Provider value={{ powerOn, onPowerClick }}>
      {children}
    </PowerContext.Provider>
  );
};
