const express = require('express');
const mysql = require('mysql');

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'hospital',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos MySQL', error);
  } else {
    console.log('Conexión exitosa a la base de datos MySQL');
  }
});

// Configuración de Express.js
const app = express();
app.use(express.json());

// Ruta para recibir los datos del formulario de doctores
app.post('/src/doctores', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO doctores SET ?';

  connection.query(sql, formData, (error, result) => {
    if (error) {
      console.error('Error al almacenar los datos del doctor en la base de datos', error);
      res.status(500).send('Error al almacenar los datos del doctor en la base de datos');
    } else {
      res.status(201).send('Datos del doctor almacenados correctamente en la base de datos');
    }
  });
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});


