import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

onCheckForm();

function onFormSubmit(event) {
  event.preventDefault();

  if (input.value === '' || textarea.value === '') {
    alert('Всі поля мають бути заповнені!');
  } else {
    formData.email = input.value;
    formData.message = textarea.value;
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

function onFormInput() {
  formData.email = input.value;
  formData.message = textarea.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onCheckForm() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);

    textarea.value = message;
    input.value = email;
  }
}
