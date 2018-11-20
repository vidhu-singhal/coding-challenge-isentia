# coding-challenge-isentia

This is codebase for Isentia Code Challenge (https://github.com/Isentia/Coding-Challenge/blob/master/Software-Engineer-Full-Stack-JavaScript-Coding-Challenge.md)

# Features

  - Filter already loaded feed based on tags (auto-completion support)
  - Multi-Select (with search) is provided to allow searching multiple tags at once
  - Support for Flickr's tagmode (ANY/ALL)
  - Grid / List Layout
  - Pagination
  - Settings Page (Alt + S) to showcase more features like various ways (clickable mat-chips in fieldset/sidebar, multi-select) to choose tags for filtering/live search
  - Click Any to filter all items matching any tag. Click again to switch to All mode to filter items matching all tags
  - Angular Stagger Animations (on Item Tags Fieldset – Need to enable from Settings)
  - Click on chips in Tags Fieldset / Tags Sidebar / Tags below images to add to / remove from search
  - Multiple ways to see all unique tags (Multi-select, Fieldset, Sidebar - Fieldset, Sidebar needs to be enabled from Settings)
  - Live Search Mode (Option needs to be enabled from Settings Page)

# Features Walkthrough
https://drive.google.com/open?id=1xcSZTqLB-5bhgXH4tJZ7zv2Qd2sZM1th

# Development / Running Locally

Install latest version of node.js for your platform and run following commands from your favorite Terminal.

First Tab (Run Backend Server):
```sh
$ cd server/node
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

 - Add more Component Unit Test Cases (Services test cases done)
 - Apply retry logic based on https://angular.io/guide/practical-observable-usage#exponential-backoff
 - Fix Parameter Encoding (for example, right now Chinese character based tags won't work)
 - jsonFlickrFeed (function wrapper around data) from Flickr removed in a hacky way - need to improvise on that
 - There is scope for optimizations and code refactoring
 - Common array/string operations can be done using lodash
 - PublicFeedComponent and Service can be refactored out in a feature module and lazily loaded using loadChildren - currently not done being the only module
