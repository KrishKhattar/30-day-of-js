import { sum, person, sub, mul } from './module.js'; 
import divide from './module.js';
import * as mathUtils from './module.js';
import lodash from 'lodash';
import axios from 'axios';

console.log(sum(1,2)); 
console.log(person.greetings()); 
console.log(sub(1,2)); 
console.log(mul(1,2)); 
console.log(divide(1,2)); 



console.log('PI:', mathUtils.PI); 
console.log('E:', mathUtils.E); 


// Task 6
const arr = [1, 2, 3]; 
console.log(lodash.reverse(arr));

// Task 7
axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then(response => console.log("Pokemon is",response.data.forms[0].name));

