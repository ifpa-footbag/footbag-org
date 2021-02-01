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
  - Components use LitElement (https://lit-element.polymer-project.org/) library internally
- Vaadin router (https://vaadin.com/router) is used

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
