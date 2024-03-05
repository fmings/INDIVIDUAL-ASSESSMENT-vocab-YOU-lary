import logoutButton from '../components/buttons/logoutButton';
import navigationEvents from '../events/navigationEvents';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';

const startApp = () => {
  domBuilder(); // BUILDS THE DOM
  navBar(); // DYNAMICALLY ADDS THE NAVIGATION BAR
  navigationEvents(); // ADD CLICK EVENTS FOR NAVIGATION BAR
  logoutButton(); // DISPLAYS THE LOGOUT BUTTON COMPONENT
};

export default startApp;
