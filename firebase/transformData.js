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
      acc[firstChar] = []; // mutation
    }

    acc[firstChar].push(item); // even this mutates

    return acc;
  }, {});
