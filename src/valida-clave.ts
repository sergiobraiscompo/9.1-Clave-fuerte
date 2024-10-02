import { commonPasswords, ValidacionClave } from "./constantes";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave-helper";


// Recibe una clave y devuelve si es válida o no
export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    const tieneMayusMinus = tieneMayusculasYMinusculas(clave);
    const contieneNumeros = tieneNumeros(clave);
    const contieneCaracteresEspeciales = tieneCaracteresEspeciales(clave);
    const cumpleLongitud = tieneLongitudMinima(clave);
    const contieneNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
    const contienePalabrasComunes = tienePalabrasComunes(clave, commonPasswords);
    

    if (!tieneMayusMinus.esValida) {
        if (tieneMayusMinus.error) {
            return {esValida: tieneMayusMinus.esValida, error: tieneMayusMinus.error}
        }
    };

    if (!contieneNumeros.esValida) {
        if (contieneNumeros.error) {
            return {esValida: contieneNumeros.esValida, error: contieneNumeros.error}
        }   
    }

    if (!contieneCaracteresEspeciales.esValida) {
        if (contieneCaracteresEspeciales.error) {
            return {esValida: contieneCaracteresEspeciales.esValida, error: contieneCaracteresEspeciales.error}
        }
    };

    if (!cumpleLongitud.esValida) {
        if (cumpleLongitud.error) {
            return {esValida: cumpleLongitud.esValida, error: cumpleLongitud.error}
        }
    };

    if (!contieneNombreUsuario.esValida) {
        if (contieneNombreUsuario.error) {
            return {esValida: contieneNombreUsuario.esValida, error: contieneNombreUsuario.error}
        }
    };

    if (!contienePalabrasComunes.esValida) {
        if (contienePalabrasComunes.error) {
            return {esValida: contienePalabrasComunes.esValida, error: contienePalabrasComunes.error}
        }
    };

    
    return {esValida: true}
};

console.log(validarClave("user", "User", commonPasswords))