import React, { ReactNode } from "react";
import { Accordion } from "flowbite-react";
import categorias from "../../db/categorias.json";

type Props = {
  handleService: (arg: string) => void;
};

export const Categorias:React.FC<Props> = ({ handleService }): ReactNode => {

  return (
    <section className=" bg-pink-100 p-5 rounded-md shadow-sm flex items-start justify-center flex-col">
      <h2 className="font-semibold text-xl mb-5">Servicios</h2>
      {
          categorias.map((categoria) => (
            <Accordion key={categoria.titulo} className="min-w-[340px] mb-5" collapseAll>
              <Accordion.Panel>
                  <Accordion.Title className="text-black font-semibold bg-white hover:bg-pink-200 border-none focus:border-none active:border-none outline-none  focus:outline-none active:outline-none">{categoria.titulo}</Accordion.Title>
                  <Accordion.Content key={crypto.randomUUID()} className="border-none outline-none bg-white focus:border-none active:border-none focus:outline-none active:outline-none">
                  {categoria.servicios.map((servicio) => (
                    <div key={crypto.randomUUID()} className="mb-10 flex flex-col justify-center items-stretch gap-4">
                      <h4 className="font-semibold text-xl">{servicio.tituloServicio}</h4>
                      <p className="text-sm">{servicio.descripcionServicio}</p>
                      <button
                          onClick={() => handleService(servicio.descripcionServicio)}
                          className="border-2 border-pink-300 rounded-none focus:bg-pink-300 focus:text-white focus:outline-none active:bg-pink-300 active:text-white"
                          >
                          Seleccionar
                      </button>
                    </div>
                  ))}
                  </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
        ))
      }
    </section>
  );
};