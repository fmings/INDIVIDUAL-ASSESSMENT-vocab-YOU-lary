import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const addVocabCardForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}">
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Vocab Term</label>
      <input type="text" class="form-control" id="title" value="${obj.title || ''}" placeholder="Enter Vocab Term" required>
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Language</label>
      <input type="text" class="form-control" id="category" placeholder="Enter Language Category Here" value="${obj.category || ''}">
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2" class="form-label">Definition</label>
      <input type="text" class="form-control" id="definition" placeholder="Enter Definition Here" value="${obj.definition || ''}">
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Edit' : 'Submit'}</button>
    </div>
  </form>
  `;

  renderToDom('#form-container', domString);
};

export default addVocabCardForm;
