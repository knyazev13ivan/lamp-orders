import React from "react";
import {
  useCreateLampMutation,
  useGetLampQuery,
} from "../store/lamps/lamp.api";

const CreateNewLamp: React.FC = () => {
  const {
    data: lamp,
    isLoading: isLoadingGetLamp,
    error: errorGetLamp,
  } = useGetLampQuery("test1");
  const [
    createLamp,
    { error: errorCreateLamp, isLoading: isLoadingCreateLamp },
  ] = useCreateLampMutation();

  const handleClickCreateLamp = () => {
    createLamp({
      name: "DL-420",
      locksmith: [
        "нарезка профеля",
        "выпрямление корпуса",
        "фрезеровка для гермоввода",
        "фрезеровка места под планки",
        "гравировка",
        "сверление отверстий для гермоввода",
        "обработка отверстий",
        "подготовка к покраске",
      ],
      painter: [
        "подвешивание к покрасочной линии",
        "очистка перед покраской",
        "покраска",
        "прогрев в печи",
        "остывание",
        "снятие защитных заглушек",
      ],
      millwright: [
        "подготовка места для монтажа платы",
        "монтаж платы",
        "нарезка проводов",
        "пайка элементов",
        "монтаж линз",
        "установка планок",
        "герметизация",
        "тесты работоспособности",
      ],
    });
  };

  return (
    <div>
      {isLoadingGetLamp && "Loading..."}
      {errorGetLamp && JSON.stringify(errorGetLamp)}
      {lamp && JSON.stringify(lamp, null, 2)}
      <br />
      <button onClick={handleClickCreateLamp}>Create New Lamp</button>
      {isLoadingCreateLamp && "Creating lamp..."}
      {errorCreateLamp && JSON.stringify(errorCreateLamp)}
    </div>
  );
};

export default CreateNewLamp;
