import { ValidacionClave } from "./constantes";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave-helper";


// Recibe una clave y devuelve si es válida o no
export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
    const contieneMayusMinus = tieneMayusculasYMinusculas(clave);
    console.log(`contiene mayus minus ${contieneMayusMinus.esValida}`);
    
    const contieneNumeros = tieneNumeros(clave);
    const contieneSibmbolos = tieneCaracteresEspeciales(clave);
    const cumpleLongitudMinima = tieneLongitudMinima(clave);
    const noContieneNombreUsuario = tieneNombreUsuario(nombreUsuario, clave);
    const noContienePalabrasComunes = tienePalabrasComunes(clave, commonPasswords);

    return contieneMayusMinus && contieneNumeros && contieneSibmbolos && cumpleLongitudMinima && noContieneNombreUsuario && noContienePalabrasComunes
    ? {esValida: true}
    : {esValida: false, error: "La clave no es válida."}
};