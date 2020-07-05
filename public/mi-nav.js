// Declara los estilos de la etiqueta mi-nav.
document.head.innerHTML += /* html */
  `<style>
    mi-nav {display: block}
  </style>`;
/* Declara la etiqueta "mi-nav" que se usa en "index.html" y "usuarios.html".
 * Es la barra de navegación de todas las páginas del sitio. */
customElements.define("mi-nav", class extends HTMLElement {
  /** Se invoca al agregar este element a la página. */
  connectedCallback() {
    this.innerHTML =  /*html*/
      `<a class="btn btn-link" href="index.html">Pasatiempos</a>
      <a class="btn btn-link" href="usuarios.html">Usuarios</a>`;
  }
});