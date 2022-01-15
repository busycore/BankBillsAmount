/////////////////////////////////////////////////
// Matheus V. 2021
/////////////////////////////////////////////////

const withdraw = (amount) => {
  //Set-up the variables
  let billsOfOneHundredAmount = 0;
  let billsOfFiftyAmount = 0;
  let billsOfTwentyAmount = 0;

  while (amount >= 100) {
    //Check if the current operation will impact the next operation
    //leading to an incorret withdraw
    //If the value is lower, we will skip the operation
    if (amount - 100 < 50) {
      break;
    }

    amount -= 100;
    billsOfOneHundredAmount++;
  }

  while (amount >= 50) {
    //Check if the current operation will impact the next operation
    //leading to an incorret withdraw
    //We will skip the operation if the remaining of (current amt - 50) division's is not 0
    if ((amount - 50) % 20 !== 0) {
      break;
    }
    amount -= 50;
    billsOfFiftyAmount++;
  }

  while (amount >= 20) {
    amount -= 20;
    billsOfTwentyAmount++;
  }
  
  return [billsOfOneHundredAmount, billsOfFiftyAmount, billsOfTwentyAmount];
};
