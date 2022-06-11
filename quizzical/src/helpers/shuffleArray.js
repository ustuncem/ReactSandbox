/**
 * Shuffle Arrays using Fisher-Yates Algorithm.
 * @param {Array} array
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * i);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

export default shuffleArray;
