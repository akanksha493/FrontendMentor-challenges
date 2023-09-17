

function colorRating(e){
    const givenRating  = parseInt(e.target.textContent);
    document.querySelector("#your-rating").textContent = givenRating;
    
    // making array of nodelist 
    const ratingArray = [...document.querySelectorAll(".ratings")];
    
    for(let i=0;i<ratingArray.length;i++){
        if(i<givenRating){
            ratingArray[i].classList.add("rating-active");
        }else{
            ratingArray[i].classList.remove("rating-active");
        } 
    }
}

function submit(){
    document.querySelector("#rating-state").style.display = "none";
    document.querySelector(".outer-container").style.display = "block";
}

const rating = document.querySelectorAll(".ratings");
rating.forEach((rating)=>{
    rating.addEventListener("click",colorRating);
});

const submitBttn = document.querySelector("#submit");
submitBttn.addEventListener("click",submit);