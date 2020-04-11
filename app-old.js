//Este es la forma vieja y apata de hacerlo
//Nosotros lo vamos a hacer con express 
//Creamos la clase server.js
const http = require('http') //Este paquete ya lo trae por default node

//Creamos nuestro web server primero que todo
//Con params que recibe los requests y las responses, ademas del callback
http.createServer((req, res) => {


        res.writeHead(200, { 'Content-Type': 'application/json' })
        let salida = {
            nombre: 'Ronny',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida))
            // res.write('Hola mundo') //Aqui estamos creando nuestra respuesta
        res.end() // Aqui le decimos que ya terminamos de realizar la respuesta

    })
    .listen(8080) //Aqui definimos por cual puerto queremos escuchar


console.log('Escuchando el puerto 8080');