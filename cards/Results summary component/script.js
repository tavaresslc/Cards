const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./images/icon-visual.svg"
  }
];

const listDiv = document.querySelector('.list');

data.forEach((item, index) => {
  const p = document.createElement('p');
  p.classList.add(`item-${index}`); // Adiciona classe CSS para cada item

  // Criar elemento de ícone
  const icon = document.createElement('img');
  icon.setAttribute('src', item.icon);
  icon.setAttribute('alt', item.category);
  p.appendChild(icon);

  const category = document.createElement('span');
  category.textContent = item.category;
  category.classList.add(`category-${index}`); // Adiciona classe CSS para o elemento category
  p.appendChild(category);

  const score = document.createElement('b');
  score.textContent = item.score;
  p.appendChild(score);

  p.appendChild(document.createTextNode(' /100'));

  listDiv.appendChild(p);

  // Aplica cores, espaçamento e estilos ao elementos conforme a ordem fornecida
  const categoryElement = document.querySelector(`.category-${index}`);
  const itemElement = document.querySelector(`.item-${index}`);

  switch (index) {
    case 0:
      categoryElement.style.color = 'hsl(0, 100%, 67%)'; // Light red
      itemElement.style.backgroundColor = 'hsla(0, 100%, 67%, 0.1)'; // Light red com transparência
      break;
    case 1:
      categoryElement.style.color = 'hsl(39, 100%, 56%)'; // Orangey yellow
      itemElement.style.backgroundColor = 'hsla(39, 100%, 56%, 0.1)'; // Orangey yellow com transparência
      break;
    case 2:
      categoryElement.style.color = 'hsl(166, 100%, 37%)'; // Green teal
      itemElement.style.backgroundColor = 'hsla(166, 100%, 37%, 0.1)'; // Green teal com transparência
      break;
    case 3:
      categoryElement.style.color = 'hsl(234, 85%, 45%)'; // Cobalt blue
      itemElement.style.backgroundColor = 'hsla(234, 85%, 45%, 0.1)'; // Cobalt blue com transparência
      break;
    default:
      break;
  }
});

  