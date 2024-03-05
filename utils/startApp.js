import getVocabCards from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../events/navigationEvents';
import showVocabCards from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';

const startApp = (uid) => {
  domBuilder(); // BUILDS THE DOM
  navBar(); // DYNAMICALLY ADDS THE NAVIGATION BAR
  navigationEvents(uid); // ADD CLICK EVENTS FOR NAVIGATION BAR
  logoutButton(); // DISPLAYS THE LOGOUT BUTTON COMPONENT

  getVocabCards(uid).then(showVocabCards); // SHOWS VOCAB CARDS ON INITIAL LOAD
};

export default startApp;
