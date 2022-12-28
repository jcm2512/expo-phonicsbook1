import { getRandomColor } from "./ImageMapper";

export const RECTANGLE_MAP = [
  {
    id: "0",
    name: "Left Foot",
    shape: "rectangle",
    x2: 110,
    y2: 540,
    x1: 80,
    y1: 500,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "1",
    name: "Right Foot",
    shape: "rectangle",
    x2: 155,
    y2: 540,
    x1: 125,
    y1: 500,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "2",
    name: "Left Knee",
    shape: "rectangle",
    x2: 110,
    y2: 400,
    x1: 80,
    y1: 370,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "3",
    name: "Right Knee",
    shape: "rectangle",
    x2: 155,
    y2: 400,
    x1: 125,
    y1: 370,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "4",
    name: "Stomach",
    shape: "rectangle",
    x2: 155,
    y2: 240,
    x1: 80,
    y1: 165,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "5",
    name: "Left Hand",
    shape: "rectangle",
    x2: 40,
    y2: 315,
    x1: 5,
    y1: 250,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "6",
    name: "Right Hand",
    shape: "rectangle",
    x2: 235,
    y2: 315,
    x1: 200,
    y1: 250,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "7",
    name: "Face",
    shape: "rectangle",
    x2: 145,
    y2: 70,
    x1: 90,
    y1: 30,
    prefill: getRandomColor(),
    fill: "blue",
  },
  {
    id: "8",
    name: "Head",
    shape: "rectangle",
    x2: 145,
    y2: 30,
    x1: 90,
    y1: 0,
    prefill: getRandomColor(),
    fill: "blue",
  },
];