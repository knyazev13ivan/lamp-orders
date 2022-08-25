import { IOperation } from "../store/orderInProgress/orderInProgress.api";

export const calcComplitedOperations = (opers: IOperation[]) => {
  return opers.reduce((count, oper) => {
    return oper.isDone ? count + 1 : count;
  }, 0);
};
