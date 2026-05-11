(function () {
  console.log('\n========== JavaScript Hello World ==========\n');
  console.log('Hello there 👋');

  // Can we call printDate() on line 6?
  // printDate();

  function printDate() {
    const today = new Date();
    console.log(`FUNCTION 1 -- Today's date is ${today}`);
  }

  printDate();

  // Can we call todaysDate() on line 16?
  // todaysDate();

  const todaysDate = function printTodaysDate() {
    console.log(`FUNCTION 2 -- Today's date is ${new Date()}`);
  };

  todaysDate();
})();
