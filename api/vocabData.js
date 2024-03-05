import client from '../utils/client';

// DEFINE THE DATABASE AS THE ENDPOINT TO FETCH DATA FROM
const endpoint = client.databaseURL;

// GET ALL VOCAB CARD DATA
const getVocabCards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getVocabCards;
