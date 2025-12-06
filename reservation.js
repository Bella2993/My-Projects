
const startReservationForm  = `
    <form id="start-reservation" class="w-50">
        <label for="exampleInputEmail1" class="form-label">Date</label>
        <div class="input-group mb-5">
            <input name="date" id="date" type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <label for="exampleInputEmail1" class="form-label">Number Of Guests</label>
        <div class="input-group mb-5">
            <input name="noGuests" id="noGuests" type="number" min="1" class="form-control" placeholder="No. of guests" aria-label="Username" aria-describedby="basic-addon1">
            <span class="input-group-text" id="basic-addon1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-rolodex" viewBox="0 0 16 16">
                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"/>
            </svg>
            </span>
        </div>

        <label for="exampleInputEmail1" class="form-label">Time</label>
        <div class="input-group mb-5">
            <input name="time" id="time" type="time" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Special Request</label>
            <textarea name="request" id="request" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </form>
`

const reservationContactDetails = `
    <form id="contact-details" class="w-50">
        <legend class="mb-5">Contact Details</legend>
        <div class="mb-5">
            <label for="firstName" class="form-label">First Name</label>
            <input name="firstName" type="text" class="form-control" id="firstName" aria-describedby="firstNameHelp">
        </div>

        <div class="mb-5">
            <label for="lastName" class="form-label">Last Name</label>
            <input name="lastName" type="text" class="form-control" id="lastName" aria-describedby="lastNameHelp">
        </div>

        <div class="mb-5">
            <label for="telephone" class="form-label">Telephone</label>
            <input name="telephone" type="text" class="form-control" id="telephone" aria-describedby="telephoneHelp">
        </div>

        <div class="mb-5">
            <label for="email" class="form-label">Email</label>
            <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
    </form>
`

const confirmReservation = `
    <div class="confirm-reservation">
        <legend class="mb-5 fw-medium">Confirm Reservation Details</legend>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">FirstName: </p>
        <p id="firstName" class="d-inline-block fs-3 fw-light mx-5">Belinda</p>
        </div>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">Last Name: </p>
        <p id="lastName" class="d-inline-block fs-3 fw-light mx-5">Aidoo</p>
        </div>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">Telephone: </p>
        <p id="telephone" class="d-inline-block fs-3 fw-light mx-5">0000</p>
        </div>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">Email: </p>
        <p id="email" class="d-inline-block fs-3 fw-light mx-5">bel.aidoo@gmail.com</p>
        </div>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">Date: </p>
        <p id="date" class="d-inline-block fs-3 fw-light mx-5">12/12/12</p>
        </div>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">Time: </p>
        <p id="time" class="d-inline-block fs-3 fw-light mx-5">00:00:00</p>
        </div>
        <div>
        <p class="d-inline-block fw-normal fs-3 w-25">No. Of Guests: </p>
        <p id="noGuests" class="d-inline-block fs-3 fw-light mx-5">5</p>
        </div>
    </div>
`
const formContainer = document.querySelector('#form-container')
const backBtn = document.querySelector('#back-btn')
const nextBtn = document.querySelector('#next-btn')

const steps = [startReservationForm, reservationContactDetails, confirmReservation]
let stepIdx = 0

let startReservationData = {date: '', time: '', request: '', noGuests: ''}
let contactData = {firstName: '', lastName: '', telephone: '', email: ''}

function main() {
    loadStep(0)
}

function loadStep(stepIdx) {
    if (stepIdx < 0 || stepIdx >= steps.length) return
    backBtn.disabled = stepIdx === 0
    //nextBtn.disabled = stepIdx === steps.length - 1
    nextBtn.innerHTML = (stepIdx == steps.length -1)? "Submit": "Next"
    if (stepIdx == steps.length -1) {
    }
    
    const stepContent = steps[stepIdx]
    formContainer.innerHTML = ''
    formContainer.innerHTML = stepContent

    loadSavedChanges(stepIdx)
}

function loadSavedChanges(stepIdx) {
    if (stepIdx < 0 || stepIdx > 2) return

    if(stepIdx == 0) {
        const {date, time, request, noGuests} = startReservationData
        formContainer.querySelector('#date').value = date;
        formContainer.querySelector('#time').value = time;
        formContainer.querySelector('#request').value = request;
        formContainer.querySelector('#noGuests').value = noGuests;
    } else if (stepIdx == 1) {
        const {firstName, lastName, telephone, email} = contactData
        formContainer.querySelector('#firstName').value = firstName;
        formContainer.querySelector('#lastName').value = lastName;
        formContainer.querySelector('#telephone').value = telephone;
        formContainer.querySelector('#email').value = email;
    } else if(stepIdx == 2) {
        const {date, time, request, noGuests} = startReservationData
        formContainer.querySelector('#date').innerHTML = date;
        formContainer.querySelector('#time').innerHTML = time;
        formContainer.querySelector('#noGuests').innerHTML = noGuests;
        const {firstName, lastName, telephone, email} = contactData
        formContainer.querySelector('#firstName').innerHTML = firstName;
        formContainer.querySelector('#lastName').innerHTML = lastName;
        formContainer.querySelector('#telephone').innerHTML = telephone;
        formContainer.querySelector('#email').innerHTML = email;

    }
}

function captureFormValues(form) {
    const formData = new FormData(form);
    const values = {};
    for (const [key, value] of formData.entries()) {
        values[key] = value;
    }
    return values
}

function saveChanges() {
    let form = null
    if(stepIdx == 0) {
        const startReservationForm = formContainer.querySelector('#start-reservation');
        form = startReservationForm
        const startValues = captureFormValues(form)
        startReservationData = {...startReservationData, ...startValues}
    } else if (stepIdx == 1) {
        const contactDetailsForm = formContainer.querySelector('#contact-details');
        form = contactDetailsForm 
        const contactValues = captureFormValues(form)
        contactData = {...contactData, ...contactValues}
    }
}

backBtn.addEventListener('click', () => {
    if(stepIdx <= 0) return
    saveChanges()
    stepIdx -= 1
    loadStep(stepIdx)
})

nextBtn.addEventListener('click', () => {
    if(stepIdx >= steps.length - 1) return
    saveChanges()
    stepIdx += 1
    loadStep(stepIdx)
})
main()
