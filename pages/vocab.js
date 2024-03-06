import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const showVocabCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link">Edit</a>
          <a href="#" class="card-link">Delete</a>
        </div>
      </div>`;

    renderToDom('#card-container', domString);
  });
};

export default showVocabCards;
