export default function authHeader() {
  const username = JSON.parse(localStorage.getItem('username'));

  if (username && username.token) {
    return { Authorization: 'Bearer ' + username.token }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}