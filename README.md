# Who's That Pokémon?

> See https://gearoid.me/pokemon/ for a live demo.

A browser-based game in which Pokémon silhouettes are shown to the user and they guess which Pokémon it is.

* Silhouettes are generated dynamically in-browser using the canvas tag
* Multiple difficulty settings, which choose the image source for generating the silhouette
* User-facing stats including correct streaks and times taken

## Development

You will need [node and npm](https://nodejs.org/en/) set up to get the code running locally. You will also need to download the Pokémon images and sounds, because they are not included in this repository. You can download them from https://gearoid.me/downloads/pokemedia.zip. Unzip this and put `images/` and `sounds/` in the `public` directory.

Once you have done this, install the dependencies by running:

```
npm install
```

To run the site locally, you can then run:

```
npm run serve
```

To build the site to be deployed online, run:

```
npm run build
```

## Testing

There is some basic testing set up using [Playwright](https://playwright.dev). It does a full playthrough of the game on default settings in Chrome, Firefox and Safari. To run these tests, run:

```
npm test
```

## Licence
This code is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).

All the Pokémon names, images and sounds are copyrighted by Nintendo.

Flag icons are from https://github.com/lipis/flag-icons
