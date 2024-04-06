import React, { ReactNode } from "react";
import { Accordion } from "flowbite-react";
import services from "../../db/services.json";

type Props = {
  handleService: (arg: string) => void;
};

export const Servicios: React.FC<Props> = ({ handleService }): ReactNode => {
  const categories = Array.from(
    new Set(services.map((service) => service.category))
  );

  return (
    <section className=" bg-pink-100 p-5 rounded-md shadow-sm flex items-start justify-center flex-col mb-10">
      <h2 className="font-semibold text-xl mb-5">Servicios</h2>
      {categories.map((category) => (
        <Accordion
          key={category}
          className="min-w-[320px] w-full md:min-w-[500px] mb-5"
          collapseAll
        >
          <Accordion.Panel>
            <Accordion.Title className="text-black font-semibold bg-white hover:bg-pink-200 border-none focus:border-none active:border-none outline-none  focus:outline-none active:outline-none">
              {category}
            </Accordion.Title>
            <Accordion.Content
              key={crypto.randomUUID()}
              className="border-none outline-none bg-white focus:border-none active:border-none focus:outline-none active:outline-none"
            >
              {services
                .filter((services) => services.category === category)
                .map((service) => (
                  <div
                    key={crypto.randomUUID()}
                    className="flex flex-col justify-center items-stretch gap-4 mb-10 cursor-default"
                  >
                    <h4 className="font-semibold text-xl">{service.name}</h4>
                    <p className="text-sm">{service.description}</p>
                    <button
                      role="button"
                      name="serviceBtn"
                      onClick={() => handleService(service.name)}
                      className="border-2 border-pink-300 rounded-none focus:bg-pink-300 focus:text-white focus:outline-none active:bg-pink-300 hover:bg-pink-300 active:text-white w-3/5 place-self-center"
                    >
                      Seleccionar
                    </button>
                  </div>
                ))}
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </section>
  );
};
