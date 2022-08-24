import React, { useRef, useState } from "react";
import {
  IOperation,
  useToogleIsDoneMutation,
} from "../store/orderInProgress/orderInProgress.api";
import svgArrowDown from "../icons/arrowDown.svg";
import svgArrowUp from "../icons/arrowUp.svg";
import svgCompliteCheck from "../icons/compliteCheck.svg";
import svgUncompliteCheck from "../icons/uncompliteCheck.svg";
import { checkFullComplite } from "../utils/checkFullComplite";
import "../styles/progressSteps.scss";
import { checkPartialComplite } from "../utils/checkPartialComplite";

export interface IProgressStep {
  id: string;
  step: string;
  operations: IOperation[];
}

const ProgressSteps: React.FC<IProgressStep> = ({ id, step, operations }) => {
  const [toogleIsDone, { error }] = useToogleIsDoneMutation();
  const opers = useRef<IOperation[]>(operations);

  const [isHide, setIsHide] = useState<boolean>(true);
  const ProgressStepsListClass = isHide ? "hide" : "";

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

  const handleClickShowSteps = () => {
    setIsHide((state) => !state);
  };

  const isFullComplite = checkFullComplite(opers.current);
  const isPartialComplite = checkPartialComplite(opers.current);
  const stepNameClass = `step-name ${
    isFullComplite
      ? "full-complite"
      : isPartialComplite
      ? "partial-complite"
      : ""
  }
    `;

  return (
    <div className="steps">
      {error && JSON.stringify(error)}
      <div onClick={handleClickShowSteps} className="step-line">
        <h4 className={stepNameClass}>
          {step}
          {isFullComplite && (
            <img src={svgCompliteCheck} alt="complite check" />
          )}
        </h4>

        {isHide ? (
          <img src={svgArrowDown} alt="show operations" />
        ) : (
          <img src={svgArrowUp} alt="play" />
        )}
      </div>
      <ul className={ProgressStepsListClass}>
        {opers.current &&
          opers.current.map(({ name, isDone }, index) => {
            const operationClass = `operation  ${isDone ? "complite" : ""}`;

            return (
              <li
                key={name + index}
                onClick={() => handleClickToogle(index)}
                className={operationClass}
              >
                <span>{name}</span>
                {isDone ? (
                  <img src={svgCompliteCheck} alt="complite check" />
                ) : (
                  <img src={svgUncompliteCheck} alt="uncomplite check" />
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProgressSteps;
