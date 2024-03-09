import getLanguage from './languageData';
import { getVocabCards } from './vocabData';

const searchVocabCards = async (uid, searchValue) => {
  const allVocab = await getVocabCards(uid);
  const allLanguage = await getLanguage(uid);
  const filteredVocab = await allVocab.filter((vocab) => (
    vocab.title.toLowerCase().includes(searchValue)
    || vocab.definition.toLowerCase().includes(searchValue)
  ));

  const filteredLanguage = await allLanguage.filter((language) => (
    language.category.toLowerCase().includes(searchValue)
  ));

  return { vocab: filteredVocab, language: filteredLanguage };
};

export default searchVocabCards;
