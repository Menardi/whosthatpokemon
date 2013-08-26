#Who's That Pokémon?

A browser-based game in which Pokémon silhouettes are shown to the user and they guess which Pokémon it is. 

##Live Demo
See http://gearoid.me/pokemon/ for a live demo.

##Features

* Silhouettes are generated dynamically in-browser using the canvas tag
* Multiple difficulty settings, which choose the image source for generating the silhouette
* User-facing stats including correct streaks and times taken
* Back-end stat tracking including Pokémon guessed and time taken

##Setup

The Pokémon images and sounds you need are not included in this repository. You can download them from http://gearoid.me/pokemon/downloads/pokemedia.zip. Unzip this and put _images/_ and _sounds/_ in the same directory as _index.html_.

Once these are in place, open _index.html_ in your browser.

###Stat Tracking
To track statistics on the backend, you will need to set up a MySQL database and put the login details into _jsonstats.php_. Use the following SQL query to set up the stats table.

```mysql
create table stats (
    id int auto_increment primary key,
    pokemonId smallint unsigned,
    correct tinyint unsigned,
    difficulty tinyint unsigned,
    generation tinyint unsigned,
    guessTime decimal(7,3),
    hintsused tinyint unsigned,
    time timestamp,
    userId varchar(16),
    otherData varchar(256)
);
```

You do not need to set this up for the rest of the game to work.

## Licence
This code is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported Licence]("http://creativecommons.org/licenses/by-nc-sa/3.0/").

All the Pokémon names, images and sounds are copyrighted by Nintendo.

Flag icons are from http://www.famfamfam.com/lab/icons/flags/
