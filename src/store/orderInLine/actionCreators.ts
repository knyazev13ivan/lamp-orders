import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
// import { AppDispatch } from "../store";
import { IOrderInLine } from "./orderInLineSlice";

// export const fetchOrderInLine = () => async (dispatch: AppDispatch) => {
//   try {
//     const response = await axios.get<IOrderInLine>('/order-in-line')
//   } catch (error) {
    
//   }
// }

export const fetchOrdersInLine = createAsyncThunk(
  'orders-in-line',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IOrderInLine>('/order-in-line')
      return response.data;      
    } catch (error) {
      return thunkApi.rejectWithValue('не удалось загрузить пользователей')
    }
  }
)