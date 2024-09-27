import { commonPasswords, ValidacionClave, valorCaracter } from "./constantes";
import { validarClave } from "./valida-clave";

// La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const valorCaracteres: valorCaracter[] = [];
    const symbolsList = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";

    for (let caracter of clave) {
        // If para el caso especial 0
        if (caracter == '0' || Number(caracter) || symbolsList.includes(caracter)) {
            continue;
        } else {
            let characterCase = "";

            caracter === caracter.toUpperCase()
            ? characterCase = "upper"
            : characterCase = "lower"

            valorCaracteres.push({caracter: caracter, characterType: characterCase});
        }
    }
    
    const todasMayus = valorCaracteres.every((caracter) => caracter.characterType === "upper");
    const todasMinus = valorCaracteres.every((caracter) => caracter.characterType === "lower");

    return (todasMayus || todasMinus)
    ? { esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas." }
    : { esValida: true};
}
    
// La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
    let hayNumero = false;

    for (let caracter of clave) {
        // If para el caso especial 0
        if (caracter == '0' || !isNaN(Number(caracter))) {
            hayNumero = true;
            break;
        }
    }

    return hayNumero
    ? { esValida: true }
    : { esValida: false, error: "La clave tiene que contener números." }
}

// La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    let haySimbolo = false;
    const symbolsList = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";

    for (let caracter of clave) {
        // If para el caso especial 0
        if (symbolsList.includes(caracter)) {
            haySimbolo = true;
            break;
        }
    }
    return haySimbolo
    ? { esValida: true }
    : { esValida: false, error: "La clave ha de contener símbolos especiales." };
};

// La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    if (clave.length >= 8) {
        return { esValida: true };
    } else {
        return {esValida: false, error: "La clave ha de tener una longitud mínima de 8 carácteres."};
    }
};

// La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    const claveMinuscula = clave.toLowerCase();
    const contieneNombreUsuario = claveMinuscula.includes(nombreUsuario.toLowerCase());

    console.log(claveMinuscula, nombreUsuario, contieneNombreUsuario)

    return contieneNombreUsuario
    ? { esValida: false, error: "La clave no debe contener el nombre del usuario." }
    : { esValida: true };
};

// La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    let contienePalabraComun = false;

    for (const password of commonPasswords) {
        if (clave.localeCompare(password)) {
            contienePalabraComun = true;
            break;
        }
    }

    return contienePalabraComun
    ? { esValida: false, error: "Evita usar palabras o combinaciones de números comunes." }
    : { esValida: true };
};
