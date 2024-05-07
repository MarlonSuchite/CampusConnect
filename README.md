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

-- Instalacion de tipos de express
    npm i @types/express -D

--Intalacion de nodemon
    npm i nodemon -D

--Agregamos al proyecto ts-node leelo  https://www.npmjs.com/package/ts-node#overview
    npm i ts-node -D

--Variables de entorno dotenv
    npm i dotenv

--Conexion a mongo db
    mongodb://127.0.0.1:27017/nombreDB