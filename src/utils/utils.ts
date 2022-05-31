export const sortArrayOfObjects = (array: Array<any>, keyName: string) => {
  array.sort((a, b) => {
    return b[keyName] - a[keyName]
  })
  return array;
}

export const composeCreatedDate = (date: string) => {
  const createdDate = new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const deleteLastChar = createdDate.indexOf('г');
  return createdDate.slice(0, deleteLastChar - 1);
}
