

const shareContainer = document.querySelector(".share-container");
const downArrow = document.querySelector(".down-arrow");

const shareBttn = document.querySelector(".share");
shareBttn.addEventListener("click",function(){
    if(getComputedStyle(shareContainer).display=="none"){
        shareContainer.style.display = "block";
        downArrow.style.display = "block"
    }else{
        shareContainer.style.display = "none";
        downArrow.style.display = "none"
    }
    
});