const modal = document.querySelector("#modal");
const closeBtn = document.querySelector('#modal-close-btn');
const consent = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
// const modalAccept = document.querySelector(".modal-btn");

setTimeout(function(){
modal.style.display ="inline"
}, 1500)

function closeModal(){
    modal.style.display ="none"
}

function consentForm(e){
e.preventDefault()
modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;

}



consent.addEventListener("submit", consentForm)
closeBtn.addEventListener("click", closeModal)