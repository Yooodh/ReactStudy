export const addItems = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
