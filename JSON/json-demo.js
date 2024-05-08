let infoCurso ={
    "titulo": "Aprende Node.js",
    "numVistas":45642,
    "numLikes":21123,
    "temas":[
    "java script",
    "node.js"
    ],
    "es publico": true

}

//Objeto JS -> Cadena de caracteres JSON 
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);

// Cadena de caracteres JSON -> Objeto JS 
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto)