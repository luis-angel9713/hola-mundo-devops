# Hola Mundo App - Práctica Final DevOps CI/CD

Aplicación web "Hola Mundo" hecha en Node.js + Express, con pruebas unitarias,
Dockerfile y un pipeline de CI/CD con GitHub Actions que:

1. Instala las dependencias.
2. Ejecuta las pruebas unitarias (Jest + Supertest).
3. Construye la imagen Docker y la sube a Docker Hub.
4. Despliega la aplicación en producción (Render).

## Correr en local

```bash
npm install
npm start
```

Abrir en el navegador: http://localhost:3000

## Correr las pruebas

```bash
npm test
```

## Construir y correr con Docker

```bash
docker build -t hola-mundo-app .
docker run -p 3000:3000 hola-mundo-app
```

## Enlaces

- Repositorio: <PON_AQUI_TU_ENLACE_DE_GITHUB>
- Aplicación en producción: <PON_AQUI_TU_URL_DE_RENDER>
probando pipeline 
