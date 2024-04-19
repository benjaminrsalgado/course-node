//console.log(process.argv[2]);
//console.log(process.argv[3]);

//console.log(process.argv);

//{node, app.js3, 6, 7} //argumentos
// 0,    1,      2, 3   //indices

for ( let i = 2; i < process.argv.length; i++){
  console.log(process.argv[i]);
}

//console.log(process.memoryUsage());