import getVocabCards from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const navigationEvents = (uid) => {
  document.querySelector('#view-all').addEventListener('click', () => {
    getVocabCards(uid).then(showVocabCards);
  });
};

export default navigationEvents;
