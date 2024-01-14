export const tieneMayusculasYMinusculas = (clave: string): boolean => {
  return !esMayuscula(clave) && !esMinuscula(clave);
};

export const tieneNumeros = (clave: string): boolean => {
  return /\d/.test(clave);
};

export const tieneCaracteresEspeciales = (clave: string): boolean => {
  return /[@#+_&~$]/.test(clave);
};

export const tieneLongitudMinima = (clave: string): boolean => {
  return clave.length >= 8;
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): boolean => {
  return clave.toLowerCase().includes(nombreUsuario.toLowerCase());
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): boolean => {
  return commonPasswords.some((password) =>
    clave.toLowerCase().includes(password.toLowerCase())
  );
};

export const esMayuscula = (cadena: string): boolean => {
  return cadena === cadena.toUpperCase();
};

export const esMinuscula = (cadena: string): boolean => {
  return cadena === cadena.toLowerCase();
};
