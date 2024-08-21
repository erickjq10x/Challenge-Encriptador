const textArea = document.querySelector(".container__input--textarea");
const mensaje = document.querySelector(".container__output--text");


function encriptar(textoEncriptado){
    //Llavees de encriptacion   
    let llaves = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0 ; i < llaves.length ; i ++){
        if(textoEncriptado.includes(llaves[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(llaves[i][0], llaves[i][1]);
        }
    }
    return textoEncriptado;
}

function botonDesencriptar(){
    const textoEncrip = desencriptar(textArea.value);
    if (mensaje.textContent == ""){
        changeDisplay();
        mensaje.textContent += textoEncrip;
    }else{
        mensaje.textContent = "";
        mensaje.textContent += textoEncrip;
    }
}

function botonEncriptar(){
    const textoEncrip = encriptar(textArea.value);
    if (mensaje.textContent == ""){
        changeDisplay();
        mensaje.textContent += textoEncrip;
    }else{
        mensaje.textContent = "";
        mensaje.textContent += textoEncrip;
    }
    
}

function desencriptar(textoDesencriptado){
    //Llavees de encriptacion   
    let llaves = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();
    for(let i = 0 ; i < llaves.length ; i ++){
        if(textoDesencriptado.includes(llaves[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(llaves[i][1], llaves[i][0]);
        }
    }
    return textoDesencriptado;
}

function changeDisplay(){
    var message = document.getElementById("message")
    var camouflage = document.getElementById("camouflage");
    var disp = 0;
    if (disp == 1){
        camouflage.style.display  = "none";
        disp = 0
    } else {
        camouflage.style.display  = "flex";
        message.style.display  = "none";
        disp = 1;
    }
}

function copiar(){
    var textToCopy = document.getElementById("text")
    navigator.clipboard.writeText(textToCopy.textContent)
}