//Aca tambien declaramos una instancia de hbs como en server
const hbs = require('hbs');

//helpers hbs, para usarlo nada mas se llama donde se necesite
//Ya que al hacer render la pagina el mae revisa si va un parametro con xxxx nombre
//Si no existe automaticamente viene a revisar siexiste en un helper
//Se utiliza para no repetir variable en param de render, ejemplo antes el anio era un param en ambas pet de home y about, con el helper ya no es necesario
hbs.registerHelper('getAnio', () => {
        return new Date().getFullYear()
    })
    //Este helper lo que hace es reciber un texto y cambiar la primer letra de cada palabra a mayus y el resto a mins
hbs.registerHelper('capitalizar', (texto) => {
    let plabras = texto.split(' ')
    plabras.forEach((palabra, index) => {
        plabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })
    return plabras.join(' ')
})