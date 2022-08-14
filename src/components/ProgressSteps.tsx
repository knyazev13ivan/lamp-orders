import React, { useRef } from "react";
import {
  IOperation,
  useToogleIsDoneMutation,
} from "../store/orderInProgress/orderInProgress.api";
import "../styles/progressSteps.scss";

export interface IProgressStep {
  id: string;
  step: "locksmith" | "painter" | "millwright";
  operations: IOperation[];
}

const ProgressSteps: React.FC<IProgressStep> = ({ id, step, operations }) => {
  const [toogleIsDone, { error }] = useToogleIsDoneMutation();
  const opers = useRef<IOperation[]>(operations);

  const handleClickToogle = async (index: number) => {
    opers.current = opers.current.map((oper, ind) => {
      return index !== ind ? oper : { ...oper, isDone: !oper.isDone };
    });

    await toogleIsDone({
      id: id,
      step: step,
      operations: [...opers.current],
    });
  };

  return (
    <>
      {error && JSON.stringify(error)}
      <ul>
        {opers.current &&
          opers.current.map(({ name, isDone }, index) => {
            return (
              <li key={name + index} className="operation">
                <span>{name}</span>
                <button onClick={() => handleClickToogle(index)}>
                  {isDone.toString()}
                </button>
              </li>
            );
          })}
      </ul>
      <hr />
    </>
  );
};

export default ProgressSteps;
