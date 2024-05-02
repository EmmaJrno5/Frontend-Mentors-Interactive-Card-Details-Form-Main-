const cardNo = document.querySelector("#card-no");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
const cardCvc = document.querySelector("#cvc");
const cardName = document.querySelector("#card-name");
const confirm = document.querySelector("#confirm")
const form_container = document.querySelector(".form-container-manual")
const success_message_container = document.querySelector("#success_message_container")

/* Output Places */
const cardHolderName = document.querySelector(".cardholder-name");
const cardHolderNumber = document.querySelector(".cardholder-number");
const cardHolderDate = document.querySelector(".card-date-valid")
const cardHolderCvc = document.querySelector(".card-cvc")


/* Error Messages */
const month_year_error = document.querySelector(".month-year_error")
const card_name_error = document.querySelector(".card-name-error")
const cvc_error = document.querySelector(".cvc-error")
const card_no_error = document.querySelector(".card-no-error")

/* Confirm Inputs */
function validate(){
  let isValid = true
  if(cardMonth.value !== "" && cardYear.value !== ""){
    
    month_year_error.style.visibility = "hidden"
    
    if(((cardMonth.value >= cardMonth.min && cardMonth.value <= cardMonth.max) || (cardMonth.value.slice(1) >= cardMonth.min && cardMonth.value.slice(1) <= cardMonth.max)) && ((cardYear.value >= cardYear.min && cardYear.value <= cardYear.max) || (cardYear.value >= cardYear.min.slice(2,4) && cardYear.value <= cardYear.max.slice(2,4))) ){
    cardHolderDate.innerText = `${cardMonth.value}/${cardYear.value.length === 4 ? cardYear.value.slice(2,4) : cardYear.value}`
    
  }
  else{
        month_year_error.innerText = "Wrong Format"
        month_year_error.style.visibility = "visible"
        isValid = false
  }
  }

else{
  month_year_error.innerText = "Can't be blank"
  month_year_error.style.visibility = "visible"
  isValid = false
}
  if (cardName.value !== ""){
    
    card_name_error.style.visibility = "hidden"
    if((/^[a-zA-Z\s]*$/.test(cardName.value))){
   
 cardHolderName.innerText = cardName.value
 
  }
 
  else{
    card_name_error.innerText = "Wrong format, only word characters allowed"
    card_name_error.style.visibility = "visible"
    isValid = false
  }
  }
  else{
    card_name_error.innerText = "Can't be blank"
    card_name_error.style.visibility = "visible"
    isValid = false
  }
  if (cardCvc.value !== ""){
    cvc_error.classList.remove("error-visible")
    if(cardCvc.value.length == cardCvc.maxLength){
 cardHolderCvc.innerText = cardCvc.value
    }
    else{
      cvc_error.innerText = "Wrong format, Must be 3 numbers"
      cvc_error.classList.add("error-visible")
      isValid = false
    }
  }
  else{
    cvc_error.innerText = "Can't be blank"
    cvc_error.classList.add("error-visible")
    isValid = false
  }
  if (cardNo.value !== ""){
    card_no_error.classList.remove("error-visible")
    if(cardNo.value.length === 16 && (/^\d+$/).test(cardNo.value)){
    let separated = cardNo.value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");

  cardHolderNumber.innerText = separated
    }
    else{
      card_no_error.innerText = "Wrong Format"
   card_no_error.classList.add("error-visible")
   isValid = false
    }
  }
  else{
   card_no_error.innerText = "Can't be blank"
   card_no_error.classList.add("error-visible")
   isValid = false
  }
  return isValid;
}
confirm.addEventListener("click",(e)=>{
  e.preventDefault();
  
  
  // Show Success Message
  if(validate()){
  success_message_container.style.display = "block"
  form_container.style.display = "none"
  }
})