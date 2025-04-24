// conta quantas letras especificas possui a string

function contLetras(palavra,letra){
    var contador=0;
    palavra = palavra.toLowerCase();
    // converter tudo para minúsculo

    for(var i=0;i<palavra.length;i++){
        //charAt pega uma posiçao especifica do vetor string
        if(palavra.charAt(i)==letra){
            contador++;
        }
    }
    return contador;

}