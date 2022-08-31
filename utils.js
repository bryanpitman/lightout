/** Gets either 0 or 1  */

function trueOrFalse() {
  let random = Math.round(Math.random() * 2);
  return (random ? true : false);
}

export { trueOrFalse };