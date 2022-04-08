const getDateFormat = (date) => {
  const stringDate = `${date.getDate()}. ${
    date.getMonth() + 1
  }. ${date.getFullYear()}`;

  return stringDate;
};

const dateOfPublicationFormat = (data) => {
  data.forEach((item) => {
    if (item.dateOfPublication) {
      item.dateOfPublication = getDateFormat(
        new Date(item.dateOfPublication.toDate()),
      );
    }
  });
};

export const transformSnapshot = (snapshot) => {
  const transformedData = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  dateOfPublicationFormat(transformedData);

  return transformedData;
};

export const groupByFirstChar = (array, groupProperty) =>
  array.reduce((acc, item) => {
    const firstChar = item[groupProperty].charAt(0);

    if (!acc[firstChar]) {
      acc[firstChar] = []; // mutation
    }

    acc[firstChar].push(item); // even this mutates

    return acc;
  }, {});
