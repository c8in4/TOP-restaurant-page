import Logo from './pizza.jpg';

const homepage = () => {
  const container = document.createElement('div');
  const image = new Image();
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  image.src = Logo;
  heading.textContent = 'Pizza';
  paragraph.innerText = `Our pizzas are Hand Stretched with Premium Traditional 'Italian oo' Flour.\nWood fired to prefection, Nothing can compare.\nSquisito - Deliziosa!`;


  container.append(image, heading, paragraph);


  return container;
}

export { homepage }
