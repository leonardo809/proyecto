
customElements.define("herramientas-abc", class extends HTMLElement {

  connectedCallback() {
    this.innerHTML =  
      `<button id="agregar" type="button" class="btn btn-success" onclick="agrega()">
        Limpiar
      </button>
      <button class="btn btn-info" type="submit">Guardar</button>
      <button  class="btn btn-danger" id="eliminar" type="button" onclick="elimina()">
        Eliminar
      </button>`;
  }
});