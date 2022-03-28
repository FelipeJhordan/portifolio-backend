export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
