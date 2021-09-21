var palabra = prompt("Ingresa tu frase: ");
var a=0, e=0, i=0, o=0, u=0;
(palabra,20,'\n');

for(var t=0; t<20; t++){
    switch(palabra[t]){
        case 'a': a++;
        break;
        case 'e': e++;
        break;
        case 'i': i++;
        break;
        case 'o': o++;
        break;
        case 'u': u++;
        break;
    }
}
console.log("VOCAL A: ",a);
console.log("VOCAL E: ",e);
console.log("VOCAL I: ",i);
console.log("VOCAL O: ",o);
console.log("VOCAL U: ",u);