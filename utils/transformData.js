const getDateFormat = (date) => {
  const stringDate = `${date.getDate()}. ${
    date.getMonth() + 1
  }. ${date.getFullYear()}`;

  return stringDate;
};

const dateOfPublicationFormat = (data) =>
  data.map((item) => {
    if (item.dateOfPublication) {
      const transformedDate = getDateFormat(
        new Date(item.dateOfPublication.toDate()),
      );

      return { ...item, dateOfPublication: transformedDate };
    }

    return item;
  });

export const transformSnapshot = (snapshot) => {
  const transformedData = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dateOfPublicationFormat(transformedData);
};

export const groupByFirstChar = (array, groupProperty) =>
  array.reduce((acc, item) => {
    const firstChar = item[groupProperty].charAt(0);

    if (!acc[firstChar]) {
      acc[firstChar] = [];
    }

    acc[firstChar].push(item);

    return acc;
  }, {});

export const createSlugLink = (title) =>
  title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

export const parseKeywords = (keywordsString) => {
  if (keywordsString) {
    const arrayKeywords = keywordsString.split(',');

    const trimmedArray = arrayKeywords.map((item) =>
      transformFirstCharToUpperCase(item.trim()),
    );

    return trimmedArray.filter((item) => item.length > 0);
  }

  return '';
};

export const setKeywordsToString = (dataArticle) =>
  dataArticle.map((item) => {
    if (item.keywords !== '') {
      const transformedKeywords = item.keywords.join(', ');

      return { ...item, keywords: transformedKeywords };
    }

    return item;
  });

export const transformFirstCharToUpperCase = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string;
};
