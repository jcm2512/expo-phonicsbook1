// Image Mapper in React Native to Create Clickable Areas on Image
// https://aboutreact.com/react-native-image-mapper/

import React, { useState } from "react";
import { View, Text } from "react-native";
import ImageMapper from "react-native-image-mapper";

import { RECTANGLE_MAP } from "./areas";

export function getRandomColor() {
  //Function to return random color
  //To highlight the mapping area
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

const ImageMap = () => {
  //State for the selected area
  //   const [selectedAreaId, setSelectedAreaId] = useState([]);

  const mapperAreaClickHandler = async (item, idx, event) => {
    console.log(`Clicked Item Id: ${item.id}`);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 30 }}>
      <ImageMapper
        imgHeight={551}
        imgWidth={244}
        imgSource={require("./assets/png/phonics_1_5.png")}
        imgMap={RECTANGLE_MAP}
        onPress={(item, idx, event) => mapperAreaClickHandler(item, idx, event)}
        containerStyle={{ top: 10 }}
        responsive={true}
        parentWidth={400}
        // selectedAreaId={selectedAreaId}
        // multiselect
      />
    </View>
  );
};

export default ImageMap;
