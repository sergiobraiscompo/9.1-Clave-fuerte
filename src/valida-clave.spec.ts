import { commonPasswords } from "./constantes";
import { validarClave } from "./valida-clave";

describe('validarClave', () => {    
    it.each([
        [ "mia", "asdf", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "user1", "SoAJFDSN", {esValida: false, error: "La clave tiene que contener números."}],
        [ "myself", "Dsaf1234567", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
        [ "oneuser", "My_K3y", {esValida: false, error: "La clave ha de tener una longitud mínima de 8 carácteres."} ],
        [ "0th3rus3R_", "0th3rus3R_", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ],
        [ "otheruser", "Password", {esValida: false, error: "Evita usar palabras o combinaciones de números comunes."} ],
        [ "lagertha", "Th3_Futur3_I5_0p3n", {esValida: true} ],
    ]) ("Si el nombre de usuario es %s, y la contraseña es %s, el programa debería de devolver %s", (nombreUsuario: string, clave: string, resultadoEsperado) => {
        // Act
        const resultado = validarClave(nombreUsuario, clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});