# Ecotricity Cocktail Code Challenge

## Process and Resources

I started the process by outlining an acceptance test, this allowed me to see the overall steps that would need to be taken in order to return the desired JSON. This would also lead me through the development, as the errors would show me what wasn't built or functioning.

While going through the failing elements of the acceptance test, if there is behaviour in the functions required in the implementation, I write a unit test to ensure that it is returning what I'm expecting. This also useful for testing edge cases.

I decided to implement a Domain Driven Design for this project, in this case, I separated the functionalities into different packages in order to make aspects of the system reusable and not tightly coupled. I've also used an interface for the repository and injected this into the CocktailQuery class. This easily allows for a different repository to be used but with a blueprint of the required functions of the CocktailQuery class and expected return type.

I believe organising the files in this manner makes it easier to navigate and separates the classes in line with the Single Responsibility Principle (SRP). In addition, there is less possibility of scoping issues as if the file is not imported, it does not have access to the variables available in that file.

Resources used for this coding challenge were:

- Jest documentation
- TypeScript Handbook
- Stackoverflow
- ChatGPT

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
