const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#modal-close-btn');
const consent = document.querySelector('#consent-form');
const modalText = document.querySelector('#modal-text');
const declineBtn = document.querySelector("#decline-btn")
const modalBtns = document.querySelector('#modal-choice-btns');

setTimeout(function () {
  modal.style.display = 'inline';
}, 1500);

function closeModal() {
  modal.style.display = 'none';
}

function consentForm(e) {
  e.preventDefault();

const consentFormData = new FormData(consent)

const name = consentFormData.get("fullName")

  modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;

setTimeout(function(){
document.querySelector('#uploadText').innerText = `Making the sale...`;

},1500)


setTimeout(function(){
    consent.style.display = "none"
    document.querySelector(
      '#modal-inner'
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    closeBtn.disabled = false;
},3000)
}

function modalHover(){

modalBtns.classList.toggle("reverse")

}

declineBtn.addEventListener("mouseenter", modalHover)
consent.addEventListener('submit', consentForm);
closeBtn.addEventListener('click', closeModal);
