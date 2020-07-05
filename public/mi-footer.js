// Declara los estilos de la etiqueta mi-footer.
document.head.innerHTML += /* html */
  `<style>
    mi-footer {display: block; background-color: cyan}
  </style>`;
/* Declara la etiqueta "mi-footer" que se usa en "index.html" y "usuarios.html".
 * Es el footer de todas las páginas del sitio. */
customElements.define("mi-footer", class extends HTMLElement {
  /** Se invoca al agregar este element a la página. */
  connectedCallback() {
    this.textContent = "Copyright © 2020 Leonardo Calvillo Tapia.";
  }
});