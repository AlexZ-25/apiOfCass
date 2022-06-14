// console.log('Metodo fetch promise');
// // Metodo GET = URL
// let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json';
// const peticion = fetch(url)
//     .then(response => {
//         console.log(response);
//         response.json().then(
//             data => {
//                 const {mxn, date} = data
//                 console.log(data)
//                 document.getElementById('mensaje').innerHTML =
//                 `El valor es ${mxn} el dia ${date}`
//             }
//         )
//     }
// )
// peticion;

console.log('Metodo fetch await');
// Metodo GET = URL
let url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json';
const peticion = async () => {
    // El metodo fetch() brinda una forma facil y
    // logica de obtener recursos de forma asincrona
    const respuesta = await fetch(url);
    console.log(respuesta);
    const datos = await respuesta.json()
    return datos;
}

peticion()