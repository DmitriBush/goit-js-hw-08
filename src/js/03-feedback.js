import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onInputForm, 1000));
form.addEventListener('submit', submitForm);

function onInputForm(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function dataCheck() {
  let savedDataForm = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedDataForm) {
    savedDataForm = JSON.parse(savedDataForm);

    Object.entries(savedDataForm).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}

dataCheck();

function submitForm(evt) {
  evt.preventDefault();

  if (form.email.value === '' || form.message.value === '') {
    alert('Fill in the fields!');
    return;
  }

  formData = {};
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
