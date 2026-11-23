# Sistema de Bibliotecas y Libros - Frontend

Aplicación frontend desarrollada con Angular para el taller práctico de Sistema de Bibliotecas y Libros.

La aplicación permite registrar bibliotecas y consultar los libros asociados a cada una, consumiendo el backend desarrollado con Spring Boot mediante solicitudes HTTP.

## Funcionalidades implementadas

- Formulario para registrar una biblioteca.
- Campos de registro: nombre, dirección y ciudad.
- Consulta de bibliotecas mediante `GET /bibliotecas`.
- Registro de bibliotecas mediante `POST /bibliotecas`.
- Tabla de libros con título, autor, año de publicación y biblioteca asociada.

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- HttpClient
- Formularios reactivos

## Estructura del proyecto

```text
src/
└── app/
    ├── componentes/
    │   ├── formulario-biblioteca/
    │   └── tabla-libros/
    ├── modelos/
    │   ├── biblioteca.model.ts
    │   └── libro.model.ts
    └── servicios/
        └── biblioteca.service.ts
```

## Conexión con el backend

El backend debe estar ejecutándose en `http://localhost:8080`.

Angular se ejecuta en `http://localhost:4200`. El archivo `proxy.conf.json` envía las solicitudes a `/bibliotecas` hacia el backend local.

## Ejecutar el proyecto

Primero inicia el backend:

```powershell
mvn spring-boot:run
```

Después, en la carpeta de este frontend, ejecuta:

```powershell
npm install
npm start
```

Abre `http://localhost:4200` en el navegador.

## Prueba 

Al abrir la aplicación se muestran los libros de prueba con sus bibliotecas:

| Título | Autor | Año | Biblioteca |
|---|---|---:|---|
| Cien años de soledad | Gabriel García Márquez | 1967 | Biblioteca Central |
| El coronel no tiene quien le escriba | Gabriel García Márquez | 1961 | Biblioteca Norte |

