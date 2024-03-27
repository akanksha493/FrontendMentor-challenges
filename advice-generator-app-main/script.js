function getNewAdvice(){
    fetch("https://api.adviceslip.com/advice?t="+Math.random(), {mode:'cors'})
    .then(function(response){
        if(response.ok){
            return response.json();
        }else{
            throw new Error("Network Error");
        }
    }).then(function(response){
        render(response.slip.id, response.slip.advice);
    }).catch(function(error){
        alert(error);
    });
}
function render(id, advice){
    const adviceId = document.querySelector(".advice-id");
    const adviceContainer = document.querySelector(".advice-advice");
    adviceId.textContent = id;
    adviceContainer.textContent = `"${advice}"`;
}

const fetchBttn = document.querySelector(".fetch-bttn");
fetchBttn.addEventListener("click", getNewAdvice);

getNewAdvice();
