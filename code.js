'use strict'

fetch('invitados.txt')
.then(respuesta => respuesta.text())
.then(respuesta => respuesta.split("\r\n"))
.then(respuesta => document.write(`<h1>En la lista hay ${respuesta.length} invitados </h1>`));