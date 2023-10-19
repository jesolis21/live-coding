let myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'pera', 'sandia', 'guanabana', 'gato'];
let bigWords = 'telefono';

function palabrasGrandesBuscar(myArray, bigWords) {
    const Encontrado = myArray.filter(word => word.length > bigWords[0].length );
    return Encontrado;
}
const resultado = palabrasGrandesBuscar(myArray, bigWords);
console.log(resultado);
function imprimirHTML(resultado) {
    const ul = document.querySelector('#miLista'); l
    resultado.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        ul.appendChild(li);
    });
    
}

imprimirHTML(resultado);
  
  