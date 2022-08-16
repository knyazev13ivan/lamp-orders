import { IOperation } from "../store/orderInProgress/orderInProgress.api";

export const checkPartialComplite = (opers: IOperation[]): boolean => {
  return opers.some(oper => oper.isDone)
}