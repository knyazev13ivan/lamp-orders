import React, { FormEvent, useState } from "react";
import SelectOperations from "../components/SelectOperations";
import { useAppSelector } from "../store/hooks";
import { useCreateLampMutation } from "../store/lamps/lamp.api";
import { IOperationField } from "../store/operations/operationsSlice";
import "../styles/createNewLamp.scss";

const CreateNewLamp: React.FC = () => {
  const { locksmith, painter, millwright } = useAppSelector(
    (state) => state.operations
  );

  const [formState, setFormState] = useState<{ name: string }>({
    name: "",
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
    <div className="create-new-lamp-page">
      <form onSubmit={handleSubmitCreateLamp}>
        <label className="label-text-field name-field">
          <span className="label-text">Название</span>
          <input
            type="text"
            value={formState.name}
            onChange={handleChange}
            name="name"
            id="nameField"
          />
        </label>

        <SelectOperations
          operations={locksmith}
          step="locksmith"
          name="Изготовление корпуса"
        />
        <SelectOperations operations={painter} step="painter" name="Покраска" />
        <SelectOperations
          operations={millwright}
          step="millwright"
          name="Монтаж и сборка"
        />

        <button type="submit" className="button-create-new-lamp">
          Создать!
        </button>
      </form>

      {isLoadingCreateLamp && "Creating lamp..."}
      {errorCreateLamp && JSON.stringify(errorCreateLamp)}
    </div>
  );
};

export default CreateNewLamp;
