import { commonPasswords } from "./constantes";
import { validarClave } from "./valida-clave";

describe('validarClave', () => {    
    it.each([
        [ "Legumbres", "2", {esValida: false, error: "La clave no es válida."} ],
        [ "Perfume", "20", {esValida: false, error: "La clave no es válida."} ],
        [ "Leche", "1", {esValida: false, error: "La clave no es válida."} ],
        [ "Lasaña", "5", {esValida: false, error: "La clave no es válida."} ]
    ]) ("Si el nombre de usuario es %s, y la contraseña es %s, el programa debería de devolver %s", (nombreUsuario: string, clave: string, resultadoEsperado) => {
        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});