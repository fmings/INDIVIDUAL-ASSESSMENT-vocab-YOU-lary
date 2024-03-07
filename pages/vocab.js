import getLanguage from '../api/languageData';
import filterButtons from '../components/buttons/filterButtons';
import filterEvents from '../events/filterEvents';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showVocabCards = async (array, uid) => {
  clearDom();

  let domString = '';
  domString += '<div id="filter-container"></div>';
  const languages = await getLanguage(uid);

  array.forEach((item) => {
    const singleLanguage = languages.find((lang) => lang.firebaseKey === item.languageId);

    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${singleLanguage.category}</h6>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link" id="edit-vocab-card-btn--${item.firebaseKey}">Edit</a>
          <a href="#" class="card-link" id="delete-vocab-card-btn--${item.firebaseKey}">Delete</a>
        </div>
      </div>`;

    renderToDom('#card-container', domString);
    filterButtons();
    filterEvents();
  });
};

export default showVocabCards;
