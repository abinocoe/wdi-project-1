#LIT UP

**First Independent Project for General Assembly WDI22(Hashtag)**

## Introduction
Lit Up is a single player game with a simple premise: Just turn off all the lights. Easy, right?

## How To Play
The game board is a grid of squares with some pre-picked boxes already alight. To switch a light on or off, you just need to click on your chosen square. This is where things get slighty more tricky: each time you click on a light, your click will also switch every square that touches your clicked square's sides.

Your moves are counted as you play, and once you complete a level, you are given the option to move up to the next level or replay your last one, maybe you could improve your score?

## Build
Lit Up was built using HTML, CSS and JQuery, from an Object Oriented approach. 
Google Webfonts Quicksand and Audiowide are featured.
The sound of Ajay making a pop noise with his mouth has been used to audibly notify player of a click.
A small amount of css animation was used on game setup.

## Features
**Seventeen Levels**

**Moves counter updates during game play**

**Level indicator same as above**

**Reset button to start level again should you get stuck**

**Modal gives the replay or next level options upon completion of a level**

## Challenges
The biggest challenges I faced making the game were bug based, and both kind of similar. I found that on completing the second level, the load of the next level was displayed incorrectly - more lights were lit than were supposed to be. After many console.logs I was able to identify that I was experiencing a problem with control flow, essentially the event listeners on my modal buttons were being added over again each time the modal was displayed, so after level two, if I clicked next level, the next level function was being run twice.

I made an attempt at animating the elements which although worked I was fairly displeased with.

## Wins
### The algorithm 
or if/else statement in the function (litUp.getIndex) that determines which lights are to be toggled was very satisfying to write, and gratifying in that it worked straight away.

### The modal
I'd never heard of these before beginning the project so was pleased I was able to implement this technology on my own.

### The light effect
looks so good