import { createVocabCard, getVocabCards, updateVocabCard } from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM TO ADD VOCAB CARD
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: Date.now(),
        languageId: document.querySelector('#language_id').value,
        uid
      };

      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCard(patchPayload).then(() => {
          getVocabCards(uid).then((vocab) => showVocabCards(vocab, uid));
        });
      });
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        timeSubmitted: Date.now(),
        languageId: document.querySelector('#language_id').value,
        firebaseKey,
        uid
      };

      updateVocabCard(payload).then(() => {
        getVocabCards(uid).then((vocab) => showVocabCards(vocab, uid));
      });
    }
  });
};

export default formEvents;
