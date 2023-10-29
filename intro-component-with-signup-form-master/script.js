
function isEmptyField(value){
    return value==="";
}
function isValidEmail(value){
    return String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


function formValidation(e){
    const fname = document.querySelector("#first-name");
    const lname = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    if(isEmptyField(fname.value) || isEmptyField(lname.value) || isEmptyField(password.value) || !isValidEmail(email.value)){
        e.preventDefault();
        if(isEmptyField(fname.value)){
            fname.style.border = "1px solid hsl(0, 100%, 74%)";
            document.querySelector("#fname-error").style.display = "block";
            document.querySelector("#fname-mssg").style.display = "block";
        }
        else{
            fname.style.border = "1px solid rgba(128, 128, 128, 0.308)";
            document.querySelector("#fname-error").style.display = "none";
            document.querySelector("#fname-mssg").style.display = "none";
        }

        if(isEmptyField(lname.value)){
            lname.style.border = "1px solid hsl(0, 100%, 74%)";
            document.querySelector("#lname-error").style.display = "block";
            document.querySelector("#lname-mssg").style.display = "block";
        }
        else{
            lname.style.border = "1px solid rgba(128, 128, 128, 0.308)";
            document.querySelector("#lname-error").style.display = "none";
            document.querySelector("#lname-mssg").style.display = "none";
        }

        if(isEmptyField(password.value)){
            password.style.border = "1px solid hsl(0, 100%, 74%)";
            document.querySelector("#password-error").style.display = "block";
            document.querySelector("#password-mssg").style.display = "block";
        }
        else{
            password.style.border = "1px solid rgba(128, 128, 128, 0.308)";
            document.querySelector("#password-error").style.display = "none";
            document.querySelector("#password-mssg").style.display = "none";
        }

        if(!isValidEmail(email.value)){
            email.style.border = "1px solid hsl(0, 100%, 74%)";
            document.querySelector("#email-error").style.display = "block";
            document.querySelector("#email-mssg").style.display = "block";
        }
        else{
            email.style.border = "1px solid rgba(128, 128, 128, 0.308)";
            document.querySelector("#email-error").style.display = "none";
            document.querySelector("#email-mssg").style.display = "none";
        }
    }
}





const submitBttn = document.querySelector("#submit-bttn");

submitBttn.addEventListener('click',formValidation);