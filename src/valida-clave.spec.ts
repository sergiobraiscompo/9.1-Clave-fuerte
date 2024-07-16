import { commonPasswords } from "./constantes";
import { validarClave } from "./valida-clave";

describe('validarClave', () => {    
    it.each([
        [ "Legumbres", "SOA", {esValida: false}],
        [ "Perfume", "20", {esValida: false, error: "La clave no es válida."} ],
        [ "Leche", "Slipknot", {esValida: true} ],
        [ "Lasaña", "asdsf", {esValida: false, error: "La clave no es válida."} ]
    ]) ("Si el nombre de usuario es %s, y la contraseña es %s, el programa debería de devolver %s", (nombreUsuario: string, clave: string, resultadoEsperado) => {
        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});