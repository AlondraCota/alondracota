var frase = prompt("ingresa una frase");
var v = 0;
var letras= ['a','e','i','o','u']


for(var s=0; s<=frase.length; s++){
    if(letras.indexOf(frase[s])>=0){
        ++v;
    }
}

console.log("letrass: "+v);