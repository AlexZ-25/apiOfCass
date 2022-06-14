console.log('Metodo fetch await');

const cargar = () => {
    let country = document.getElementById('test').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=616629f9acdc3b22b8b09553e632e5da`
    console.log(country);
    const peticion = async () => {
        // El metodo fetch() brinda una forma facil y
        // logica de obtener recursos de forma asincrona
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log(datos);
        return datos;
    }
    peticion()
}

// console.log('Metodo fetch promise');
// const cargar = () => {
// let url = 'https://api.openweathermap.org/data/2.5/weather?q={{country}}&appid=616629f9acdc3b22b8b09553e632e5da'
//     let country = document.getElementById('test').value;
//     url = url.replace('{{country}}', country);
//     const peticion = fetch(url);
//         .then(response => response.json());
//         .then(data => console.log(data));

//     peticion;
// }