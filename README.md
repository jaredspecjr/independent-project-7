# IndependentProjectSeven

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



##Specs
For this project I'm choosing to rebuild(or get close to it) NYTimes https://www.nytimes.com/
| Specification | Input | Output |
| Page should display a list of news stories with a title, author name, and 1 or 2 bullet points of information  |  on page load | list of stories in a styled organized fashion |
| user should be able to click on a title to get more information | clicks on title | page displays full story |
| user should be able to make a comment and save it to the current story | user enter comment into text field | comment appends in comment section |
| page should have a nav bar that shows categories | click Politics | page displays news stories only about politics |

Other Features that I may not be able to implement just yet
| page should have a search bar | Rick and Morty | news stories about fans wanting Szechuan sauce |
| page should have images | on page load | displayed images |

##Notes--Thoughts-Questions
thoughts on how to push new comments to comment section. maybe root component needs an empty array added to the master list?. how exactly do i set up a another button to use my current selected news story without clashing with the first button?  

how do I set up the categories correctly? maybe I need a function that checks what number my current story category is and then have a function that when i click on a button or text it runs that check and pushes it to a new array.
