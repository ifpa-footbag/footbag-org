import"./efbcd7b9.js";import"./1e755928.js";import"./c5d84658.js";import{e}from"./4eb5afc9.js";

class n extends HTMLElement{connectedCallback(){const n=`\n  \n    <navigation-bar back></navigation-bar>\n   \n        <page-one-column>\n          <header class="header">\n            <h2>events</h2>\n          </header>\n          ${e}\n        </page-one-column>\n    \n    `;this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`\n    <style>\n      \n    \n    </style>\n    ${n}\n    `,setTimeout(()=>{this._hideEvents()},50)}

_render(){}

_hideEvents(){this.shadowRoot.querySelector("page-one-column").querySelectorAll("event-item").forEach(e=>{e.getAttribute("header")===this.location.params.event||this.location.params.event==="all"?e.setAttribute("open",!0):e.style.display="none"})}}customElements.define("events-page",n);
