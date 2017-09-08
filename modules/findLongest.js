module.exports = (sentence) => {
  const sentenceArray = sentence.split(" ");
  let maxLength = 0;

  sentenceArray.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });

  return maxLength;
}
