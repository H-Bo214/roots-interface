
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<img src="https://github.com/roots-capstone/roots-interface/blob/main/src/assets/roots-title-logo.jpg?raw=true" alt="Logo for Roots" width="250px" height="250px">

## Table of Contents

- [Overview](#overview)
- [How to use](#how-to-use)
- [Project story](#project-story)
- [Installation](#installation)
- [Functionality](#functionality)
- [Contributing](#contributing)
- [Acknowledgements and Resources](#acknowledgements-and-resources)

<!-- Brief Description -->

## Overview

Roots is a site that allows for a user to keep family cookbooks in a digital format, adding recipes to multiple books and being able to view and navigate the books and recipes through a pleasant UI/UX. 

The site was created for a school project that had the designers design an MVP with a Backend and Frontend team. They had to manage expectation versus time constraints and communicate the needs between both teams as new frameworks and libraries were used for learning purposes.

## How to use

* On load the application will act as a user has already logged in. The project restricted the addition of authentication to focus on the user story and experience. The landing page will have simple navigation showing all of the users owned cookbooks gathered from their data. There is also a location for the user to add new cookbooks to their collection. 
* Selecting a cookbook will navigate you to a page where you can view the recipes associated to that cookbook as well as the title and owner. This page will act as navigation to each of the recipes and a page where they can add new recipes. In the future we will add an area for a user to add family members that they want to associate with the book. This could be expanded further after authentication to allow the added family members to have their own accounts and the ability to edit the cookbook.
* Selecting a recipe from the cookbook will take the user to a simple page that displays the information from the recipe including author, description, ingredients and instructions.
* From the cookbook selecting the add recipe will take the user to a page form that allows the user to input a new recipe by filling out fields for the details.

## Built With

- React 16
- CSS
- Apollo client
- GraphQl
- Heroku
- Travis CI

## Project Story

The full project can be found [Here](https://github.com/roots-capstone) and its [combined project board](https://github.com/orgs/roots-capstone/projects/1) where the status of future and completed features is tracked.   
Collaboration with the BE lead us to create a [GIST](https://gist.github.com/neeruram1/f02a12c6da50da3520f797a72ec53f14) to keep a current vision of the data flow, mutations, and queries.
Wire frames and component structure are located [here](https://miro.com/app/board/o9J_khtAok8=/)


### Wins
The Styling of many of the components evolved as we met and presented with the BE group to become a pleasant UX. We successfully met our MVP while learning brand new technologies. Successfully collaborated with a great team of Back-end engineers to build an application from the ground up.

### Struggles
Learning GraphQL and Apollo lead us to spend a fair amount of time researching all of its features. The cache proved challenging to understand in its early stages. Getting our quires and mutations to function properly took some effort to accomplish. This was mostly due to the unfamiliar syntax requirements of Apollo and GraphQl as well as learning a new unfamiliar technology. Additional challenges included asynchronous testing and automated heroku deployment.

## Installation

**Fork this repository:**

https://github.com/roots-capstone/roots-interface/

**Clone your forked repository**

`git clone` and the copied URL

**Change into the directory and install the project dependencies**

`cd` into directory and run `npm install` for dependencies

### How to see the product

In terminal, go to the project directory and run 'npm start' to open the project in the browser.
You can also see the product online here. [Deployed](https://roots-interface.herokuapp.com/)

## Functionality

### Landing Page, Adding a new Book, Navigating to a Book

![Adding a new book](https://media.giphy.com/media/4iUYyLYAs2jtnEatlU/giphy.gif)</br>
![Navigating to newly created book](https://media.giphy.com/media/fLkADmh4izAR3r0nYe/giphy.gif)</br>


### Recipe Book, Navigating to a Recipe, Navigating to the add form
![Navigating to an existing recipe](https://media.giphy.com/media/cB7LG5VgPhuV9KBI4H/giphy.gif)</br>
![Adding a new Recipe 1](https://media.giphy.com/media/nR037eveJxYjip2Edj/giphy.gif)
### Single Recipe

![Recipe page](![single-recipe-page](https://user-images.githubusercontent.com/50157153/98288706-7c727a80-1f64-11eb-89e3-675ea3d72dd8.png)
)

### Adding a Recipe, Dynamically expanding Ingredients


![Adding a new Recipe 2](https://media.giphy.com/media/VgAZqoMRB9wD87ohdF/giphy.gif)</br>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

See the [open issues](https://github.com/roots-capstone/roots-interface/issues) for a list of proposed features (and known issues).

- Fork the Project

- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

- Push to the Branch (`git push origin feature/AmazingFeature`)

- Open a Pull Request

## Authors

### Front End
👤 **Tyler Haglund**

- Github: [relyt4me](https://github.com/relyt4me)
- LinkedIn: [Tyler He/Him](https://www.linkedin.com/in/tyler-haglund/)

👤 **Horacio Borrego**

- Github: [H-Bo214](https://github.com/H-Bo214)
- LinkedIn: [Horacio He/Him](https://www.linkedin.com/in/horacio-borrego-4a52851b0/)


## Acknowledgements and Resources

### Back End Team
👤 **Neeru Ram**

- Github: [neeruram1](https://github.com/neeruram1)
- LinkedIn: [Neeru She/Her](https://www.linkedin.com/in/neeru-ram-81a2b867/)

👤 **Ryan Laleh**

- Github: [RyN21](https://github.com/RyN21)
- LinkedIn: [Ryan He/Him](https://www.linkedin.com/in/ryan-laleh-0a81511a7/)

👤 **Jessye Ejdelman**

- Github: [ejdelsztejn](https://github.com/ejdelsztejn)
- LinkedIn: [Jessye](https://www.linkedin.com/in/jessye-ejdelman/)

👤 **Michael Alex Lynch**

- Github: [mlynch5187](https://github.com/mlynch5187)
- LinkedIn: [Michael He/Him](https://www.linkedin.com/in/michaelalexlynch/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Original Project Link](https://mod4.turing.io/projects/capstone.html)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/roots-capstone/roots-interface.svg?style=flat-square
[contributors-url]: https://github.com/roots-capstone/roots-interface/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/roots-capstone/roots-interface.svg?style=flat-square
[forks-url]: https://github.com/roots-capstone/roots-interface/network/members
[stars-shield]: https://img.shields.io/github/stars/roots-capstone/roots-interface.svg?style=flat-square
[stars-url]: https://github.com/roots-capstone/roots-interface/stargazers
[issues-shield]: https://img.shields.io/github/issues/roots-capstone/roots-interface.svg?style=flat-square
[issues-url]: https://github.com/roots-capstone/roots-interface/issues

