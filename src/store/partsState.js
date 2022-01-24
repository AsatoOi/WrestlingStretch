import { atom } from "recoil";
import { BooleanFalse } from "../data/Boolean";

export const partsState = atom({
  key: "partsState",
  default: BooleanFalse,
});
