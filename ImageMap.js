import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageMapper } from "react-native-image-mapper";

const imageSource = require("./assets/png/phonics_1_5.png");
const MAPPING = [
  {
    id: "0",
    name: "First Area Name",
    shape: "rectangle",
    width: 30,
    height: 40,
    x1: 80,
    y1: 500,
    prefill: "red",
    fill: "blue",
  },
  {
    id: "1",
    name: "Second Area Name",
    shape: "rectangle",
    x2: 155,
    y2: 540,
    x1: 125,
    y1: 500,
  },
];

function MyReactNativeComponent() {
  return (
    <ImageMapper
      imgHeight={500}
      imgWidth={250}
      imgSource={imageSource}
      imgMap={MAPPING}
      onPress={(item, idx, event) => this.onAnyAreaPress(item, idx, event)}
      containerStyle={styles.myCustomStyle}
      selectedAreaId="my_area_id"
    />
  );
}

const styles = StyleSheet.create({
  myCustomStyle: { top: 10 },
});

export default MyReactNativeComponent;
