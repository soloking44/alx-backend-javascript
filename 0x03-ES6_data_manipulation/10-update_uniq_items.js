const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [a, j] of items.entries()) {
    if (j === 1) {
      items.set(a, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
