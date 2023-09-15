// Save all variables

// inputs

let bill = document.querySelector('[data-js="bill"]');
// console.log({ bill });
let people = document.querySelector('[data-js="people"]');
// console.log({ people });

// value of the service (options) will be extract in the main function

let service = document.querySelector('[data-js="service"]');

// outputs

let totalTip = document.querySelector('[data-js="total-tip"]');
// console.log({ totalTip });
let totalBill = document.querySelector('[data-js="total-bill"]');
// console.log({ totalBill });
let partialTip = document.querySelector('[data-js="partial-tip"]');
// console.log({ partialTip });
let partialBill = document.querySelector('[data-js="partial-bill"]');
// console.log({ partialBill });

// extra : change bck - design

let wrapper = document.querySelector('[data-js="wrapper"]');
// console.log({ wrapper });

// !     ---------------------- main Function

console.log("-------function---logs");

// initial Variables (I save the Tip in Varibles, so that we can change the values in the future, if we need it)

const badTip = 2;
const middleTip = 10;
const goodTip = 20;

let resultTip = 0;

function calculateTip() {
  // add this line, to remove the warning red color if the form was empty
  totalTip.style.backgroundColor = "transparent";
  //save all inputs values as number
  let billNumber = Number(bill.value);
  // console.log("billNumber", typeof billNumber);
  let peopleNumber = Number(people.value);
  // console.log("peopleNumber", typeof billNumber);

  //save the selected option of service
  let serviceValue = service.value;
  // console.log("serviceValue", typeof serviceValue);
  // console.log(serviceValue);

  //  # Additional check for empty input fields, and exit the function because the input is invalid (early return).

  if (
    isNaN(billNumber) ||
    isNaN(peopleNumber) ||
    billNumber <= 0 ||
    peopleNumber <= 0
  ) {
    totalTip.innerHTML =
      "Bitte geben Sie einen gültigen Rechnungsbetrag und eine gültige Anzahl der Personen ein.";
    totalTip.style.backgroundColor = "red";
    totalBill.innerHTML = "";
    partialTip.innerHTML = "";
    partialBill.innerHTML = "";
    wrapper.style.backgroundColor = "lightgray";
    return;
  }

  //   tip calculate function:

  const tipCalculate = (percent, billNumber) => (percent / 100) * billNumber;

  //   calculate  resultTip with the selected condition

  if (serviceValue === "bad") {
    resultTip = tipCalculate(badTip, billNumber);
    // console.log("with bad tip is", resultTip);
    // extra
    wrapper.style.backgroundColor = "red";
  } else if (serviceValue === "good") {
    resultTip = tipCalculate(goodTip, billNumber);
    // console.log("with good tip is", resultTip);
    // extra
    wrapper.style.backgroundColor = "green";
  } else if (serviceValue === "middle") {
    resultTip = tipCalculate(middleTip, billNumber);
    // console.log("with middle tip is", resultTip);
    // extra
    wrapper.style.backgroundColor = "yellow";
  } else {
    resultTip = "";
    wrapper.style.backgroundColor = "lightgray";
  }

  // ! There are 2 posibilities to round the numbers to 2 decimals
  //   ! option (convert to string) 1-> .toFixed(2)
  //   ! option 2 (remains a number)-> Math.round(number * 100) / 100;)  const round = (number) => Math.round(number * 100) / 100;

  //  round our resultTip only for the Output

  let roundTip = resultTip.toFixed(2);
  // console.log({ roundTip });
  // console.log(typeof roundTip);

  // calculate the total with the tip

  let resultTotalBill = resultTip + billNumber;
  // console.log({ resultTotalBill });
  let roundTotalBill = resultTotalBill.toFixed(2);
  // console.log({ roundTotalBill });
  // console.log(typeof roundTotalBill);

  //  calculate the partial tip with the people number

  let resultPartialTip = resultTip / peopleNumber;
  // console.log({ resultPartialTip });
  let roundPartialTip = resultPartialTip.toFixed(2);
  // console.log({ roundPartialTip });
  // console.log(typeof roundPartialTip);

  //  calculate the partial  bill  with tip with the people number

  let resultPartialBill = resultTotalBill / peopleNumber;
  // console.log({ resultPartialBill });
  let roundPartialBill = resultPartialBill.toFixed(2);
  // console.log({ roundPartialBill });
  // console.log(typeof roundPartialBill);

  //   ! Outputs

  totalTip.innerHTML = `Die Gesamttrinkgeldmenge beträgt € ${roundTip}`;
  totalBill.innerHTML = `Die Gesamtrechnung beträgt € ${roundTotalBill}`;
  partialTip.innerHTML = `Jeder muss € ${roundPartialTip} Trinkgeld zahlen`;
  partialBill.innerHTML = `Jeder muss € ${roundPartialBill} für die komplete Rechnung mit Trinkeld bezahlen`;

  // extra : add in if/else change the background if the service was good/bad or neutral
}
