import { getHtmlCards } from '../api/vocabData';
// eslint-disable-next-line import/no-cycle
import showVocabCards from '../pages/vocab';

const filterEvents = (uid) => {
  // FILTER TO HTML CARDS
  document.querySelector('#html-filter').addEventListener('click', () => {
    console.warn('html filter clicked');
    getHtmlCards(uid).then((vocab) => showVocabCards(vocab, uid));
    console.warn(getHtmlCards(uid));
  });

  document.querySelector('#css-filter').addEventListener('click', () => {
    console.warn('css filter clicked');
  });

  document.querySelector('#javascript-filter').addEventListener('click', () => {
    console.warn('javascript filter clicked');
  });
};

export default filterEvents;
