import React, { FormEvent, useState } from "react";
import SelectOperations from "../components/SelectOperations";
import { useAppSelector } from "../store/hooks";
import {
  useCreateLampMutation,
  useGetAllLampsQuery,
  useGetLampQuery,
} from "../store/lamps/lamp.api";
import { IOperationField } from "../store/operations/operationsSlice";

const CreateNewLamp: React.FC = () => {
  const { locksmith, painter, millwright } = useAppSelector(
    (state) => state.operations
  );

  const {
    data: lamp,
    isLoading: isLoadingGetLamp,
    error: errorGetLamp,
  } = useGetLampQuery("D-140");

  const { data: allLamps } = useGetAllLampsQuery("");

  const [formState, setFormState] = useState<{ name: string }>({
    name: "D-140",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const [
    createLamp,
    { error: errorCreateLamp, isLoading: isLoadingCreateLamp },
  ] = useCreateLampMutation();

  const handleSubmitCreateLamp = async (e: FormEvent) => {
    e.preventDefault();

    const formatting = (opers: IOperationField[]): string[] =>
      opers.filter((oper) => oper.isIncluded).map((oper) => oper.name);

    createLamp({
      name: formState.name,
      locksmith: formatting(locksmith),
      painter: formatting(painter),
      millwright: formatting(millwright),
    });
  };

  return (
    <div>
      <hr />
      <h3>{allLamps && allLamps.map((lamp) => lamp.name).join(" | ")}</h3>
      <hr />
      {isLoadingGetLamp && "Loading..."}
      {errorGetLamp && JSON.stringify(errorGetLamp)}
      {lamp && "getLamp: " + lamp.name}
      <br />
      <br />
      <form onSubmit={handleSubmitCreateLamp}>
        <fieldset>
          Lamp name
          <input
            type="text"
            value={formState.name}
            onChange={handleChange}
            name="name"
            id="nameField"
          />
          <SelectOperations operations={locksmith} step="locksmith" />
          <SelectOperations operations={painter} step="painter" />
          <SelectOperations operations={millwright} step="millwright" />
          <button type="submit">Create!</button>
        </fieldset>
      </form>
      <hr />
      <br />
      {isLoadingCreateLamp && "Creating lamp..."}
      {errorCreateLamp && JSON.stringify(errorCreateLamp)}
    </div>
  );
};

export default CreateNewLamp;
