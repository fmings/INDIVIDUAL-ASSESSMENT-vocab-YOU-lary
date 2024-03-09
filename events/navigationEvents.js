import searchVocabCards from '../api/mergedData';
import { getVocabCards } from '../api/vocabData';
import addVocabCardForm from '../components/forms/addVocabCardForm';
import showVocabCards from '../pages/vocab';
import renderToDom from '../utils/renderToDom';

const navigationEvents = (uid) => {
  document.querySelector('#view-all').addEventListener('click', () => {
    getVocabCards(uid).then((vocab) => showVocabCards(vocab, uid));
  });

  document.querySelector('#add-card').addEventListener('click', () => {
    addVocabCardForm(uid);
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (e.keyCode === 13) {
      searchVocabCards(uid, searchValue).then(({ vocab, language }) => {
        if (vocab.length > 0) {
          showVocabCards(vocab, uid);
        } else if (language.lenth > 0) {
          showVocabCards(language, uid);
        } else {
          const domString = '<h1>No Results</h1>';
          renderToDom('#card-container', domString);
        }
      });
    }
  });
};

export default navigationEvents;
