import config from '../config';
import { fetch } from './fetch';

export default {
  login,
  persistUser,
  logout,
  register,
  updateFields,
  persistFields,
};

function login(usernameOrEmail, password) {
  const body = `nameOrEmail=${encodeURIComponent(usernameOrEmail)}&password=${encodeURIComponent(password)}`;
  return fetch(
    `${config.api}/authenticate_user`,
    {
      method:"POST",
      body:body,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'
      }
    }
  );
}
function persistUser(username, token, email, globalPermission) {
  localStorage.setItem('username', username);
  localStorage.setItem('JWT', token);
  localStorage.setItem('email', email);
  localStorage.setItem('globalPermission', globalPermission);
}
function persistFields(data) {
  for (var key in data) {
    localStorage.setItem(key, data[key]);
  }
}
function logout(){
  localStorage.setItem('username', '');
  localStorage.setItem('JWT', '');
  localStorage.setItem('email', '');
  localStorage.setItem('globalPermission', '');
}
function register(username, password, email) {
  const body =
    `username=${encodeURIComponent(username)}` +
    `&password=${encodeURIComponent(password)}` +
    `&email=${encodeURIComponent(email)}`;
  return fetch(
    `${config.api}/api/v1/Users`,
    {
      method:"POST",
      body:body,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'
      }
    }
  );
}
function updateFields(fields) {
  return fetch(
    `${config.api}/api/v1/Users`,
    {
      method:"PATCH",
      body: `data=${encodeURIComponent(JSON.stringify(fields))}`,
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  );
}
