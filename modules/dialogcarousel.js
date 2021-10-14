import * as Template from './templates.js';

export const updateDialog = (newIndex, newEmployee) => {
  const dialogCounter = document.querySelector('.dialog small');
  const dialogFigure = document.querySelector('.dialog figure');
  dialogCounter.outerHTML = Template.dialogCounter(newIndex + 1);
  dialogFigure.outerHTML = Template.dialogFigure(newEmployee);
};

export const getEmployee = (currentEmployeeEmail, direction) => {
  const employeeArray = JSON.parse(sessionStorage.getItem('employees'));
  const currentEmployeeIndex = employeeArray.findIndex(employee => employee.email === currentEmployeeEmail);
  let newIndex = 0;

  if (direction === 'previous') {
    newIndex = currentEmployeeIndex - 1;
    newIndex < 0 ? newIndex = employeeArray.length - 1 : null;
  } else if (direction === 'next') {
    newIndex = currentEmployeeIndex + 1;
    newIndex > employeeArray.length - 1 ? newIndex = 0 : null;
  }

  const newEmployee = employeeArray[newIndex];
  updateDialog(newIndex, newEmployee);
};

export const init = dialog => {
  dialog.addEventListener('click', (evt) => {
    const nav = evt.target.closest('nav');
    const button = evt.target.closest('button');
    if (!nav || !button) return;

    const currentEmployeeEmail = document.querySelector('.dialog p:first-of-type').innerHTML;
    const direction = button.getAttribute('title').toLowerCase();

    getEmployee(currentEmployeeEmail, direction);
  });
}
