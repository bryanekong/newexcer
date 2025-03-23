
function createClickCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`Clicked ${count} times`);
  };
}
const countClick = createClickCounter();
countClick();
countClick();
