// input: array
// return: number

export default array => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const arrAbs = array.map(num => Math.abs(num));
  return Math.min(...arrAbs) ** 2;
};
