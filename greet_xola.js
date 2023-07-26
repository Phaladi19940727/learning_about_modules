// greet_xola.js
import chalk from 'chalk';
// Import the greet function from the local file (no need for './' in ESM)
import greet from './greet.js';

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage);
