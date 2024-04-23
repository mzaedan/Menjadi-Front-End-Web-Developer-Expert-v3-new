class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>&copy; Copyright 2024 – <a href="/">Forklore Company</a></p>
    </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
