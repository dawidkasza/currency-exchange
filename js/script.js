let currencyElement = document.querySelector(".js-currency");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let rateEUR = 4.52;
let rateUSD = 4.22;
let rateGBP = 5.21;
let rateJPY = 0.030;
let rateCZK = 0.19;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = +currencyElement.value;
    let exchange = exchangeElement.value;
    let result;
    

    
    switch (exchange) 
    {
        case "EUR":
            result = currency / rateEUR;
        break;

        case "USD":
            result = currency / rateUSD;
        break;

        case "GBP":
            result = currency / rateGBP;
        break;

        case "JPY":
            result = currency / rateJPY;
        break;

        case "CZK":
            result = currency / rateCZK;
        break;
    }

    resultElement.innerHTML = `${currency.toFixed(2)} zł to <strong>${result.toFixed(2)} ${exchange}</strong>`;
});
