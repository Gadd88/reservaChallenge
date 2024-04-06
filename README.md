---
runme:
  id: 01HTRXCRKV892KF8XN93Z4XGQS
  version: v3
---

# Reserva Challenge

Este es un proyecto de reserva de turnos para un salón de manicura. Está desarrollado en React con Typescript y TailwindCSS para los estilos.
Permite a los usuarios reservar turnos seleccionando el tipo de servicio que desean, la fecha del turno en la semana del 8 - 13 de Abril y un horario disponible.
Luego de ser seleccionado el turno, tiene la posibilidad de ver todos los turnos reservados, asi como cancelarlos.

## Deployment

El proyecto se encuentra deployado en Netlify

```bash {"id":"01HTRXCRKS8PN3K5VQPS33FF75"}
  https://reservaChallenge.netlify.app
```

## Instalación

Para utilizar el proyecto, puedes clonar este repositorio con el comando

```bash {"id":"01HTRXCRKT2HGWVEN3HC1DHTJF"}
  git clone https://github.com/Gadd88/reservaChallenge.git
```

Luego de ello, debes ingresar en la carpeta creada y correr el comando de instalación de dependencias

```bash {"id":"01HTRXCRKT2HGWVEN3HF6XFQRK"}
  cd reservaChallenge
  npm install
```

Esto instalará lo necesario para ejecutar el proyecto con el siguiente comando. Podrás visualizarlo corriendo en el puerto por defecto http://localhost:5173

```bash {"id":"01HTRXCRKT2HGWVEN3HJQ7G6MH"}
  npm run dev
```

## Caracteristica

- Responsivo, vistas mobile, tablet y desktop
- Utiliza localstorage para almacenar los turnos
- Navegación entre sección con React Router

## Utilización

```md {"id":"01HTRXCRKT2HGWVEN3HKGD9T87"}
1 - Seleccionar un servicio desde las opciones desplegables haciendo click o presionando "Seleccionar"

2- Desplazarse hacia abajo para seleccionar una fecha con turnos disponibles utilizando el DatePicker, las fechas con turnos disponibles cargados comprenden la semana del 08/04/2024 al 13/04/2024

3- Desplazarse hacia abajo para seleccionar uno de los turnos disponibles.

4- Tocar/Clickear en "Continuar". Con eso se almacena el turno en el localStorage y tambien se lo quita de los turnos disponibles de esa fecha.

5- Se redirecciona a la sección de "mis turnos" donde figurará la lista de turnos reservados, en ella se pueden cancelar y estos volveran a estar disponibles para reserva.
```

## Testing

Agregados tests simples con Vitest y React Testing Library. Para correrlos ejecutar: 

```md {"id":"01HTRXG3XQPFDJWRJVQRE65NKG"}
npm run test
```

