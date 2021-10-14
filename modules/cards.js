import * as Selector from './selectors.js';
import * as Template from './templates.js';

const cardEvents = cardList => {
  import('./dialog.js').then(( Dialog ) => {
    cardList.addEventListener('click', (evt) => {
      const card = evt.target.closest('figure');
      if (!card) return;

      Dialog.init(card.querySelector('p:first-of-type').textContent);
    });
  });
}

export const init = employees => {
  const cardList = document.createElement('ul');
  Selector.cardContainer.appendChild(cardList);

  employees.map(employee => {
    const card = document.createElement('li');
    card.innerHTML = Template.cardFigure(employee);
    cardList.appendChild(card);
  });

  cardEvents(cardList);
};
