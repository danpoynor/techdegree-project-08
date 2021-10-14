import * as Selector from './selectors.js';

const removeNoResultsMessage = () => {
  const noResultsMessage = document.querySelector('.no-results');
  if (noResultsMessage) {
    noResultsMessage.remove();
  }
};

const showNoResultsMessage = () => {
  const noResults = document.createElement('p');
  noResults.classList.add('no-results');
  noResults.innerHTML = 'No results found';
  Selector.cardContainer.appendChild(noResults);
};

const searchAwesomeEmployees = searchString => {
  const employeeNames = Selector.cardContainer.querySelectorAll('h3');
  employeeNames.forEach(employee => {
    const employeeName = employee.innerText;
    if (employeeName.toLowerCase().includes(searchString.toLowerCase())) {
      employee.closest('li').classList.remove('hidden');
    } else {
      employee.closest('li').classList.add('hidden');
    }
  });

  Selector.cardContainer.querySelectorAll('li:not(.hidden)').length === 0 ? showNoResultsMessage() : removeNoResultsMessage();
};

export const init = () => {
  Selector.searchField.addEventListener('input', (evt) => {
    const searchString = evt.target.value.toLowerCase();
    removeNoResultsMessage();

    if (searchString !== '') {
      searchAwesomeEmployees(searchString);
    } else {
      Selector.cardContainer.querySelectorAll('li').forEach(card => card.classList.remove('hidden'));
    }
  });
}
