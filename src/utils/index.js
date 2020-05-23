import { LOCAL_STORAGE_KEY } from '../constants';

export const isAuthenticated = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (token) {
    return true;
  }
  return false;
}