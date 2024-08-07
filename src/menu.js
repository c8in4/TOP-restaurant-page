const menuList = [
  {
    namePrice: "Garlic Pizza Bread $18",
    description: "Wild Rosemary and Garlic infused Olive oil - Parmesan Cheese and Homemade Hummus"
  },
  {
    namePrice: "Margarita Magic $22",
    description: "Buffalo Mozzarella - Basil leaves - Hand Crushed 'Roma' Tomato Sauce"
  },
  {
    namePrice: "BBQ Chicken and Bacon $26",
    description: "Chicken Breast - Streaky Bacon - Korean BBQ Sauce - Hand Crushed 'Roma' Tomato Sauce"
  },
  {
    namePrice: "Classic Pepperoni $26",
    description: "Italian Pepperoni - Buffalo Mozzarella - Hand Crushed 'Roma' Tomato Sauce"
  },
  {
    namePrice: "King Carnivore $28",
    description: "Chorizo - Italian Salami - Manuka Smoked Ham - Red Onion - Capsicum - Hand Crushed 'Roma' Tomato Sauce"
  },
  {
    namePrice: "Garlic and Chilli Prawn $28",
    description: "Buffalo Mozzarella - Capers - Wild Rocket - Hand Crushed 'Roma' Tomato Sauce"
  },
  {
    namePrice: "Vegie Delight $26",
    description: "Honey Roasted Pumpkin - Mushrooms - Baby Spinach - Sundried Tomatoes - Fire Roasted peppers - Basil pesto - Hand Crushed 'Roma' Tomato Sauce"
  },
  {
    namePrice: "Hawaiian Hero $24",
    description: "Classic Ham - Pineapple - Hand Crushed 'Roma' Tomato Sauce"
  }
]

const menu = () => {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  heading.textContent = 'Menu';

  menuList.forEach(item => {
    const itemName = document.createElement('h3');
    const itemDesc = document.createElement('p');
    itemName.textContent = item.namePrice;
    itemDesc.textContent = item.description;

    menuDiv.append(itemName, itemDesc);
  });


  container.append(heading, menuDiv);

  return container;
}

export { menu }

