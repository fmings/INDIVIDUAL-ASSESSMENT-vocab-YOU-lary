import renderToDom from '../../utils/renderToDom';

// FILTER BUTTONS
const filterButtons = () => {
  const domString = `
  <div id="filter-buttons">
    <button type="button" class="btn btn-primary btn-lg" id="all-filter">All</button>
    <button type="button" class="btn btn-primary btn-lg" id="html-filter">HTML</button>
    <button type="button" class="btn btn-primary btn-lg" id="css-filter">CSS</button>
    <button type="button" class="btn btn-primary btn-lg" id="javascript-filter">JavaScript</button>
  </div>
  `;

  renderToDom('#filter-container', domString);
};

export default filterButtons;
