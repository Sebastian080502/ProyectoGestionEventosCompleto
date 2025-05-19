# 🎯 Proyecto Gestión de Eventos - Fullstack App

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/Sebastian080502/ProyectoGestionEventosCompleto)
![GitHub repo size](https://img.shields.io/github/repo-size/Sebastian080502/ProyectoGestionEventosCompleto)
![Made with TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)

---

## 📌 Descripción

Sistema completo para **gestionar eventos académicos o empresariales**. Permite registrar usuarios, gestionar ponentes, sedes, inscripciones, feedback y más.

> Proyecto desarrollado como parte de la formación universitaria (Semestre 4 - Ingeniería de Sistemas, CORHUILA).

---

## 🧩 Tecnologías Utilizadas

### 🔧 Backend - `NestJS`

- Node.js + NestJS
- TypeScript
- PostgreSQL + Prisma ORM
- Docker (contenedores de base de datos)
- JWT para autenticación

### 🎨 Frontend - `Vite + React`

- Vite
- React JS
- TypeScript (o JavaScript)
- TailwindCSS (si se usó)
- Axios para consumo de APIs

---

## 🗂️ Estructura del Proyecto

```
ProyectoGestionEventosCompleto/
├── Proyecto-backend/                  # Backend API (NestJS)
├── Proyecto-frontend/
│   └── proyecto-frontend/            # Frontend web (Vite + React)
└── README.md
```

---

## ⚙️ Instalación Rápida

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Sebastian080502/ProyectoGestionEventosCompleto.git
cd ProyectoGestionEventosCompleto
```

---

### 2. Instalar el Backend

```bash
cd Proyecto-backend
yarn install
cp .env.example .env   # configura tus variables de entorno
yarn start:dev
```

> Requiere PostgreSQL funcionando o configurado por Docker

---

### 3. Instalar el Frontend

```bash
cd Proyecto-frontend/proyecto-frontend
npm install
npm run dev
```

> La aplicación se abre en: `http://localhost:5173`

---

## 📌 Características del Proyecto

- 🔐 Registro e inicio de sesión con autenticación JWT
- 📅 Crear y gestionar eventos
- 🗣️ Administrar ponentes
- 🧍‍♂️ Registrar asistentes e inscripciones
- 📍 Control de ubicaciones y patrocinadores
- 📝 Calificar eventos y ver opiniones

---

## 📸 Capturas de Pantalla

> (Agrega aquí imágenes con: `![Home](ruta/a/imagen.png)`)

---

## 🧠 Estado del Proyecto

🚧 En desarrollo (Mayo 2025)  
🎓 Proyecto académico universitario

---

## 👨‍💻 Autor

**Juan Sebastián Osorio Fierrl**  
Estudiante de Ingeniería de Sistemas - CORHUILA  
[GitHub Institucional](https://github.com/Sebastian080502)

---

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).  
¡Puedes usarlo, modificarlo y compartirlo libremente!