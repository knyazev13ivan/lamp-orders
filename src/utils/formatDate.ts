export const formatDate = (date: string): string => {
  const time = new Date(date);

  return ` ${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`;
};