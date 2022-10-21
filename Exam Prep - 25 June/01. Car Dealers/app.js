window.addEventListener("load", solve);

function solve() {

  let makeInputElement = document.getElementById("make");
  let modelInputElement = document.getElementById("model");
  let yearInputElement = document.getElementById("year");
  let fuelInputElement = document.getElementById("fuel");
  let originalCostInputElement = document.getElementById("original-cost");
  let sellingPriceInputElement = document.getElementById("selling-price");
  let publishButton = document.getElementById("publish");
  let tableBody = document.getElementById("table-body");
  let UlElement = document.getElementById("cars-list");
  let totalProfit = document.getElementById("profit");
  let profitMade = 0;


  publishButton.addEventListener('click', (e) => {
    e.preventDefault()

    let makeValue = makeInputElement.value;
    let model = modelInputElement.value;
    let year = yearInputElement.value;
    let fuel = fuelInputElement.value;
    let originalCost = originalCostInputElement.value;
    let price = sellingPriceInputElement.value;

    if (!makeValue || !model || !year || !fuel || !originalCost || !price) {
      return;
    } else if (originalCost > price) {
      return;
    }

    let tableRowElement = document.createElement("tr");
    tableRowElement.classList.add("row");

    let makeTableData = document.createElement('td');
    let modelTableData = document.createElement('td');
    let yearTableData = document.createElement('td');
    let fuelTableData = document.createElement('td');
    let originalCostTableData = document.createElement('td');
    let priceTableData = document.createElement('td');
    let buttonTableData = document.createElement('td');
    let editButton = document.createElement('button');
    let sellButton = document.createElement('button');


    makeTableData.textContent = makeValue;
    modelTableData.textContent = model;
    yearTableData.textContent = year;
    fuelTableData.textContent = fuel;
    originalCostTableData.textContent = originalCost;
    priceTableData.textContent = price;
    editButton.textContent = 'Edit';
    sellButton.textContent = 'Sell';

    editButton.classList.add("action-btn");
    editButton.classList.add("edit");
    sellButton.classList.add("action-btn");
    sellButton.classList.add("sell");

    buttonTableData.appendChild(editButton);
    buttonTableData.appendChild(sellButton);

    tableRowElement.appendChild(makeTableData);
    tableRowElement.appendChild(modelTableData);
    tableRowElement.appendChild(yearTableData);
    tableRowElement.appendChild(fuelTableData);
    tableRowElement.appendChild(originalCostTableData);
    tableRowElement.appendChild(priceTableData);
    tableRowElement.appendChild(buttonTableData);

    tableBody.appendChild(tableRowElement);

    makeInputElement.value = "";
    modelInputElement.value = "";
    yearInputElement.value = "";
    fuelInputElement.value = "";
    originalCostInputElement.value = "";
    sellingPriceInputElement.value = "";

    editButton.addEventListener('click', (e) => {

      makeInputElement.value = makeValue;
      modelInputElement.value = model;
      yearInputElement.value = year;
      fuelInputElement.value = fuel;
      originalCostInputElement.value = originalCost;
      sellingPriceInputElement.value = price;

      tableRowElement.remove();

    })
    sellButton.addEventListener('click', (e) => {

      tableRowElement.remove();

      let liElement = document.createElement('li');
      liElement.classList.add('each-list');

      let spanMakeModelElement = document.createElement('span');
      let spanYearElement = document.createElement('span');
      let spanProfitElement = document.createElement('span');

      spanMakeModelElement.textContent = `${makeValue} ${model}`;
      spanYearElement.textContent = year;
      let profit = Number(price) - Number(originalCost);
      spanProfitElement.textContent = profit;

      liElement.appendChild(spanMakeModelElement);
      liElement.appendChild(spanYearElement);
      liElement.appendChild(spanProfitElement);

      UlElement.appendChild(liElement);

      profitMade += profit;
      totalProfit.textContent = profitMade.toFixed(2);

    })

  })
}
