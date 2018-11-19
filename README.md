# coding-challenge-isentia

This is sample code base for Isentia Code Challenge ()

# Features

  - Auto-completion of tags for loaded feed (for filtering feed)
  - Live tag searching (Option needs to be enabled from Settings Page)
  - Support for Flickr's tagmode (ANY/ALL)
  - Grid / List Layout
  - Pagination
  - Settings Page (Alt + S) to showcase more features like various ways (clickable mat-chips in fieldset/sidebar, multi-select) to choose tags for filtering/live search


# Development / Running Locally

Install latest version of node.js for your platform and run following commands from your favorite Terminal.

First Tab (Run Backend Server):
```sh
$ cd server
$ npm install
$ node app.js
```

Second Tab:
```sh
$ npm install
$ ng serve --port 4200 --open
```

#### Building for source
For production release:
```sh
$ ng build --prod
```


# Todos

 - Write Tests
 - Apply retry logic based on https://angular.io/guide/practical-observable-usage#exponential-backoff
 - Fix Parameter Encoding (Right now Chinese character based tags won't work)
 - jsonFlickrFeed from Flickr removed in a hacky way need to improvise on that
 - Visit component to set correct visibility to method (public/protected/default/private)
 - There is scope for optimizations and code refactoring
 - Common array/string operation can be done using lodash
 - PublicFeedComponent and Service can be refactored out in a feature module and lazily loaded using loadChildren - currently not done being the only module
 - There is scope for better error handling
