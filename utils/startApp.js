import { getVocabCards } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import showVocabCards from '../pages/vocab';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import filterEvents from '../events/filterEvents';
import filterButtons from '../components/buttons/filterButtons';

const startApp = (uid) => {
  domBuilder(); // BUILDS THE DOM
  domEvents(uid); // ADDS THE EVENT LISTENERS TO THE DOM
  navBar(); // DYNAMICALLY ADDS THE NAVIGATION BAR
  navigationEvents(uid); // ADD CLICK EVENTS FOR NAVIGATION BAR
  formEvents(uid); // ADDS FORM EVENTS FUNCTION TO THE APP
  filterButtons();
  filterEvents(uid);
  logoutButton(); // DISPLAYS THE LOGOUT BUTTON COMPONENT

  getVocabCards(uid).then((vocab) => showVocabCards(vocab, uid)); // SHOWS VOCAB CARDS ON INITIAL LOAD
};

export default startApp;
