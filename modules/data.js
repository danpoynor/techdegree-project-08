import * as Variable from './variables.js';

const getData = async function(url) {
  const response = await fetch(url);

  // Make sure response is ok (200-299)
  if (response.status >= 200 && response.status <= 299) {
    const employees = await response.json();

    // Dynamically import js modules
    await import('./cards.js').then((Cards) => {
      Cards.init(employees.results);
    });
    await import('./search.js').then((Search) => {
      Search.init();
    });

    sessionStorage.setItem("employees", JSON.stringify(employees.results));
  } else {
    console.error(`error response was: ${response.status} ${response.statusText} for ${Variable.apiUrl}`);
  }
}

export const init = () => {
  getData(Variable.apiUrl);
}
