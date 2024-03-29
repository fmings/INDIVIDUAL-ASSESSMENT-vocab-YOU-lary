import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<div id="welcome-message">Welcome to Vocab-YOU-lary!</div><button id="google-auth" class="btn btn-danger google-login">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
