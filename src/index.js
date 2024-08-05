import { homepage } from "./home.js";
import './style.css';

const main = document.querySelector('main');
let content = homepage();

main.appendChild(content);

console.log('hello shapau');