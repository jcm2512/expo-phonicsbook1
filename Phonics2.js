import * as React from "react";
import { useRef, useState } from "react";

import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  StyleSheet,
} from "react-native";

const PinchZoomView = ({ children }) => {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 10 || Math.abs(gestureState.dy) > 10;
      },
      onPanResponderMove: (evt, gestureState) => {
        // Update the scale of the view based on the pinch gesture
        const { scale } = gestureState;
        setScale(scale);
      },
    })
  ).current;

  const [scale, setScale] = useState(new Animated.Value(1));

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale }] }]}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function Phonics2() {
  const IMAGE = require("./assets/png/phonics_1_5.png");
  const MAPPING = [
    {
      id: "0",
      name: "G",
      shape: "rectangle",
      width: 175,
      height: 55,
      x1: 45,
      y1: 250,
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

  return (
    <View style={{ width: "100%" }}>
      <PinchZoomView>
        <Image style={{ height: 1024, width: 724 }} source={IMAGE} />

        {/* {MAPPING.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={(event) => console.log("pressed", item.id)}
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
        ))} */}
      </PinchZoomView>
    </View>
  );
}

export default Phonics2;
