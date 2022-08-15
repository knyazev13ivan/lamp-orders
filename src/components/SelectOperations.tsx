import React from "react";
import { useAppDispatch } from "../store/hooks";
import { IOperationField, toogle } from "../store/operations/operationsSlice";

export interface ISelectOperations {
  step: "locksmith" | "painter" | "millwright";
  operations: IOperationField[];
}

const SelectOperations: React.FC<ISelectOperations> = ({
  step,
  operations,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>{step}</h3>
      {operations.map((oper, index) => (
        <li key={oper.name + index}>
          <label htmlFor="">
            <input
              type="checkbox"
              onChange={() => dispatch(toogle({ step, index }))}
              checked={oper.isIncluded}
            />
            {oper.name}
          </label>
        </li>
      ))}
    </div>
  );
};

export default SelectOperations;
