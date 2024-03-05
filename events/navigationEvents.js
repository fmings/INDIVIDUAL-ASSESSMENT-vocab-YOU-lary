import getVocabCards from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const navigationEvents = () => {
  document.querySelector('#view-all').addEventListener('click', () => {
    getVocabCards().then(showVocabCards);
  });
};

export default navigationEvents;
