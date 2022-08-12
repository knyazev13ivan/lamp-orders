import { createSlice } from "@reduxjs/toolkit";
import { IOrderInLine } from "./orderInLine.api";

const initialState: IOrderInLine[] = [
  {
    _id: '86d6fv8',
    name: "D-420",
    number: 4,
    priority: 2,
    text: "text initialState",
  },
];

const orderInLineSlice = createSlice({
  name: "orderInLine",
  initialState,
  reducers: {},
});

export const orderInLineReducer = orderInLineSlice.reducer;
