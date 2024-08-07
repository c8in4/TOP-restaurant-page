const contact = () => {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add("contact");
  const name = document.createElement('h3');
  const phoneLabel = document.createElement('p');
  const phoneNumber = document.createElement('p');
  const emailLabel = document.createElement('p');
  const emailAddress = document.createElement('p');

  heading.textContent = 'Contact';
  name.textContent = 'Pizza Place';
  phoneLabel.textContent = 'Phone:';
  phoneNumber.textContent = '0123456789';
  emailLabel.textContent = 'E-Mail:';
  emailAddress.textContent = 'info@pizza.com';

  contactDiv.append(phoneLabel, phoneNumber, emailLabel, emailAddress);
  
  container.append(heading, name, contactDiv);

  return container;
}

export { contact }
