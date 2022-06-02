
const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = querySelector("form button");

for(let i = 0; i < dropList.length; i++) {
    for(currency_code in country_code){
        // Selected USD by default as FROM currency and NPR as TO currency.
        //let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "NPR" ? "selected" : ""; 
        }
        //creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option>`;
        // inserting option tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag)
    }
}

/*getButton.addEventListener("click", e =>{
    //e.preventDefault();
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    //if user dont enter any value or enter 0 then we'll put 1 value by default in the input field 
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    let url = `https://v6.exchangerate-api.com/v6/164ecb879f1c193c72d8a974/latest/USD${fromCurrency.value}`;
    fetch(url).then(response => console.log(response.json()));
}
