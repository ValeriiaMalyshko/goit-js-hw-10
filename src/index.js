import './css/styles.css';
import debounce from 'lodash/debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const searchEl = document.querySelector('#search-box')
searchEl.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));

searchEl.addEventListener('submit', (event) => {
    event.preventDefault();
});

