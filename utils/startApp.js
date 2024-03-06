import { getVocabCards } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import showVocabCards from '../pages/vocab';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = (uid) => {
  domBuilder(); // BUILDS THE DOM
  navBar(); // DYNAMICALLY ADDS THE NAVIGATION BAR
  navigationEvents(uid); // ADD CLICK EVENTS FOR NAVIGATION BAR
  formEvents(uid); // ADDS FORM EVENTS FUNCTION TO THE APP
  logoutButton(); // DISPLAYS THE LOGOUT BUTTON COMPONENT

  getVocabCards(uid).then(showVocabCards); // SHOWS VOCAB CARDS ON INITIAL LOAD
};

export default startApp;
