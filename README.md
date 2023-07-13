# Ecotricity Cocktail Code Challenge

## Instructions

Using the free API at <https://www.thecocktaildb.com/api.php> to source your data, build functionality to retrieve a cocktail by name and return the results in json format, providing the following fields:

```
Id
Name
Category
Alcoholic
Glass
Instructions
Thumbnail
Ingredients (including name and measure for each ingredient)
Date Modified
```

## Typescript basic usage

### Node

You will need to install node to use this repository, I recommend using `nvm`, which can be installed
with `brew install nvm` (this starter assumes you're using node version 17).

### Package manager

In order to test and install dependencies you will need to have installed `npm` on your personal laptop.
Before starting run `npm install` to download the dependencies.

### Usage scripts

- `npm test`: this will run all your tests, if you want to have output for passing tests use `yarn test --verbose`.

- `npm lint`: this will run the linter in your whole project and let you know if you have compliance issues with the
  code standard.

- `npm add -D <dependency_name>`: this will let you install a development dependency at a project level, if you want
  production dependencies remove the `-D` flag.
