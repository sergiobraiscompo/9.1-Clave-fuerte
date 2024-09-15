import { commonPasswords } from "./constantes";
import { validarClave } from "./valida-clave";

describe('validarClave', () => {    
    it.each([
        [ "user1", "SoA", {esValida: false, error: "La contraseña ha de contener"}],
        [ "myself", "1234567", {esValida: false, error: "La clave no es válida."} ],
        [ "otheruser", "otheruser", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ],
        [ "mia", "123mia", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ],
        [ "lagertha", "Th3_Futur3_I5_0p3n", {esValida: true} ],
        [ "Lasaña", "asdsf", {esValida: false, error: "La clave no es válida."} ]
    ]) ("Si el nombre de usuario es %s, y la contraseña es %s, el programa debería de devolver %s", (nombreUsuario: string, clave: string, resultadoEsperado) => {
        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});