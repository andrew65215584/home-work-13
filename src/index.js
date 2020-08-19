// import './styles.css';
// import itemTemplates from './templates/country-template.hbs';
// import listTemplates from './templates/list-template.hbs';

// import { info, error, success } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// const inputRef = document.querySelector('.input');
// const markupList = document.querySelector('.result-markup');

// inputRef.addEventListener('input', event => {
//   let val = event.target.value;

//   if (val === '') {
//     return;
//   }

//   updateCountry(val);
// });

// function updateCountry(value) {
//   getDataCountry(value).then(data => getCountry(data));
// }

// function drawElements(data) {
//   markupList.innerHTML = ' ';
//   markupList.insertAdjacentHTML('beforeend', itemTemplates(data));
// }

// function drawListElement(data) {
//   markupList.innerHTML = ' ';
//   markupList.insertAdjacentHTML('beforeend', listTemplates(data));
// }

// function getDataCountry(valueIn) {
//   return fetch(
//     `https://restcountries.eu/rest/v2/name/${valueIn}`,
//   ).then(response => response.json());
// }

// function getCountry(data) {
//   if (data.length === 1) {
//     drawElements(data);
//   } else if (data.length > 1 && data.length < 10) {
//     drawListElement(data);
//   } else if (data.length > 10) {
//     error({
//       text: 'Too many matches found, please write more specific query',
//     });
//   }
//   console.log(data);
// }
