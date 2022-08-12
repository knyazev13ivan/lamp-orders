import React from "react";
import { IOperation } from "../store/orderInProgress/orderInProgress.api";

const ProgressSteps: React.FC<{operations: IOperation[]}> = ({operations}) => {
  return (
    <ul>
      {operations &&
        operations.map((operation, ind) => (
          <li key={operation.name + ind}>
            {operation.name + " " + operation.isDone}
          </li>
        ))}
    </ul>
  );
};

export default ProgressSteps;
