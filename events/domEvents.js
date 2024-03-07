import { deleteVocabCard, getSingleVocabCard, getVocabCards } from '../api/vocabData';
import addVocabCardForm from '../components/forms/addVocabCardForm';
import showVocabCards from '../pages/vocab';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT TO DELETE A VOCAB CARD
    if (e.target.id.includes('delete-vocab-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabCard(firebaseKey).then(() => {
          getVocabCards(uid).then((vocab) => showVocabCards(vocab, uid));
        });
      }
    }

    // CLICK EVENT TO EDIT A VOCAB CARD
    if (e.target.id.includes('edit-vocab-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabCard(firebaseKey).then((vocabObj) => addVocabCardForm(uid, vocabObj));
    }
  });
};

export default domEvents;
