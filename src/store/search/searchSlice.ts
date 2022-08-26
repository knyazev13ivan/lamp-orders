import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISeatchValue {
  searchValue: string;
}

const initialState: ISeatchValue = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
