import { Dispatch, SetStateAction } from "react";
import { useReserva } from "../../hooks/useReserva";
import { TurnosJSON } from "../../types/categorias";

type Props = {
  date: string;
  handleTime: (arg: string) => void;
  setIdTurn: Dispatch<SetStateAction<string>>;
};

export const Turnos = ({ date, handleTime, setIdTurn }: Props) => {
  const { turns } = useReserva();

  const getDate = (date: string) => {
    const array = date.split("/").reverse();
    const newdate = array.map((date) => {
      if (date.length < 2) return `0${date}`;
      return date;
    });
    return newdate.join("-");
  };

  const dateSelected = getDate(date);

  const dateSelectedTurns = turns.filter(
    (turno) => turno.fechaTurno == dateSelected
  );

  const onChangeRadio = (id: TurnosJSON['id']) => {
    setIdTurn(id);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      {dateSelectedTurns.length < 1 && (
        <p className="p-2 bg-yellow-300 rounded-md font-semibold my-2">
          No hay turnos para la fecha seleccionada
        </p>
      )}
      {dateSelectedTurns.map((turno) => (
        <label
          className="border-2 border-pink-700 rounded-md p-4 flex items-center justify-center w-32 mt-5 gap-5 relative font-semibold overflow-hidden"
          htmlFor={turno.horaTurno}
          key={turno.horaTurno}
        >
          {" "}
          {turno.horaTurno}
          <input
            className="accent-pink-500 bg-pink-100 border-none"
            type="radio"
            name="turno"
            id={turno.horaTurno}
            value={turno.horaTurno}
            disabled={turno.reservado ? true : false}
            onClick={() => handleTime(turno.horaTurno)}
            onChange={()=>onChangeRadio(turno.id)}
          />
          {turno.reservado && (
            <div className="absolute p-1 bg-red-400 -rotate-[18deg] right-4 text-sm top-4 rounded-md">
              Reservado
            </div>
          )}
        </label>
      ))}
    </div>
  );
};
