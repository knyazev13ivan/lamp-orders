import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IOperationField {
  name: string;
  isIncluded: boolean;
}
export interface IOperationsForLamp {
  locksmith: IOperationField[];
  painter: IOperationField[];
  millwright: IOperationField[];
}

const initialState: IOperationsForLamp = {
  locksmith: [
    {
      name: "нарезка профеля",
      isIncluded: true,
    },
    {
      name: "выпрямление корпуса",
      isIncluded: true,
    },
    {
      name: "фрезеровка для гермоввода",
      isIncluded: true,
    },
    {
      name: "фрезеровка места под планки",
      isIncluded: true,
    },
    {
      name: "гравировка",
      isIncluded: true,
    },
    {
      name: "сверление отверстий для гермоввода",
      isIncluded: true,
    },
    {
      name: "обработка отверстий",
      isIncluded: true,
    },
    {
      name: "подготовка к покраске",
      isIncluded: true,
    },
  ],
  painter: [
    {
      name: "подвешивание к покрасочной линии",
      isIncluded: true,
    },
    {
      name: "очистка перед покраской",
      isIncluded: true,
    },
    {
      name: "покраска",
      isIncluded: true,
    },
    {
      name: "прогрев в печи",
      isIncluded: true,
    },
    {
      name: "остывание",
      isIncluded: true,
    },
    {
      name: "снятие защитных заглушек",
      isIncluded: true,
    },
  ],
  millwright: [
    {
      name: "подготовка места для монтажа платы",
      isIncluded: true,
    },
    {
      name: "монтаж платы",
      isIncluded: true,
    },
    {
      name: "нарезка проводов",
      isIncluded: true,
    },
    {
      name: "пайка элементов",
      isIncluded: true,
    },
    {
      name: "монтаж линз",
      isIncluded: true,
    },
    {
      name: "установка планок",
      isIncluded: true,
    },
    {
      name: "герметизация",
      isIncluded: true,
    },
    {
      name: "тесты работоспособности",
      isIncluded: true,
    },
  ],
};

const operationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    toogle: (
      state,
      {
        payload: { step, index },
      }: PayloadAction<{
        step: "locksmith" | "painter" | "millwright";
        index: number;
      }>
    ) => {
      state[step][index].isIncluded = !state[step][index].isIncluded;
    },
  },
});

export const { toogle } = operationsSlice.actions;

export default operationsSlice.reducer;
