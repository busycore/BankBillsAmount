const withdraw = (amount) => {
  let oneHundredBills = 0;
  let fiftyBills = 0;
  let twentyBills = 0;

  while (amount >= 100) {
    if (amount - 100 < 50) {
      break;
    }
    amount = amount - 100;
    oneHundredBills++;
  }

  while (amount >= 50) {
    if ((amount - 100) % 20 === 0) {
      break;
    }
    amount = amount - 50;
    fiftyBills++;
  }

  while (amount >= 20) {
    amount = amount - 20;
    twentyBills++;
  }

  return [oneHundredBills, fiftyBills, twentyBills];
};
