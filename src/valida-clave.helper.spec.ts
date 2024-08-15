import { commonPasswords } from "./constantes";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave-helper";

describe('tieneMayusculasYMinusculas', () => {    
    it.each([
        [ "PASS", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "51651321", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "prueba", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "ContraseÑa", {esValida: true} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneMayusculasYMinusculas(clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tieneNumeros', () => {    
    it.each([
        [ "cuarentaysiete", {esValida: false, error: "La clave tiene que contener números."} ],
        [ "Xwyu7", {esValida: true} ],
     ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneNumeros(clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tieneCaracteresEspeciales', () => {    
    it.each([
        [ "25465d5sfasd4f5", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
        [ "C0ntrasegn@", {esValida: true} ],
        [ "37491183", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneCaracteresEspeciales(clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tieneLongitudMinima', () => {    
    it.each([
        [ "12345678", { esValida: true } ],
        [ "20sadfkjlfkasdjfl", { esValida: true } ],
        [ "1234567", {esValida: false, error: "La clave ha de tener una longitud mínima de 8 carácteres."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneLongitudMinima(clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tieneNombreUsuario', () => {    
    it.each([
        [ "user1", "ssdfa", {esValida: true} ],
        [ "pacman", "pacman", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ],
        [ "tales", "mileto", {esValida: true }],
        [ "mia", "123mia", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (nombreUsuario: string, clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tienePalabrasComunes', () => {    
    it.each([
        [ "password", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "20", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "kingslayer", {esValida: true} ],
        [ "qwerty", {esValida: false, error: "La clave no debe tener palabras comunes."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tienePalabrasComunes(clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});