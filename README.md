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
