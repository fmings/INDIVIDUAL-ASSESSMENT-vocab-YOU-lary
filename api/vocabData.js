import client from '../utils/client';

// DEFINE THE DATABASE AS THE ENDPOINT TO FETCH DATA FROM
const endpoint = client.databaseURL;

// GET ALL VOCAB CARD DATA
const getVocabCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
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

// GET SINGLE VOCAB CARD
const getSingleVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE NEW VOCAB CARD
const createVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE A VOCAB CARD
const updateVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE A VOCAB CARD
const deleteVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FILTER TO HTML CARDS
const getHtmlCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const htmlCards = Object.values(data).filter((obj) => obj.languageId === '-NsB-2wo8eTKqoFWgHcO');
      resolve(htmlCards);
    })
    .catch(reject);
});

// FILTER TO CSS CARDS
const getCssCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cssCards = Object.values(data).filter((obj) => obj.languageId === '-NsB-2wpeBXLy4lMTRi4');
      resolve(cssCards);
    })
    .catch(reject);
});

// FILTER TO JAVASCRIPT CARDS
const getjavascriptCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const javascriptCards = Object.values(data).filter((obj) => obj.languageId === '-NsB-2wpeBXLy4lMTRi5');
      resolve(javascriptCards);
    })
    .catch(reject);
});

export {
  getVocabCards, createVocabCard, updateVocabCard, deleteVocabCard, getSingleVocabCard, getHtmlCards, getCssCards, getjavascriptCards
};
