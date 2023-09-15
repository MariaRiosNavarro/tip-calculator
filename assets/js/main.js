// Save all variables

// inputs

let bill = document.querySelector('[data-js="bill"]');
console.log({ bill });
let people = document.querySelector('[data-js="people"]');
console.log({ people });

// value of the service (options) will be extract in the main function

let service = document.querySelector('[data-js="service"]');

// outputs

let totalTip = document.querySelector('[data-js="total-tip"]');
console.log({ totalTip });
let totalBill = document.querySelector('[data-js="total-bill"]');
console.log({ totalBill });
let partialTip = document.querySelector('[data-js="partial-tip"]');
console.log({ partialTip });
let partialBill = document.querySelector('[data-js="partial-bill"]');
console.log({ partialBill });

// extra : change bck - design

let wrapper = document.querySelector('[data-js="wrapper"]');
console.log({ wrapper });

// !     ---------------------- main Function

console.log("-------function---logs");

// initial Variables

const badTip = 2;
const middleTip = 10;
const goodTip = 20;

let resultTip = 0;

function calculateTip() {
  //save all inputs values as number
  let billNumber = Number(bill.value);
  console.log("billNumber", typeof billNumber);
  let peopleNumber = Number(people.value);
  console.log("peopleNumber", typeof billNumber);

  //save the selected option of service
  let serviceValue = service.value;
  console.log("serviceValue", typeof serviceValue);
  console.log(serviceValue);

  //   help function:

  const tipCalculate = (percent, billNumber) => (percent / 100) * billNumber;

  //   calculate  resultTip with the selected condition

  if (serviceValue === "bad") {
    resultTip = tipCalculate(badTip, billNumber);
    console.log("with bad tip is", resultTip);
  } else if (service === "good") {
    resultTip = tipCalculate(goodTip, billNumber);
    console.log("with good tip is", resultTip);
  } else {
    resultTip = tipCalculate(middleTip, billNumber);
    console.log("with middle tip is", resultTip);
  }

  console.log("selected tip", resultTip);

  console.log("calculate result");

  // ! There are 2 posibilities to round the numbers to 2 decimals
  //   ! option (convert to string) 1-> .toFixed(2)
  //   ! option 2 (remains a number)-> Math.round(number * 100) / 100;)  const round = (number) => Math.round(number * 100) / 100;

  //  round our resultTip only for the Output

  let roundTip = resultTip.toFixed(2);
  console.log({ roundTip });
  console.log(typeof roundTip);

  // calculate the total with the tip

  let resultTotalBill = resultTip + billNumber;
  console.log({ resultTotalBill });
  let roundTotalBill = resultTotalBill.toFixed(2);
  console.log({ roundTotalBill });
  console.log(typeof roundTotalBill);

  //  calculate the partial tip with the people number

  let resultPartialTip = resultTip / peopleNumber;
  console.log({ resultPartialTip });
  let roundPartialTip = resultPartialTip.toFixed(2);
  console.log({ roundPartialTip });
  console.log(typeof roundPartialTip);

  //  calculate the partial  bill  with tip with the people number

  let resultPartialBill = resultTotalBill / peopleNumber;
  console.log({ resultPartialBill });
  let roundPartialBill = resultPartialBill.toFixed(2);
  console.log({ roundPartialBill });
  console.log(typeof roundPartialBill);

  //   ! Outputs

  totalTip.innerHTML = `Die Gesamttrinkgeldmenge beträgt € ${roundTip}`;
  totalBill.innerHTML = `Die Gesamtrechnung beträgt € ${roundTotalBill}`;
  partialTip.innerHTML = `Jeder muss € ${roundPartialTip} Trinkgeld zahlen`;
  partialBill.innerHTML = `Jeder muss € ${roundPartialBill} für die komplete Rechnung mit Trinkeld bezahlen`;
}
