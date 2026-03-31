# bit-final-backend
## Autor
Lester Palacio Chamorro

# 🚗 Backend - CarWash

## 🧾 Descripción

Este proyecto corresponde al desarrollo del **backend de la aplicación CarWash**, un sistema diseñado para gestionar los servicios de un lavadero de autos.

---

## 🚀 Tecnologías utilizadas

* **Node.js**: Entorno de ejecución para JavaScript en el servidor
* **npm**: Gestor de paquetes para la instalación de dependencias
* **Express**: Framework para la creación de APIs REST
* **MongoDB**: Base de datos NoSQL utilizada para almacenar la información
* **JSON**: Formato de intercambio de datos entre cliente y servidor
* **Postman**: Herramienta utilizada para probar los endpoints

---

## 📁 Estructura del proyecto

El proyecto sigue una arquitectura organizada y modular:

```id="8z0q2h"
/carwash-backend
│
├── src/
│   ├── config/        # Configuración (conexión a MongoDB, variables de entorno)
│   ├── controllers/   # Lógica de negocio y manejo de solicitudes
│   ├── models/        # Modelos y esquemas de datos
│   ├── routes/        # Definición de endpoints de la API
│
├── .env               # Variables de entorno (NO subir al repositorio)
├── package.json       # Dependencias y scripts del proyecto
└── server.js / app.js # Archivo principal del servidor
```

---

## ⚙️ Configuración del entorno

1. Instalar dependencias:

npm install
```

2. Crear el archivo `.env` en la raíz del proyecto:

```
PORT=3000
```

---

## 🔌 Conexión a MongoDB

La conexión a la base de datos se realiza desde la carpeta `config`, utilizando la URI definida en el archivo `.env`.
MongoDB permite almacenar la información de manera flexible, ideal para gestionar datos como clientes, servicios y registros de lavado.

---

## 📡 Funcionalidades principales

El backend de **CarWash** permite:

* Crear, consultar, actualizar y eliminar datos (CRUD)
* Manejar solicitudes HTTP desde el frontend

---

## 🧪 Pruebas con Postman

Se utilizó Postman para validar el funcionamiento de la API:

* Pruebas de endpoints (GET, POST, PUT, DELETE)
* Envío de datos en formato JSON
* Verificación de respuestas del servidor

---

## ▶️ Ejecución del proyecto

Para iniciar el servidor:

Modo desarrollo:

```
npm run dev
```

Modo producción:

```
npm start
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🔐 Variables de entorno

El archivo `.env` permite manejar información sensible como:

* Puerto del servidor
* Cadena de conexión a MongoDB

⚠️ **Importante:** Este archivo no debe subirse al repositorio por seguridad.

---

## 📌 Consideraciones finales

* El proyecto está estructurado siguiendo buenas prácticas de desarrollo backend
* Se implementa una arquitectura modular para facilitar el mantenimiento
* Se separan responsabilidades en configuración, rutas, controladores y modelos
* La API está preparada para integrarse con un frontend (Angular u otro)

---

## 📄 Licencia

Este proyecto es de uso educativo.

## Software Developer

Built by [LESTER](https://github.com/lesterpal) ©️ 2026
Found a bug or have an idea? [Contact me](www.linkedin.com/in/lester-palacio-b7a63b2b0).



