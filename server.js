//Si lo consultamos en postman vemos en headers 
//X-Powered-By, o todos los que sea X- , son atribut o headers personalizados

const express = require('express')
const app = express()
const hbs = require('hbs');

//Acceder variables globales de heroku como el puerto en el que va a correr el app
//Este obj solo existe en otros ambientes que no sean locales
//Entonces le decimos que sea el port de heroku cuando se publica o 3000 para cuando no exista osea local
const port = process.env.PORT || 3000


//Para usar mis helpers propios en mi archivo helper en hbs, solo es necesario importarlo, no debo definir ninguna ni variable para usarlo, al usar hbs el solo al saber que lo vuelven a usar como en server,js el los detona solos
require('./hbs/helpers')
    //Middleware hace que seimpre sea la protagonista de la peticon del puesrto y trenga que pasar por ella
    //Se usa con callback o function
    //Esto genera que mi default del puesrto se mi carpeta public y se ejecute el index.html
    //En lugar de mis peticiones get,post,etc...
    //Si quiero ver a que me refiero comento esta linea de app.use() nada mas y descomento mis gets
    //Ya que dependiendo el interprete nuede enredar ambas instrucciones de que mostrar
    //Todo lo que se encuentre en la carpeta public es de dominio publico
    //Cualquiera puede acceder a la informacion qu tenga desde .html , .json, etc...
app.use(express.static(__dirname + '/public'))

//Express HBS engine
//el __dirname es decir busque en la variable global de rutas que tiene y concatene los siguiente con + 'etc...'
//Esto es porque en local tiene una ruta en produccion tendria otra y asi, es generico
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ronny stEveN'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

// app.get('/', (req, res) => { //Aca mandamos texto, json, etc... como content type puedo consultar postman headers para verlo
//     let salida = {
//         nombre: 'Steven',
//         edad: 23,
//         url: req.url
//     }
//     res.send(salida) //Express por abajo detecta que es un objeto y lo serializa a json solo
// })

// app.get('/data', (req, res) => { //Aca mandamos texto, json, etc... como content type puedo consultar postman headers para verlo
//     res.send('Hola estoy en data')
// })

// app.listen(3000) // Se puede tener solo el puerto, o annadir un callback como en el sig ejemplo
app.listen(port, () => {
    console.log(`Escuchando peticiones en el PORT ${port} `);
})