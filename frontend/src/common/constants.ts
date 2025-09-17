export function getArrMinutes() {
  const arrMinutes = [];
  for (let index = 10; index <= 180; index++) {
    const isEndsWithZero = index % 10;
    if (!isEndsWithZero) {
      arrMinutes.push(`${index} min`);
    }
  }
  return arrMinutes;
}

export const arrSort = ['popularity', 'views', 'comment'];
