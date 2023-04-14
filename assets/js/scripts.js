function consumoPokeapi(){

    // consumir el endpoint con fetch
    fetch(' https://pokeapi.co/api/v2/pokemon/mewtwo')
    // fetch('../api/pokemones.txt')
    // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
    .then(response => response.json())
    // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
    .then(data => {
        
        console.log('La pokeapi respondió');
        console.log(data);

        // sacamos de los datos la propiedad name
        let nombrePokemon = data.name;
        // sacamos de los datos la propiedad weight
        let pesoPokemon = data.weight;
        // sacamos de los datos la propiedad sprites.front_default
        let alturaPokemon = data.height;
        let imagenPokemon = data.sprites.other.dream_world.front_default;
        // sacamos de los datos la propiedad sprites.back_default
        let espaldaPokemon = data.sprites.back_default;

        // introduzco una espera artificial de tres segundos 
        setTimeout(()=>{
            console.log('El nombre del pokemon es: ', nombrePokemon);
            console.log('El peso del pokemon es: ', pesoPokemon);

            // manipulamos el DOM para poder enviar el nombre del pokemon
            let parrafoNombre = document.getElementById('nombreDelPokemon');
            parrafoNombre.innerHTML = nombrePokemon;

            // manipulamos el DOM para poder enviar el peso del pokemon
            let parrafoPeso = document.getElementById('pesoDelPokemon');
            parrafoPeso.innerHTML = pesoPokemon;

            let parrafoAltura = document.getElementById('alturaDelPokemon');
            parrafoAltura.innerHTML = alturaPokemon;

            // manipulamos el DOM para poder enviar la imagen del pokemon
            let etiquetaImagen = document.getElementById('imagenDelPokemon');
            etiquetaImagen.src = imagenPokemon;

            // manipulamos el DOM para poder enviar la imagen de espaldas del pokemon
            let etiquetaImagenEspalda = document.getElementById('imagenEspaldaPokemon');
            etiquetaImagenEspalda.src = espaldaPokemon;


        }, '3000');

        console.log('Se ejecutan las instrucciones después del setTimeout');


    })
    .catch(error => console.log('No se pudo resolver la promesa.' , error));
}

