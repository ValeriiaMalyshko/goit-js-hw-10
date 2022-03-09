import './css/styles.css';
import debounce from 'lodash/debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const searchEl = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

searchEl.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

function handleInput (event) {
    event.preventDefault();
    const inputValue = event.target.value.trim().toLowerCase();
     if (inputValue==="") {
        countryInfo = "";
        countryList = "";
     }
     fetchCountries(`${inputValue}`)
        .then(renderMarkup)
        .catch(onFetchError)
        .finally(() => form.reset());
};

function onFetchError(error) {
    countryListRef.innerHTML = '';
    countryInfoRef.innerHTML = '';
    Notify.failure('Oops, there is no country with that name.');
  }
