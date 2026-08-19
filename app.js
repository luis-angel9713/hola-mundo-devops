const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hola Mundo desde DevOps CI/CD!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Solo levantamos el servidor si este archivo se ejecuta directamente
// (así los tests pueden importar "app" sin abrir un puerto real)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

module.exports = app;
