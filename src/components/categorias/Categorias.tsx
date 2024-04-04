import React, { ReactNode } from "react";
import { Accordion } from "flowbite-react";
import categorias from "../../db/categorias.json";

type Props = {
  handleService: (arg: string) => void;
};

export const Categorias:React.FC<Props> = ({ handleService }): ReactNode => {

    // const [ currentIdx, setCurrentIdx ] = useState<number>(-1)
    // const handleVisible = (idx:number) => {
    //     setCurrentIdx(idx)
    // }


  return (
    <section className=" bg-slate-100 p-5 rounded-md shadow-sm flex items-start justify-center flex-col mx-auto">
      <h2 className="text-center font-semibold text-xl mb-5">Servicios</h2>
      {
          categorias.map((categoria) => (
                  <Accordion key={categoria.titulo} className="min-w-80 mb-5" collapseAll>
            <Accordion.Panel>
                <Accordion.Title>{categoria.titulo}</Accordion.Title>
                <Accordion.Content key={crypto.randomUUID()}>
                {categoria.servicios.map((servicio) => (
                  <div key={crypto.randomUUID()}>
                    <h4>{servicio.tituloServicio}</h4>
                    <p>{servicio.descripcionServicio}</p>
                    <button
                        onClick={() => handleService(servicio.descripcionServicio)}
                        className="border-2 border-black rounded-none"
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

              // categorias.map((categoria, idx) => (
              //     <CategoriaItem
              //         key={idx}
              //         isOpen={isOpen}
              //         categoria={categoria}/>
              // ))