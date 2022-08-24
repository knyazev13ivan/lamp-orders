import React from "react";
import { useAppDispatch } from "../store/hooks";
import { IOperationField, toogle } from "../store/operations/operationsSlice";
import "../styles/selectOperations.scss";

export interface ISelectOperations {
  operations: IOperationField[];
  step: "locksmith" | "painter" | "millwright";
  name: string;
}

const SelectOperations: React.FC<ISelectOperations> = ({
  step,
  operations,
  name,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="operations-field">
      <h4 className="operations-caption">{name}</h4>
      {operations.map((oper, index) => (
        <li key={oper.name + index} className="operation">
          <input
            type="checkbox"
            id={step + index}
            onChange={() => dispatch(toogle({ step, index }))}
            checked={oper.isIncluded}
          />
          <label htmlFor={step + index}>{oper.name}</label>
        </li>
      ))}
    </div>
  );
};

export default SelectOperations;
