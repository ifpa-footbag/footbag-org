# footbag.org

## Component Structure

```
index.html (include HTML <head> and page placeholder)
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
