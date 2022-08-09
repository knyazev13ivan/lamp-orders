import { createSlice } from "@reduxjs/toolkit";
import { fetchOrdersInLine } from "./actionCreators";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IOrderInLine {
  _id: string;
  name: string;
  number: number;
  priority: number;
  text: string;
}

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
  extraReducers: {
    [fetchOrdersInLine.fulfilled.type]: (state, action: PayloadAction<IOrderInLine>) => {
      // state.isLoading = false
    },
  }
});

export const orderInLineReducer = orderInLineSlice.reducer;
