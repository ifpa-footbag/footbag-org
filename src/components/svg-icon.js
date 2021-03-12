import { css, html, LitElement } from 'lit-element';

class SvgIcon extends LitElement {
  static get is() {
    return 'svg-icon';
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        height: 16px;
        width: 16px;

        vertical-align: middle;
      }

      :host([small]) {
        height: 12px;
        width: 12px;
      }

      :host([medium]) {
        height: 24px;
        width: 24px;
      }

      :host([large]) {
        height: 32px;
        width: 32px;
      }

      svg {
        display: block;
        pointer-events: none;
        height: 100%;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <use></use>
      </svg>
    `;
  }

  static get properties() {
    return {
      path: {
        type: String,
        reflect: true,
      },
      small: {
        type: Boolean,
        reflect: true,
      },
      large: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  updated() {
    this.shadowRoot
      .querySelector('use')
      .setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.path);
  }
}

window.customElements.define(SvgIcon.is, SvgIcon);
