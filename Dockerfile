# Imagen base ligera de Node.js
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero package.json para aprovechar el cache de Docker
COPY package*.json ./

# Instalamos SOLO dependencias de producción (más liviano)
RUN npm install --omit=dev

# Copiamos el resto del código
COPY . .

# Puerto que expone la app
EXPOSE 3000

# Comando para arrancar el servidor
CMD ["npm", "start"]
