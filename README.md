# footbag.org

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

Github pages is used for hosting. It serves the content of `docs` directory and that is why that folder is pushed to Github. `npm run build` builds the app into the docs folder.

## Technology

- Open-wc (https://open-wc.org/) configurations are used for serving, packaging and testing application
- Common UI components are build with Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Vaadin router (https://vaadin.com/router) is used

### Web Components

Web Components (https://developer.mozilla.org/en-US/docs/Web/Web_Components) is a suite of technologies providing a similar component model as in React, Vue etc. Components are called custom elements. Minimal custom element can look like this:

```
class NewsItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._render();
  }
  
  _render() {
    const html = `
       <article> 
         Add some content here
       </article>
    `;

    this.shadowRoot.innerHTML = `
       ${html}
    `;
  }
}

customElements.define('news-item', NewsItem);
```
Notice how element is wrapped inside shadowDOM. Once doing it, elements are referred by "this.shadowRoot", e.g. this.shadowRoot.querySelector('article');

customElement.define registers the element in the DOM and it can be then used like this

```
<news-item></news-item>
```

For inter-component communication, pass in attributes (or properties) and raise and listen CustomEvents

```
Attribute:
<news-item header="Breaking news"></news-item>

Property:
this.shadowRoot.querySelector(news-item).header = "Breaking news"

Raising event:
const event = new CustomEvent('my-event', { detail: 'any data here' });

listening event: 
this.shadowRoot.addEventListener('my-event', (event) => this.myFunctionToBeCalled(event));

```

## Component Structure

```
index.html (includes HTML <head>)
    footbag-app (includes router, which takes care of switching pages)
        main-page
            navigation-bar
            hero-video
            grid-template columns="2" header="News"
                news.js
                    news-item
                    news-item
                ...

            grid-template columns="1" header="Events"
                event-item
                event-item
                ...
        footbag-page
            grid-template columns="2" header="Footbag Sports"
                    navigation-bar

        event-page
            grid-template columns="1" header="event name"
                event-item
        news-page
            grid-template columns="1" header="news name"
                news-page

```
