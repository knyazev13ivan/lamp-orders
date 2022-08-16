import { IOperation } from "../store/orderInProgress/orderInProgress.api";

export const checkFullComplite = (opers: IOperation[]): boolean => {
  return opers.every(oper => oper.isDone)
}