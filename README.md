![CI](https://github.com/ifpa-footbag/footbag-org/workflows/CI/badge.svg)

# https://ifpa-footbag.github.io/footbag-org/

## Start development

Requirements: git, node.js and npm (or yarn)

- clone this repository
- install dependencies, e.g.

```
   npm install
```

- run

```
   npm start
```

## Development

Before pushing the changes, run `npm run format` to run linting (eslint) and code formatting (prettier). That is also enforced by Husky, which does not allow push when there are lint/style errors.

## Publishing

Latest code from master branch is deployed automatically to the production (https://ifpa-footbag.github.io/footbag-org/).

Github pages is used for hosting. It serves the content of `docs` directory. Docs directory is build by Github actions based pipeline.

## Technology

- Open-wc (https://open-wc.org/) configurations are used for serving, packaging and testing application
- Common UI components are build with Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Vaadin router (https://vaadin.com/router) is used

### Web Components

Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components) is a suite of technologies providing a similar component model as in React, Vue etc. Components are called custom elements. To have a minimal example, let's say that there are news-page.js (parent) and news-item.js (child) files.

```
news-item.js:

class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  _render() {
    const styles = `article { color: red }`;
    const html = `
       <article>
         Add some content here
       </article>
    `;

    this.shadowRoot.innerHTML = `
       <style>${styles}</style>
       ${html}
    `;
  }
}

customElements.define('news-item', NewsItem);
```

Notice how shadowDOM is attached to the element and HTML and CSS appended to the shadowDOM. That way, HTML and CSS are encapsulated inside shadowDOM and not leaking outside. They can be referred using "this.shadowRoot", e.g. this.shadowRoot.querySelector('article').

customElement.define registers the element in the DOM and it can then be used like native HTML elements:

```
news-page.js
class NewsPage extends HTMLElement {
  ...
  _render() {
    ...
   <news-it</news-item>
    ...
  }
}
```

#### Lifecycle callbacks

Main lifecycle callbacks for custom elements are constructor, connectedCallback, observedAttributes and attributeChangedCallback. Constructor is the place to attach shadowRoot, define event listeners and init values.

```
constructor() {
   super();
   this.attachShadow({ mode: 'open' });

   this._count = 0;
   this.shadowRoot.addEventListener('my-event', (event) => this.myFunctionToBeCalled(event));
}
```

ConnectedCallback is called when the element is added into the DOM. E.g. rendering and fetching resources are typically done in this function

```
connectedCallback(){
   this._render();
   fetch('http://example.com/resource')
}
```

ObservedAttributes defines which attributes are observed - or which attributes trigger attributeChangedCallback()

```
static get observedAttributes() { return ['header']; }
```

When attribute is defined to be observed, then its change triggers attributeChangedCallback() function. Typically you want to re-render HTML, orfetch some data

```
attributeChangedCallback(name, oldValue, newValue) {
  console.log('One of the attributes changed');
  this._render();
}
```

#### Inter-component communication

For inter-component communication, news-page component can pass in attributes (or properties) and listen CustomEvents raised by
news-item

```
News-page.js

Attribute (String only):
<news-item header="Breaking news"></news-item>

Property (Any type):
this.shadowRoot.querySelector(news-item).header = "Breaking news"

listening event:
this.shadowRoot.addEventListener('my-event', (event) => this.myFunctionToBeCalled(event));

News-item.js

Raising event:
const event = new CustomEvent('my-event', { detail: 'any data here' });
```

More information about Web components:
https://developers.google.com/web/fundamentals/web-components/customelements
https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

## Component Structure

```
index.html (includes HTML <head>)
    footbag-app (includes router, which takes care of switching pages)
        main-page
          navigation-bar
          hero-video
          card-element (news, 2 columns)
              news.js
                  news-item
                  news-item
              ...

          card-element (events, 1 column)
              event-item
              event-item
              ...
        getting-started-page
          navigation-bar
          page-one-column
            news-item
            ...

        footbag-page
          page-one-column
        event-page
          page-one-column
        news-page
          page-one-column
```
