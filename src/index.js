import { homepage } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';

const main = document.querySelector('main');
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');
const buttons = [
  homeButton,
  menuButton,
  contactButton
];
let content = homepage();

main.appendChild(content);

buttons.forEach(button => {
  button.addEventListener('click', (e) => switchContent(e.target.id));
});

function switchContent(buttonId) {
  main.innerHTML = '';

  switch (buttonId) {
    case 'homeButton':
      content = homepage();
      break;
    case 'menuButton':
      content = menu();
      break;
    case 'contactButton':
      content = contact();
      break;

    default:
      break;
  }

  main.appendChild(content);
};
