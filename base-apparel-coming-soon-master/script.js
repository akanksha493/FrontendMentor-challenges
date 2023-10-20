
function isEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validateEmail(){
    const errorIcon = document.querySelector(".error-icon");
    const email = document.querySelector("#email");
    const errorMssgDiv = document.querySelector(".error-mssg");
    console.log(email.value);
    if(!isEmail(email.Value)){
        errorMssgDiv.textContent = "Please provide a valid email";
        email.style.border = "2px solid hsl(0, 93%, 68%)";
        errorIcon.style.display = "block";
        return false;
    }
    else{
        errorMssgDiv.textContent = "";
        email.style.border = "1px solid hsl(0, 36%, 70%)";
        errorIcon.style.display = "none";
        return true;
    }
}

const submitBttn = document.querySelector("#form-bttn");
submitBttn.addEventListener("click",validateEmail);
