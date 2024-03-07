import {
  getHtmlCards, getCssCards, getjavascriptCards, getVocabCards
} from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const filterEvents = (uid) => {
  document.querySelector('#all-filter').addEventListener('click', () => {
    getVocabCards(uid).then((vocab) => showVocabCards(vocab, uid));
  });

  // FILTER TO HTML CARDS
  document.querySelector('#html-filter').addEventListener('click', () => {
    console.warn('html filter clicked');
    getHtmlCards(uid).then((vocab) => showVocabCards(vocab, uid));
    console.warn(getHtmlCards);
    console.warn(showVocabCards);
  });

  document.querySelector('#css-filter').addEventListener('click', () => {
    getCssCards(uid).then((vocab) => showVocabCards(vocab, uid));
    console.warn('css filter clicked');
  });

  document.querySelector('#javascript-filter').addEventListener('click', () => {
    getjavascriptCards(uid).then((vocab) => showVocabCards(vocab, uid));
    console.warn('javascript filter clicked');
  });
};

export default filterEvents;
