# Your Adidas Team App

This app is build with Stencil https://stenciljs.com/docs/introduction, a compiler for building fast web apps using Web Components.

## Getting Started

To start the project:

install it:

```bash
npm i
```

build the app for production, run:

```bash
npm run build
```

and run:

```bash
npm start
```

To run the unit tests once, run:

```
npm test
```

## About this app

- Many warning in the console are due to a stencil-router issue: [https://github.com/ionic-team/stencil-router/issues/124](https://github.com/ionic-team/stencil-router/issues/124)

- Api used: [https://www.football-data.org/](https://www.football-data.org/)

- Bulma is used as a css framework: [https://bulma.io/](https://bulma.io/)

## TODO

- Unit Tests => improve coverage and find a way to configure Jest to includes all files in coverage
- Manage better Responsive
- Add Icons
- Disable the adding button if a team player is already in my team
- Add players in tabs depending on the position of the player
- be able to drag and drop the player from a team to the other
