export function getLocalStorageValue(key) {
  return localStorage.getItem(key);
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
