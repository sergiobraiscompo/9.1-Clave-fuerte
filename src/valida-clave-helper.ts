import { ValidacionClave } from "./constantes";

// La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const contieneMayus = clave => clave === clave.toUpperCase();
    const contieneMinus = false;
    
    
    return (contieneMayus || contieneMinus)
    ? { esValida: true }
    : {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."};
}
    
// La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
    const contieneNumeros = (clave: string): boolean => { 
        clave
        return false;
    };

    if (contieneNumeros(clave)) {
        return { esValida: true };
    } else {
        return {esValida: false, error: "La clave tiene que contener números."};
    }
};

// La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    const contieneCaracteresEspeciales = (clave: string): boolean => { 
        clave 
        return false;
    };

    if (contieneCaracteresEspeciales(clave)) {
        return { esValida: true };
    } else {
        return {esValida: false, error: "La clave ha de contener símbolos especiales."};
    }
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
    const noContieneNombreUsuario = (nombreUsuario: string, clave: string): boolean => { 
        const contieneNombreUsuario: boolean = clave.includes(nombreUsuario);
        return !contieneNombreUsuario;
    };

    if (noContieneNombreUsuario(nombreUsuario, clave)) {
        return { esValida: true };
    } else {
        return {esValida: false, error: "La clave no debe contener el nombre del usuario."};
    }
};

// La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
    const contienePalabraComun: boolean = commonPasswords.includes(clave);

    if (contienePalabraComun) {
        return { esValida: true };
    } else {
        return {esValida: false, error: "La clave no debe tener palabras comunes."};
    }
};