const form = document.querySelector('.theForm');
let fname = document.querySelector('#firstName');
let lname = document.querySelector('#lastName');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
properlyFilled = 0;


const popup = $('.popupWrapper');
const submit = $('#submitForm');



form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (fname.value === "") {
        fname.className = 'emptyField'
    } else {
        fname.className = 'filled'
        properlyFilled++
    }

    if (lname.value === "") {
        lname.className = 'emptyField'
    } else {
        lname.className = 'filled'
        properlyFilled++

    }

    if ((email.value === "") || (email.value.indexOf('@') == -1) || (email.value.indexOf('.') == -1)) {
        email.className = 'emptyField';
    } else {
        email.className = 'filled'
        properlyFilled++

    }

    if (message.value === "") {
        message.className = "emptyField";
    } else {
        message.className = "filled";
        properlyFilled++

    }
    if (properlyFilled >= 4) {
        $(popup).fadeIn("slow");
        $('.popupContent p').html(`Thank you ${fname.value} ${lname.value} for contacting us! <br> Your message has been received <br> <br>the Mardi Gras Team`)
        setTimeout(() => {
                $(popup).fadeOut("slow");
            }, 3500),
            form.reset()

    }
})