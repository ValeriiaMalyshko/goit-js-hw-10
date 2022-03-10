// const BASE_URL = `https://restcountries.com/v3.1`;
// const params = `?fields=name,capital,population,flags,languages`;

// function fetchCountries(name) {
//     return fetch(`${BASE_URL}/name/${name}${params}`).then(response =>
//         response.json(),
//       );
// };

// export default fetchCountries;
export const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  });
};