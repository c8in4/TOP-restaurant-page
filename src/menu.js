const menu = () => {
  const container = document.createElement('div');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');

  heading.textContent = 'Menu';
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus explicabo laboriosam totam repudiandae? Placeat perspiciatis error quae cumque. Deleniti aut officiis non, quam illo eaque labore aperiam mollitia veritatis et quaerat? Minima voluptatem eos id aut corrupti tempore quaerat reprehenderit placeat laboriosam explicabo cupiditate omnis, corporis accusamus sequi libero a repellendus necessitatibus. Minima, temporibus? Eius fugit, velit natus suscipit tempora consequuntur totam magnam, perspiciatis placeat unde reprehenderit laboriosam et iusto nesciunt explicabo cumque quod nostrum quia, quae amet facere. Porro fugit magnam optio ad vel nisi alias animi, quae at possimus? Ab quisquam quis exercitationem voluptates nihil magnam rerum.';

  container.append(heading, paragraph);

  return container;
}

export { menu }
