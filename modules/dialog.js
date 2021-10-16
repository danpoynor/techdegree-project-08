import * as Template from './templates.js';
import * as DialogCarousel from './dialogcarousel.js';

const CloseDialog = (dialog, backdrop) => {
  dialog.remove();
  backdrop.remove();
}

const addCloseEvents = (dialog, backdrop) => {
  const closeButton = dialog.querySelector('button');

  closeButton.addEventListener('click', () => {CloseDialog(dialog, backdrop)}, false);
  backdrop.addEventListener('click', () => {CloseDialog(dialog, backdrop)}, false);
  document.onkeydown = (evt) => {evt.keyCode == 27 ? CloseDialog(dialog, backdrop) : null}; // esc key
}

export const init = employeeEmail => {
  const dialog = document.createElement('div');
  const employeeArray = JSON.parse(sessionStorage.getItem('employees'));
  const employee = employeeArray.find(employee => employee.email === employeeEmail);
  const currentEmployeeIndex = employeeArray.findIndex(employee => employee.email === employeeEmail);
  const dialogTemplate = Template.dialog(employee, currentEmployeeIndex + 1);
  const existingDialog = document.querySelector('.dialog');
  existingDialog ? existingDialog[0].remove() : null;
  dialog.classList.add('dialog');
  dialog.setAttribute('role', 'dialog');
  dialog.innerHTML = dialogTemplate;
  document.body.appendChild(dialog);

  const backdrop = document.createElement('div');
  backdrop.classList.add('dialog-backdrop');
  document.body.appendChild(backdrop);

  addCloseEvents(dialog, backdrop);
  DialogCarousel.init(dialog);
}

