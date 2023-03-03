// This is the JS file for handling user input (not tested yet)

const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./logoFile');

class CLI {
  constructor() {
    // default logo
    this.text = 'svg';
    this.shape = 'circle';
    this.color = 'white';
  }
  run() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter your logo text (<=3 letters)'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape for your logo',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter a color/hex code for your logo'
        },
      ])
      .then(({ text, shape, color }) => {
        this.text = text;
        this.shape = shape;
        this.color = color;
        console.log(createLogo(text, shape, color));
        return writeFile(join(__dirname, '..', 'examples', 'logo.svg'), createLogo(this.text, this.shape, this.color)
        );
      })
      .then(() => console.log("Generated logo.svg"))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}
module.exports = CLI;

