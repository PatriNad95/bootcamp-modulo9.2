import { validarClave } from "./main";
import { ErroresValidacion } from "./modelo";

describe("motor specs", () => {
  describe("validarClave", () => {
    const commonPasswords = ["password123", "admin123", "qwerty"];

    it("debería retornar objeto de validación correcto para una clave válida", () => {
      const resultado = validarClave("usuario", "Clave123#", commonPasswords);
      expect(resultado).toEqual({ esValida: true });
    });

    it("debería retornar error si no tiene mayúsculas y minúsculas", () => {
      const resultado = validarClave("usuario", "clave123!", commonPasswords);
      expect(resultado).toEqual({
        esValida: false,
        error: ErroresValidacion.NO_MAYUS_MINUS,
      });
    });

    it("debería retornar error si no tiene números", () => {
      const resultado = validarClave(
        "usuario",
        "ClaveSinNumeros!",
        commonPasswords
      );
      expect(resultado).toEqual({
        esValida: false,
        error: ErroresValidacion.NO_NUMBERS,
      });
    });

    it("debería retornar error si no tiene caracteres especiales", () => {
      const resultado = validarClave(
        "usuario",
        "ClaveSinEspeciales123",
        commonPasswords
      );
      expect(resultado).toEqual({
        esValida: false,
        error: ErroresValidacion.NO_SPECIAL_CHAR,
      });
    });

    it("debería retornar error si la clave contiene el nombre de usuario", () => {
      const resultado = validarClave(
        "usuario123",
        "usuario123Clave#",
        commonPasswords
      );
      expect(resultado).toEqual({
        esValida: false,
        error: ErroresValidacion.USER_NAME,
      });
    });

    it("debería retornar error si la clave es una contraseña común", () => {
      const resultado = validarClave(
        "usuario",
        "Password123#",
        commonPasswords
      );
      expect(resultado).toEqual({
        esValida: false,
        error: ErroresValidacion.COMMON_PASS,
      });
    });
  });
});
