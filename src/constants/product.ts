import { WatchColor, WatchSize } from "../types";
import blackImg from "./../assets/black.jpg";
import blueImg from "./../assets/blue.jpg";
import cyanImg from "./../assets/cyan.jpg";
import purpleImg from "./../assets/purple.jpg";

export const WATCH_IMAGES = {
  purple: purpleImg,
  cyan: cyanImg,
  blue: blueImg,
  black: blackImg,
};

export const SIZES: { size: WatchSize; price: number }[] = [
  { size: "S", price: 69.0 },
  { size: "M", price: 79.0 },
  { size: "L", price: 89.0 },
  { size: "XL", price: 99.0 },
];

export const COLORS: WatchColor[] = ["purple", "cyan", "blue", "black"];
