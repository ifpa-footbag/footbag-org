import"./efbcd7b9.js";import"./1e755928.js";import"./c5d84658.js";import{n as e}from"./9f63b991.js";

class t extends HTMLElement{static get observedAttributes(){return["location"]}

connectedCallback(){const t=`\n      <navigation-bar back></navigation-bar>\n        \n      <page-one-column>\n        <header class="header">\n          <h2>News</h2>\n        </header>\n        ${e}\n      </page-one-column>\n    `;this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`\n    <style>\n      \n      \n    \n    </style>\n    ${t}\n    `,setTimeout(()=>{this._hideNews()},50)}

attributeChangedCallback(e,t,n){console.log(e,t,n)}

_hideNews(){this.shadowRoot.querySelector("page-one-column").querySelectorAll("news-item").forEach(e=>{e.getAttribute("header")===this.location.params.news||this.location.params.news==="all"?e.setAttribute("open",!0):e.style.display="none"})}}customElements.define("news-page",t);
