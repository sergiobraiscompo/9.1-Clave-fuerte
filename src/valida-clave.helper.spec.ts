import { commonPasswords } from "./constantes";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./valida-clave-helper";

describe('tieneMayusculasYMinusculas', () => {    
    it.each([
        [ "password", { esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas." } ],
        [ "PASSWORD", { esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas." } ],
        [ "p4ssw0r_d", { esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas." } ],
        [ "P4SSW0R_D", { esValida: false, error: "La clave tiene que contener mayúsculas y minúsculas." } ],
        [ "P4ssw0r_d", { esValida: true } ],
        [ "p4ssw0r_D", { esValida: true } ]
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
        [ "{u@r[ntaysi[t[", {esValida: false, error: "La clave tiene que contener números."} ],
        [ "Xw5yu", {esValida: true} ],
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
        [ "amdjknhbfDDG", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
        [ "168156189617", {esValida: false, error: "La clave ha de contener símbolos especiales."} ],
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
        [ "tales", "mileto", {esValida: true }],
        [ "mia", "123mia", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ],
        [ "pacman", "pacman", {esValida: false, error: "La clave no debe contener el nombre del usuario."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (nombreUsuario: string, clave: string, resultadoEsperado) => {
        // Act
        const resultado = tieneNombreUsuario(nombreUsuario, clave);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});

describe('tienePalabrasComunes', () => {    
    it.each([
        [ "kingslayer", {esValida: true} ],
        [ "sunshine", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "password", {esValida: false, error: "La clave no debe tener palabras comunes."} ],
        [ "qwerty", {esValida: false, error: "La clave no debe tener palabras comunes."} ]
    ]) ("Si la contraseña es %s, el programa debería de devolver %s", (clave: string, resultadoEsperado) => {
        // Act
        const resultado = tienePalabrasComunes(clave, commonPasswords);
        
        // Assert
        expect(resultado).toEqual(resultadoEsperado);
    })
});