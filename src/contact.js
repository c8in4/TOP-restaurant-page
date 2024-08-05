const contact = () => {
  const container = document.createElement('div');
  const heading = document.createElement('h1');
  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  nameLabel.appendChild(nameInput);
  // nameLabel.setAttribute(id) = name;

  form.append(nameLabel);


  heading.textContent = 'Contact';

  container.append(heading, form);

  return container;
}

export { contact }
