![logo-du-projet](https://raw.githubusercontent.com/CathelineOnceUponATime/CathelineGrappin_12_10032022/main/src/assets/logo.png)

# SportSee
> Projet 12 - Développez un tableau de bord d'analytics avec React

## Author 

- Catheline GRAPPIN

## Technologies


## Environments

https://github.com/CathelineOnceUponATime/P12-Back-End

## Resources provided

[![lien-maquette-Figma](https://raw.githubusercontent.com/CathelineOnceUponATime/CathelineGrappin_12_10032022/main/src/assets/maquette.png)](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)

[![lien-Kanban-SportSee](https://raw.githubusercontent.com/CathelineOnceUponATime/CathelineGrappin_12_10032022/main/src/assets/kanban.png)](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)

## Installation

### Prerequisites

- [![npm-v_7.24.1](https://img.shields.io/badge/npm-v_7.24.1-orange)](https://docs.npmjs.com/)
- [![NodeJs-v_16.10.0](https://img.shields.io/badge/NodeJs-v_16.10.0-red)](https://nodejs.org/en/docs/)

- VSCode

### Installing and launching Back-End

Clone the repository of SportSee Back-End:

`git clone https://github.com/CathelineOnceUponATime/P12-Back-End.git`

Inside this back-end repository, install dependencies:

`npm install`

Launch back-end on port 3000 (default port):

`npm run start`

#### Endpoints

##### Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

##### Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

### Installing and launching Front-end

Clone the repository of SportSee Front-End:

`git clone https://github.com/CathelineOnceUponATime/CathelineGrappin_12_10032022.git`

Inside this Front-End repository, install dependencies:

`npm install`

Lauch Front-End on port 3001:

`npm start`

Front-End is now rendered at URL `http://localhost:3001`
