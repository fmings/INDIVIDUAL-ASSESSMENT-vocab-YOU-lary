import { getVocabCards } from '../api/vocabData';
import addVocabCardForm from '../components/forms/addVocabCardForm';
import showVocabCards from '../pages/vocab';

const navigationEvents = (uid) => {
  document.querySelector('#view-all').addEventListener('click', () => {
    getVocabCards(uid).then(showVocabCards);
  });

  document.querySelector('#add-card').addEventListener('click', () => {
    addVocabCardForm(uid);
  });
};

export default navigationEvents;
