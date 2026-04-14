# VONA — Node.js Mini Framework

**Vona** est un mini framework backend construit avec Node.js.
Il est inspiré de Symfony et NestJS, et permet de développer rapidement des API structurées.

---

# Stack technique

* Node.js
* Express.js
* TypeORM
* MySQL
* jsonwebtoken

---

# Objectif

Ce framework permet de :

* Structurer une API propre (Controller / Service / Repository)
* Gérer une base de données MySQL avec TypeORM
* Créer des entités et migrations facilement
* Générer du code automatiquement (CLI)
* Gérer l’authentification JWT
* Accélérer le développement backend

---

# Architecture

```text
src/
  controllers/
  services/
  entities/
  middlewares/
  routes/
  config/

scripts/
  cli.js
  commands/
```

---

# Fonctionnalités

## Auth

* Register / Login
* JWT token
* Middleware protect

---

## ORM

* TypeORM intégré
* Entities
* Relations
* Migrations

---

## CLI (Command Line Tool)

Le framework fournit un CLI similaire à Symfony :

```bash
npm run cli
```

---

# Commandes disponibles

## DATABASE

```bash
npm run cli db:create   # créer la base
npm run cli db:drop     # supprimer la base
npm run cli db:reset    # reset complet
```

---

## ENTITIES

```bash
npm run cli make:entity User
```

---

## CONTROLLERS

```bash
npm run cli make:controller User
```

---

## SERVICES

```bash
npm run cli make:service Auth
```

---

## MIGRATIONS

```bash
npm run cli make:migration Migration123
npm run cli migration:run
```

---

# AUTH FLOW

```text
User → Register → Hash password → DB
User → Login → JWT Token → Protected routes
```

---

# EXAMPLE ENDPOINTS

```http
POST   /api/register
POST   /api/login
GET    /api/profile
```

---

# INSTALLATION

```bash
npx degit https://github.com/AnjaraRasolofo/vona.git project_name
cd project_name
npm install
```

---

# CONFIGURATION (.env)

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_db
DB_PORT=3306

JWT_SECRET=your_secret
PORT=3000
```

---

# RUN PROJECT

```bash
npm run dev
```

---

# CLI USAGE EXAMPLE

```bash
npm run cli db:create
npm run cli make:entity Product
npm run cli make:controller Product
npm run cli make:migration Migration123456789
npm run cli migration:run
npm run cli make:service Product
```

---

# CONCEPT

Ce framework est basé sur :

* séparation des responsabilités (MVC + Service Layer)
* architecture scalable
* automatisation du développement
* productivité maximale backend

---

# Pourquoi "VONA" ?

“Vona” signifie **Node en malgache**, symbolisant un framework local inspiré des standards modernes.

---

# FUTURE FEATURES

* Module system (NestJS-like)
* Dependency Injection
* Auto route loader
* Seeder system
* Swagger integration

---

# OBJECTIF

Créer un framework Node.js simple, puissant et productif pour développement rapide d’API professionnelles.

---
