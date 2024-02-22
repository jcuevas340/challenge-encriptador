function encriptar(){
    const id = "textoEncriptar";
    let texto = document.getElementById(id).value;
    const areaTextoEncriptado = document.getElementById("textoEncriptado");

    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "a" es convertida para "ai"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"

    let textoMinusculas = texto.toLowerCase();
    let arreglo = Array.from(textoMinusculas);

    for(let i=0; i<arreglo.length; i++){
        switch(arreglo[i]){
            case 'a':
                arreglo[i] = "ai";
                break;
            case 'e':
                arreglo[i] = "enter";
                break;
            case 'i':
                arreglo[i] = "imes";
                break;
            case 'o':
                arreglo[i] = "ober";
                break;
            case 'u':
                arreglo[i] = "ufat";
                break;
            default:
                break;
        }
    }

    // if(arreglo[i] === 'a'){
    //     arreglo[i] = "ai";
    // } else if(arreglo[i] === 'e'){
    //     arreglo[i] = "enter";
    // } else if(arreglo[i] === 'i'){
    //     arreglo[i] = "imes";
    // } else if(arreglo[i] === 'o'){
    //     arreglo[i] = "ober";
    // } else if(arreglo[i] === 'u'){
    //     arreglo[i] = "ufat";
    // }

    let mensajeEncriptado = arreglo.toString();

    mensajeEncriptado = mensajeEncriptado.replaceAll(",", "");

    areaTextoEncriptado.value = mensajeEncriptado;

    limpiar(id);
}

function limpiar(id){
    document.getElementById(id).value = "";
}

function desencriptar(){
    const id = "textoEncriptar";
    let textoEncriptado = document.getElementById(id).value;
    const areaTextoEncriptado = document.getElementById("textoEncriptado");

    textoEncriptado = textoEncriptado.replaceAll("imes", "i");
    textoEncriptado = textoEncriptado.replaceAll("enter", "e");
    textoEncriptado = textoEncriptado.replaceAll("ufat", "u");
    textoEncriptado = textoEncriptado.replaceAll("ober", "o");
    textoEncriptado = textoEncriptado.replaceAll("ai", "a");

    areaTextoEncriptado.value = textoEncriptado;

    limpiar(id);
}

function copiar(){
    const id = "textoEncriptado";
    let textoEncriptado = document.getElementById(id).value;
    const areaTextoEncriptar = document.getElementById("textoEncriptar");

    areaTextoEncriptar.value = textoEncriptado;

    limpiar(id);
}