#!/usr/bin/env node
import { name } from '../src/cli.js';
export default (name) => {
console.log('Welcome to the Brain Games!');
console.log(`Hello!${name}`); 
};
