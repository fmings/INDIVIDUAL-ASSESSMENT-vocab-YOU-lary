import { createVocabCard, getVocabCards, updateVocabCard } from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM TO ADD VOCAB CARD
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#category').value,
        definition: document.querySelector('#definition').value,
        uid
      };
      console.warn(payload);
      createVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabCard(patchPayload).then(() => {
          getVocabCards(uid).then(showVocabCards);
        });
      });
    }
  });
};

export default formEvents;
