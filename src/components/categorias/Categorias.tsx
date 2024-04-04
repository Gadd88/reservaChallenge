import React, { ReactNode } from "react";
import { Accordion } from "flowbite-react";
import categorias from "../../db/categorias.json";

type Props = {
  handleServicio: (arg: string) => void;
};

// type Categoria = {
//   titulo: string;
//   servicios: {
//     tituloServicio: string;
//     descripcionServicio: string;
//   };
// };

export const Categorias = ({ handleServicio }: Props): ReactNode => {
  return (
    <section>
      <h2>Categorias</h2>
      {categorias.map((categoria) => (
        <Accordion key={categoria.titulo} collapseAll>
          <Accordion.Panel>
            <Accordion.Title>{categoria.titulo}</Accordion.Title>
            {categoria.servicios.map((servicio) => (
              <Accordion.Content key={crypto.randomUUID()}>
                <h4>{servicio.tituloServicio}</h4>
                <p>{servicio.descripcionServicio}</p>
                <button
                  onClick={() => handleServicio(servicio.descripcionServicio)}
                  className="border-2 border-black rounded-none"
                >
                  Seleccionar
                </button>
              </Accordion.Content>
            ))}
          </Accordion.Panel>
        </Accordion>
      ))}
    </section>
  );
};
