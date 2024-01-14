import { commonPasswords } from "./modelo";
import {
  esMayuscula,
  esMinuscula,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./motor";

describe("motor specs", () => {
  describe("esMayuscula specs", () => {
    it("la cadena contiene mayusculas", () => {
      const cadena = "AAAAA";
      expect(esMayuscula(cadena)).toBeTruthy();
    });

    it("la cadena no contiene mayusculas", () => {
      const cadena = "aaaaa";
      expect(esMayuscula(cadena)).toBeFalsy();
    });
  });

  describe("esMinuscula specs", () => {
    it("la cadena contiene minusculas", () => {
      const cadena = "aaaaa";
      expect(esMinuscula(cadena)).toBeTruthy();
    });

    it("la cadena no contiene minusculas", () => {
      const cadena = "AAAAA";
      expect(esMinuscula(cadena)).toBeFalsy();
    });
  });

  describe("tieneMayusculasYMinusculas specs", () => {
    it("la cadena no contiene minusculas", () => {
      const cadena = "AAAAA";
      expect(tieneMayusculasYMinusculas(cadena)).toBeFalsy();
    });

    it("la cadena no contiene mayusculas", () => {
      const cadena = "aaaaa";
      expect(tieneMayusculasYMinusculas(cadena)).toBeFalsy();
    });

    it("la cadena contiene mayusculas y minusculas", () => {
      const cadena = "AAaaaaAAA";
      expect(tieneMayusculasYMinusculas(cadena)).toBeTruthy();
    });
  });

  describe("tieneNombreUsuario specs", () => {
    it("la cadena no contiene el nombre del usuario", () => {
      const nombre = "Usuario";
      const cadena = "clave23";
      expect(tieneNombreUsuario(nombre, cadena)).toBeFalsy();
    });

    it("la cadena contiene el nombre del usuario", () => {
      const nombre = "Usuario";
      const cadena = "Usuario23";
      expect(tieneNombreUsuario(nombre, cadena)).toBeTruthy();
    });
  });

  describe("tieneNumeros specs", () => {
    it("la cadena no contiene numeros", () => {
      const cadena = "clave";
      expect(tieneNumeros(cadena)).toBeFalsy();
    });

    it("la cadena contiene numeros", () => {
      const cadena = "Usuario23";
      expect(tieneNumeros(cadena)).toBeTruthy();
    });
  });

  describe("tieneCaracteresEspeciales specs", () => {
    it("la cadena no contiene caracteres especiales", () => {
      const cadena = "clave";
      expect(tieneCaracteresEspeciales(cadena)).toBeFalsy();
    });

    it("la cadena contiene caracteres especiales", () => {
      const cadena = "Usuario23$";
      expect(tieneCaracteresEspeciales(cadena)).toBeTruthy();
    });
  });

  describe("tieneLongitudMinima specs", () => {
    it("la cadena no tiene la longitud minima", () => {
      const cadena = "clave";
      expect(tieneLongitudMinima(cadena)).toBeFalsy();
    });

    it("la cadena tiene la longitud minima", () => {
      const cadena = "Usuario23$";
      expect(tieneLongitudMinima(cadena)).toBeTruthy();
    });
  });

  describe("tienePalabrasComunes specs", () => {
    it("la cadena no tiene palabras comunes", () => {
      const cadena = "clave875prof";
      expect(tienePalabrasComunes(cadena, commonPasswords)).toBeFalsy();
    });

    it("la cadena tiene palabras comunes", () => {
      const cadena = "letmein";
      expect(tienePalabrasComunes(cadena, commonPasswords)).toBeTruthy();
    });
  });
});
