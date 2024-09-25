# SpaceTraders

A simple web application using the spacetraders.io api into a basic, interactable UI.
A new user can be registered, the information of the user (the agent) can be seen, and then the starting location can be viewed along with some extra information about the contract given at the start of the game.
The application was completely test driven with vitest.
Hope to speak more about this as it was quite enjoyable to go through! Thanks very much!

![Screenshot](src/assets/spacetraders.png?raw=true "viewlocation page")

## Known Issues

- Navbar doesn't persist to viewlocation on first render. renders when navigating back to the page
- Tests will work with one api key given the uniqueness of each request. API key will have been shared, but tests should be changed later on to handle this

## Table of Contents

- [SpaceTraders](#spacetraders)
  - [Known Issues](#known-issues)
  - [Table of Contents](#table-of-contents)
  - [Installation and Usage](#installation-and-usage)
  - [Tests](#tests)
  - [Design Choices and Future Thoughts](#design-choices-and-future-thoughts)

## Installation and Usage

Make sure that the following are installed for this project:

- **Node.js and npm**
- Visit the official Node.js website (<https://nodejs.org>) and download the latest LTS (Long Term Support) version for your operating system.
- Once downloaded, run the installer and follow the on-screen instructions to complete the installation.
- After installation, you can verify that Node.js and npm are installed by running `node -v` and `npm -v` in your terminal or command prompt.

- clone this repository <https://github.com/pirateking92/spaceTraders.git>

- run `npm ci` to install dependencies from package.json
- `npm run dev` and navigate to <http://localhost:5173/> in your preferred browser

## Tests

In order for tests to be successful, a token will need to be added to a .env file in this format:

`VITE_TOKEN="YOUR_TOKEN_HERE"`

(This has been shared)

from the main `stqs-main` folder, and then run

`npm test`

- to run vitest and the tests

## Design Choices and Future Thoughts

Learning from some previous mistakes on personal projects, I took time at the beginning to properly look through the examples on the SpaceTraders website, play the game, read through the starter code, and plan out tests.

I made the choice to test drive the application, as previous experience from Makers and from a successful project showed that proper planning was done for features, edge cases are thought of, and generally creates a satisfying process.

As per the instructions, I worked through as much of the quickstart as time allowed, with a focus on creating a robust vertical slice application, that is tested, intuitive to navigate through, and easy on api calls. This resulted in reaching the end of the new game quickstart only, but has also meant that the features added have been tested and I'm confident that it is more robust than without.

I've made the tests with one api key in mind, and so in future refactoring, would like to think how to make it so it can work with multiple.

I used TailwindCSS for styling as I have found this easy to learn, read and implement across a number of projects. If I had more time, I would have liked to do more styling, though having the application work feels to be the most important, rather than its aesthetics at the beginning.

I would have also liked to add some testing with an automation tool such as Cypress, as I have played around with these before and would have liked to improve my skills with an automation tool, simulate a user interaction, and also because it was quite fun and satisfying to see the program go through a set of actions.

Thanks for taking the time to go through it! Hope to get to chat more about it.
