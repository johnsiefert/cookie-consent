const modal = document.querySelector("#modal");
const closeBtn = document.querySelector('#modal-close-btn');
const consent = document.querySelector("#consent-form");

setTimeout(function(){
modal.style.display ="inline"
}, 1500)

function closeModal(){
    modal.style.display ="none"
}

function consentForm(e){
e.preventDefault()
console.log("form submitted")
}

consent.addEventListener("submit", consentForm)
closeBtn.addEventListener("click", closeModal)