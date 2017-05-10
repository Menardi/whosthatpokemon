# Who's That Pokémon?

A browser-based game in which Pokémon silhouettes are shown to the user and they guess which Pokémon it is.

## Live Demo
See http://gearoid.me/pokemon/ for a live demo.

## Features

* Silhouettes are generated dynamically in-browser using the canvas tag
* Multiple difficulty settings, which choose the image source for generating the silhouette
* User-facing stats including correct streaks and times taken
* Back-end stat tracking including Pokémon guessed and time taken

## Setup

The Pokémon images and sounds you need are not included in this repository. You can download them from http://gearoid.me/pokemon/downloads/pokemedia.zip. Unzip this and put _images/_ and _sounds/_ in the same directory as _index.html_.

Once these are in place, open _index.html_ in your browser. Alternatively, run `npm run serve` in the root folder after doing `npm install` to host the site on a local server.

### Stat Tracking
To track statistics on the backend, you will need to set up a Mongo database and run a nodejs service on your server.

1. Run `sudo apt-get install mongodb && sudo service mongodb start`. Alternatively, follow the [official instructions](https://docs.mongodb.com/manual/administration/install-on-linux/) to get the latest version.
2. Run `npm install --only=production` inside the directory
3. You can run the node server by going to the statServer directory and typing `nodejs server.js`
4. To set up the statServer as a daemon, you can use the very cool ["PM2"](https://github.com/Unitech/pm2). Once installed, simply run `pm2 start server.js` to get the process going.
5. Point STATS_URL in `pokemon.js` to the url the script is listening on.

You do not need to set this up for the rest of the game to work, but you will get console errors every 5 guesses. Comment out the two `trackCurrentPokemon()` calls in _pokemon.js_ to stop the XHR happening.

#### Pitfall
If you're using nodejs you might get the following error when trying to run pm2: `/usr/bin/env: node: No such file or directory`. Run `sudo ln -s /usr/bin/nodejs /usr/local/bin/node` to fix this.

## Licence
This code is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).

All the Pokémon names, images and sounds are copyrighted by Nintendo.

Flag icons are from http://www.famfamfam.com/lab/icons/flags/
