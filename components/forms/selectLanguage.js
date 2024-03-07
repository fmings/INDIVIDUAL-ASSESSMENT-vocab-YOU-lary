import getLanguage from '../../api/languageData';
import renderToDom from '../../utils/renderToDom';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="language">Select a language</label>
  <select class="form-control" id="language_id" required>
  <option value="">Select a language</option>`;
  getLanguage(uid).then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
      <option
      value="${language.firebaseKey}"
      ${languageId === language.firebaseKey ? 'selected' : ''}>
      ${language.category}
      </option>`;
    });

    domString += '</select>';

    renderToDom('#select-language', domString);
  });
};

export default selectLanguage;
