export const employeeName = (employee) => {
  return `${employee.name.first} ${employee.name.last}`;
};

export const employeeAddress = (employee) => {
  return `${employee.location.street.number} ${employee.location.street.name}<br>${employee.location.city}, ${employee.location.state}<br>${employee.location.postcode}`;
};

export const employeeBirthdate = (employee) => {
  const dateObj = new Date(employee.dob.date);
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
};

export const cardFigure = (employee) => {
  return `<figure>
            <img src='${employee.picture.large}' alt='${employeeName(employee)}' width='128' height='128' />
            <figcaption>
              <h3>${employeeName(employee)}</h3>
              <p>${employee.email}</p>
              <p>${employee.location.city}</p>
            </figcaption>
          </figure>`;
};

export const dialogCounter = (newIndex) => {
  return `<small>Search result ${newIndex} of 12</small>`;
};

export const dialogFigure = (employee) => {
  return `<figure>
            <img class='avatar' src="${employee.picture.large}" width="172" height='172' alt='' />
            <figcation>
              <h4 class="name">${employeeName(employee)}</h4>
              <p class="email">${employee.email}</p>
              <p class="address">${employee.location.city}</p>
              <hr />
              <p>${employee.cell}</p>
              <p class="address">${employeeAddress(employee)}</p>
              <p>Birthday: ${employeeBirthdate(employee)}</p>
            </figcation>
          </figure>`;
};

export const dialogNav = () => {
  return `<nav><button title='Previous'>&lt;</button><button title='Next'>&gt;</button></nav>`;
};

export const dialog = (employee, index) => {
  return `<button title='Close dialog'>&times;</button>${dialogCounter(index)}${dialogFigure(employee)}${dialogNav()}`
};
