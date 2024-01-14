import { ErroresValidacion, commonPasswords } from "./modelo";
import {
  tieneMayusculasYMinusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneNombreUsuario,
  tienePalabrasComunes,
} from "./motor";

interface ValidacionClave {
  esValida: boolean;
  error?: string;
}

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!tieneMayusculasYMinusculas(clave)) {
    return {
      esValida: false,
      error: ErroresValidacion.NO_MAYUS_MINUS,
    };
  }

  if (!tieneNumeros(clave)) {
    return { esValida: false, error: ErroresValidacion.NO_NUMBERS };
  }

  if (!tieneCaracteresEspeciales(clave)) {
    return {
      esValida: false,
      error: ErroresValidacion.NO_SPECIAL_CHAR,
    };
  }

  if (!tieneLongitudMinima(clave)) {
    return {
      esValida: false,
      error: ErroresValidacion.MIN_LENGTH,
    };
  }

  if (tieneNombreUsuario(nombreUsuario, clave)) {
    return {
      esValida: false,
      error: ErroresValidacion.USER_NAME,
    };
  }

  if (tienePalabrasComunes(clave, commonPasswords)) {
    return {
      esValida: false,
      error: ErroresValidacion.COMMON_PASS,
    };
  }

  return { esValida: true };
};

const nombreUsuario = "YOsoyElUser45";
const clave = "La$cASAf23EA";

const resultadoValidacion = validarClave(nombreUsuario, clave, commonPasswords);
console.log(resultadoValidacion);
