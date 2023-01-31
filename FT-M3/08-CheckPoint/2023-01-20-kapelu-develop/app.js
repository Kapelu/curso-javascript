'use strict';
const express = require('express');
const app = express();
const getPorPoblacion = require('./routes/08-route');
const postCiudad = require('./routes/07-route');
const actualizarCiudad = require('./routes/09-route');
const deleteCiudad = require('./routes/10-route');
const getCiudadesByCodigoPostal = require('./routes/11-route');
const getAllPoblacion = require('./routes/12-route');

// Acuerda agregar el router o cualquier middleware que necesites aquí.

app.use(express.json());
app.use(getPorPoblacion);
app.use(postCiudad);
app.use(actualizarCiudad);
app.use(deleteCiudad);
app.use(getCiudadesByCodigoPostal);
app.use(getAllPoblacion);

module.exports = app;
