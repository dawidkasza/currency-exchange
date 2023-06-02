{
    const calculateResult = (currency, exchange) => {
        const rateEUR = 4.52;
        const rateUSD = 4.22;
        const rateGBP = 5.21;
        const rateJPY = 0.030;
        const rateCZK = 0.19;
        
        switch (exchange) 
        {
            case "EUR":
                return currency / rateEUR;

            case "USD":
                return currency / rateUSD;

            case "GBP":
                return currency / rateGBP;

            case "JPY":
                return currency / rateJPY;

            case "CZK":
                return currency / rateCZK;
        }

    };

    const updateResultText = (currency, result, exchange) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${currency.toFixed(2)} zł to <strong>${result.toFixed(2)} ${exchange}</strong>`;
    };

    const onFormSubmit = (event) =>{
            event.preventDefault();
    
            const currencyElement = document.querySelector(".js-currency");
            const exchangeElement = document.querySelector(".js-exchange");
            
            const currency = +currencyElement.value;
            const exchange = exchangeElement.value;
            
            const result = calculateResult(currency, exchange);

            updateResultText(currency, result, exchange);
        };

    const init = () =>{
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}