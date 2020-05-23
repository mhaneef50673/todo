import { loginUrl } from './endpoints';

export const getLoginToken = options => {
  return fetch(loginUrl, options)
    .then((response) => {
      return response.json();
    });
};
