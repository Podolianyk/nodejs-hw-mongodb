const parseContactType = (contactType) => {
  const type = ['work', 'home', 'personal'];
  if (type.includes(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'boolean') return isFavourite;
};

export const parseFilterParams = (query) => {
  return {
    contactType: parseContactType(query.contactType),
    isFavourite: parseIsFavourite(query.isFavourite),
  };
};
