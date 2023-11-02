

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validateForm(e){
    const email = document.querySelector("#email");
    if(!validateEmail(email.value)){
        e.preventDefault();
        document.querySelector(".error-mssg").style.display = "block";
        email.style.borderColor = "hsl(354, 100%, 66%)";
    }
    else{
        document.querySelector(".error-mssg").style.display = "none";
        email.style.borderColor = "hsla(0, 0%, 59%, 0.342)";
    }
}

const submitBttn = document.querySelector("#notify-bttn");
submitBttn.addEventListener("click", validateForm);