# CampusConnect

Documentacion de la creacion del proyecto

--Inicializar un proyecto con node
  npm init

--Instalamos Typecript como dependencia de desarrollo
  npm i typescript -D

--(3)Agregar el sigueinte ejecutable en package.json
    "scripts": {
        "tsc": "tsc"
    }

--Inicializar un proyecto con TypeScript
    npm run tsc -- --init hacemos referencia al paso 3

--Instalacion de definiciones de tipos para NodeJs de typescript
    npm i --save-dev @types/node

-- Instalacion de typos de express
    npm i @types/express -D