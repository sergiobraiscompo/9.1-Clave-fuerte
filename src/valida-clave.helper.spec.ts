import { commonPasswords } from "./constantes";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave-helper";

describe('tieneMayusculasYMinusculas', () => {    
    it.each([
        [ "2", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "20", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "1", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ],
        [ "5", {esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneMayusculasYMinusculas(clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tieneNumeros', () => {    
    it.each([
        [ "2", {esValida: false, error: "La clave tiene que contener números."} ],
        [ "20", {esValida: false, error: "La clave tiene que contener números."} ],
        [ "1", {esValida: false, error: "La clave tiene que contener números."} ],
        [ "5", {esValida: false, error: "La clave tiene que contener números."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneNumeros(clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tieneCaracteresEspeciales', () => {    
    it.each([
        [ "2", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
        [ "20", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
        [ "1", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
        [ "5", {esValida: false, error: "La clave ha de contener símbolos especiales."} ]
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
        [ "1", {esValida: false, error: "La clave ha de tener una longitud mínima de 8 carácteres."} ],
        [ "5", {esValida: false, error: "La clave ha de tener una longitud mínima de 8 carácteres."} ]
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
        [ "tales", "sadf", {esValida: true }],
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
        [ "2", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "20", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "1", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "5", {esValida: false, error: "La clave no debe tener palabras comunes."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tienePalabrasComunes(clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});