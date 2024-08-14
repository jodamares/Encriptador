const textArea = document.querySelector(".inputText");
const mensaje = document.querySelector(".outputText");

function encriptar(stringEncriptador){
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptador = stringEncriptador.toLowerCase()

    for(let i=0; i < llaves.length; i++){
        if(stringEncriptador.includes(llaves[i][0])){
            stringEncriptador = stringEncriptador.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return stringEncriptador
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = none
}

function desencriptar(stringDesencriptador){
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringDesencriptador = stringDesencriptador.toLowerCase()

    for(let i=0; i < llaves.length; i++){
        if(stringDesencriptador.includes(llaves[i][1])){
            stringDesencriptador = stringDesencriptador.replaceAll(llaves[i][1], llaves[i][0])
        }
    }
    return stringDesencriptador
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function btnCopiar(){
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}