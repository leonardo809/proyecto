/** @module
 * Funciones que se usan en varios proyectos. */

/** Indica si un input type="file" tiene un archivo seleccionado.
 * @param {HTMLInputElement} file input que se analiza.
 * @returns {File} devuelve el archivo seleccionado; en otro caso, false. */
function fileSeleccionado(file) {
  return file.files && file.files[0];
}

/** Procesa un error. Muestra el objeto en la consola y un cuadro de
 * alerta con el mensaje.
 * @param {Error} e descripción del error. */
function procesaError(e) {
  console.log(e);
  alert(e.message);
}

/** Map que contiene el texto de escape de los caracteres especiales de
 * HTML.
 * @type {Readonly<Map<string, string>> } */
const codMap = Object.freeze(new Map([['&', '&amp;'], ['<', '&lt;'],
['>', '&gt;'], ['"', '&quot;'], ["'", '&#039;']]));

/** Codifica un texto para que escape los caracteres especiales y no se
 * pueda interpretar como HTML. Esta técnica evita la inyección de código.
 * @param {string} texto
 * @returns {string} un texto que no puede interpretarse como HTML. */
function cod(texto) {
  return (texto || "").replace(/[&<>"']/g, letra => codMap.get(letra));
}