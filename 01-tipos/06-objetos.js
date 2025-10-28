//personaje de tv
let nombre = "Inoske";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre:"Inoske",//par llave(atributo) - valor
    anime: "Demon Slayer",
    edad: 16
};//objeto literal

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);


personaje.edad = 13;
personaje['edad'] = 16;

delete personaje.anime;

console.log(personaje);