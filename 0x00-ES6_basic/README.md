---

# 0x00. ES6 Basics

## Description
This project covers various aspects of ES6 in JavaScript, including modern JavaScript concepts and software linting.

## Author
Johann Kerbrat, Engineering Manager at Uber Works

## Project Details
- Weight: 1
- Project Start: Dec 18, 2022 9:00 PM
- Project End: Dec 19, 2022 9:00 PM
- Release Date: Dec 19, 2022 3:00 AM
- Auto Review: Launches at the deadline

## Concepts Covered
- Modern Javascript
- Software Linter

## Learning Objectives
By completing this project, you will be able to:
- Understand what ES6 is and its new features
- Differentiate between constants and variables
- Implement block-scoped variables
- Utilize arrow functions and default function parameters
- Use rest and spread function parameters
- Apply string templating in ES6
- Create objects and their properties in ES6
- Understand iterators and for-of loops

## Requirements
- Ubuntu 18.04 LTS with NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- Files should end with a new line
- Include a README.md file at the root of the project folder
- Code should use the .js extension
- Testing with Jest Testing Framework
- Code analysis with ESLint using specific rules provided
- All functions must be exported

## Setup Instructions
1. Install NodeJS 12.11.x:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   nodejs -v
   npm -v
   ```

2. Install Jest, Babel, and ESLint:
   ```bash
   npm install --save-dev jest
   npm install --save-dev babel-jest @babel/core @babel/preset-env
   npm install --save-dev eslint
   ```

3. Configuration files:
   - [package.json](./package.json)
   - [babel.config.js](./babel.config.js)
   - [.eslintrc.js](./.eslintrc.js)

4. Run `npm install` in the terminal of your project folder to install necessary dependencies.

## Tasks
1. [Const or let?](./0-constants.js)
2. [Block Scope](./1-block-scoped.js)
3. [Arrow functions](./2-arrow.js)
4. [Parameter defaults](./3-default-parameter.js)
5. [Rest parameter syntax for functions](./4-rest-parameter.js)
6. [The wonders of spread syntax](./5-spread-operator.js)
7. [Take advantage of template literals](./6-string-interpolation.js)
8. [Object property value shorthand syntax](./7-getBudgetObject.js)
9. [No need to create empty objects before adding in properties](./8-getBudgetCurrentYear.js)
10. [ES6 method properties](./9-getFullBudget.js)
11. [For...of Loops](./10-loops.js)
12. [Iterate through report objects](./11-createEmployeesObject.js) - Advanced
13. [Iterating through report objects](./100-createIteratorObject.js) - Advanced
14. [Iterate through object](./101-iterateThroughObject.js) - Advanced

---
