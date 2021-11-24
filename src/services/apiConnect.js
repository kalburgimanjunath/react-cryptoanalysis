import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const api_KEY = '9ff11b48756361f4d7fb594dbbb49e87';

// async function getLatestMovies() {
//   fetch(
//     'https://api.themoviedb.org/4/list/1?page=1&api_key=9ff11b48756361f4d7fb594dbbb49e87'
//   )
//     .then((response) => response.json())

//     .catch((error) => console.log(error));
// }
export default {
  getLatestMovies: async () => {
    fetch(
      'https://api.themoviedb.org/4/list/1?page=1&api_key=9ff11b48756361f4d7fb594dbbb49e87'
    )
      .then((response) => response.json())

      .catch((error) => console.log(error));
  },
};
