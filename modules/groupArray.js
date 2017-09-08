module.exports = (array, size) => {
  let master = [];
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);

    if (temp.length === size) {
      master.push(temp);
      temp = [];
    }
  }

  return master;
}
