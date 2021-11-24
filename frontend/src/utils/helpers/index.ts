import striptags from 'striptags';
import sanitize from 'sanitize-html';

export const displaySummary = (htmlString: string, maxCharacterCount = 200) => {
  const text = striptags(sanitize(htmlString)).trim();
  if (text.length < maxCharacterCount) {
    return text;
  }
  return `${text.substring(0, maxCharacterCount)}...`;
};

export const displayDate = (dateString: string) =>
  new Date(parseInt(dateString)).toDateString();
