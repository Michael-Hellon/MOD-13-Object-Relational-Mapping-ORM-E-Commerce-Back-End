
# MOD-13-Object-Relational-Mapping-ORM-E-Commerce-Back-End

## Description

This project will build the back end for an e-commerce site by modifying starter code. It’s configured utilizing Express.js API to use Sequelize to interact with a PostgreSQL database.

- My motivation was to create the back end for an E-commerce site.
- I built this project so that my client could easily view their inventories by displaying the categories, products, product tags, and the tags themselves. This allows the client to see what inventory items are selling and what is not so that they can better maintain their inventories and help keep overhead costs manageable.
- This project solved the problem of maintaining proper inventory levels to compete and gain market share over other e-commerce companies.
- I learned how to utilize API endpoints, seeds, models and databases to produce a quality product for my clients.  

![License](https://img.shields.io/badge/License-MIT-green.svg)

## Table of contents

- [MOD-13-Object-Relational-Mapping-ORM-E-Commerce-Back-End](#mod-13-object-relational-mapping-orm-e-commerce-back-end)
  - [Description](#description)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

## Installation

All you need to do is clone the repository from GitHub onto your computer. Once you open the root of the new folder, you can run `npm install` in the terminal. You are now set to run the actual program.

## Usage

After you have installed the npm, in the terminal type in `psql -U postgres`. Then you will have to enter your postgres password. After that, in the CLI in the terminal `\i db/schema.sql`, then press enter. Now you type in `\q`.  This will bring you back to the node CLI. From there type in `npm run seed`, then you can type in `npm run start`. At the bottom of the output you will see a line that says `App listening at http://localhost:3001/api/categories/` click on it to open a browser. Once it’s open cut and paste it into insomnia or type it directly into the proper box. 

## Contribute

If you would like to contribute to this project, please see below for my contact information.

## Test

There are no test conditions. If you have followed the steps properly you should see results similar to my screenshots in the assets/images folder.

## Questions

My Github profile can be located at <https://github.com/Michael-Hellon/>

This project can be found at <https://github.com/Michael-Hellon/MOD-13-Object-Relational-Mapping-ORM-E-Commerce-Back-End>

The DEMO video can be watched at <https://youtu.be/yI2NDb61amc>

You can email me with any questions at <mwhellon@yahoo.com>

![screenshot](/assets/images/Screenshot_01_categories.png)

![screenshot](/assets/images/Screenshot_GET_all%20Categories.png)
![screenshot](/assets/images/Screenshot_GET_categories_by_ID.png)
![screenshot](/assets/images/Screenshot_CREATE_Categories.png)
![screenshot](/assets/images/Screenshot_UPDATE_Categories.png)
![screenshot](/assets/images/Screenshot_DELETE_Categories.png)


## Credits

I completed this project myself and used MOD 13’s mini-project as a guideline for this project. I used several page from Sequelize.org  https://sequelize.org/docs/v7

## License

To read more about the MIT license, click here ==> [License: MIT](https://opensource.org/licenses/MIT).

![License](https://img.shields.io/badge/License-MIT-green.svg)
