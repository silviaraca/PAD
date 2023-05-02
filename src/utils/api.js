import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = (searchTerm) => {
  return axios.get(BASE_URL, {
    params: {
      q: searchTerm,
    },
  });
};
 
