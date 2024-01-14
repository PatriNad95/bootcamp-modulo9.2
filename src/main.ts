import { commonPasswords } from "./modelo";
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
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }

  if (!tieneNumeros(clave)) {
    return { esValida: false, error: "La clave debe de tener números" };
  }

  if (!tieneCaracteresEspeciales(clave)) {
    return {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
  }

  if (!tieneLongitudMinima(clave)) {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }

  if (tieneNombreUsuario(nombreUsuario, clave)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }

  if (tienePalabrasComunes(clave, commonPasswords)) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  }

  return { esValida: true };
};

const nombreUsuario = "YOsoyElUser45";
const clave = "La$cASAf23EA";

const resultadoValidacion = validarClave(nombreUsuario, clave, commonPasswords);
console.log(resultadoValidacion);
