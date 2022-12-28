import * as React from "react";
import { Component } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

function Phonics2() {
  const IMAGE = require("./assets/png/phonics_1_5.png");
  const MAPPING = [
    {
      id: "0",
      name: "G",
      shape: "rectangle",
      width: 170,
      height: 120,
      x1: 0,
      y1: 0,
      prefill: "red",
      fill: "blue",
    },
    {
      id: "1",
      name: "Second Area Name",
      shape: "rectangle",
      width: 30,
      height: 40,
      x1: 125,
      y1: 500,
    },
  ];

  let imgWidth = null,
    imgHeight = null;

  Image.getSize(IMAGE, (imageWidth, imageHeight) => {
    imgWidth = imageWidth;
    imgHeight = imageHeight;
  });

  const { screenWidth } = Dimensions.get("window");

  return (
    <View style={{ width: "100%" }}>
      <View style={{ flex: 1 }}>
        <ImageBackground style={{ height: 1024, width: 724 }} source={IMAGE}>
          {MAPPING.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={(event) => console.log("pres", imgWidth)}
              style={[
                {
                  position: "absolute",
                  border: "2px solid red",
                  width: item.width,
                  height: item.height,
                  left: item.x1,
                  top: item.y1,
                },
              ]}
            />
          ))}
        </ImageBackground>
      </View>
    </View>
  );
}

export default Phonics2;
