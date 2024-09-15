import { ValidacionClave } from "./constantes";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave-helper";


// Recibe una clave y devuelve si es válida o no
export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    let error = "";

    const tieneMayusMinus = tieneMayusculasYMinusculas(clave);
    const contieneNumeros = tieneNumeros(clave);
    const contieneCaracteresEspeciales = tieneCaracteresEspeciales(clave);
    const cumpleLongitud = tieneLongitudMinima(clave);
    const contieneNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
    const contienePalabrasComunes = tienePalabrasComunes(clave, commonPasswords);

    if (tieneMayusMinus.esValida) {
        if (tieneMayusMinus.error) {
            error = tieneMayusMinus.error;
        }
    };

    if (contieneNumeros.esValida) {
        if (contieneNumeros.error) {
            error = contieneNumeros.error;
        }   
    }

    if (contieneCaracteresEspeciales.esValida) {
        if (contieneCaracteresEspeciales.error) {
            error = contieneCaracteresEspeciales.error;
        }
    };

    if (cumpleLongitud.esValida) {
        if (cumpleLongitud.error) {
            error = cumpleLongitud.error;
        }
    };

    if (contieneNombreUsuario.esValida) {
        if (contieneNombreUsuario.error) {
            error = contieneNombreUsuario.error;
        }
    };

    if (contienePalabrasComunes.esValida) {
        if (contienePalabrasComunes.error) {
            error = contienePalabrasComunes.error;
            return {esValida: contienePalabrasComunes.esValida, error: error}
        }
    };
    
    return {esValida: true}
};