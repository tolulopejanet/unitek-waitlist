var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email!';
        return false;
    }
    return true;
}

function validateForm(){
    if(!validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to join';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}