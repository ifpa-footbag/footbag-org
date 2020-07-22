class PageFooter extends HTMLElement {
  _render() {
    const style = `
      footer {
        background: var(--color-blue);
        color: var(--color-white);
       
      }

      @media only screen and (min-width: 692px) {
        footer{
          display: flex;
        }
      }

      section {
        margin: var(--space-l);
        padding: var(--space-l)
      }
      `;

    const html = `
    <footer>
      <section>
        <h3>Feedback</h3>
        <p>feedback@footbag.org</p>
      </section>
      <section>
        <h3>Contact Us</h3>
        <p>Organizing event? events@footbag.org</p>
        <p>Any other matters? other@footbag.org</p>  
      </section>
  
      <section>
        <h3>Discuss online</h3>
        <p>Facebook</p>
        <p>Instagram</p>  
      </section>
      </footer>
    `;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}`;
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }
}

customElements.define('page-footer', PageFooter);
