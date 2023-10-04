
function toggleAns(e){
    const quesNo = this.dataset.quesno;
    const anss = document.querySelectorAll(".ans-container");
    let finalAns;
    anss.forEach(ans=>{
        if (ans.dataset.ansno ===quesNo){
            finalAns = ans;
        }
    });
    const arrows = document.querySelectorAll(".arrow-container");
    let finalArrow;
    arrows.forEach(arrow=>{
        if(arrow.dataset.arrowno ===quesNo){
            finalArrow = arrow;
        }
    });
    if(window.getComputedStyle(finalAns).display === "none"){
        e.target.style.color = "black";
        e.target.style.fontWeight = "700";
        finalAns.style.display = "block";
        finalArrow.style.transform="rotate(180deg)"
    }
    else{
        e.target.style.color = "hsl(237, 12%, 33%)";
        e.target.style.fontWeight = "400";
        finalAns.style.display = "none";
        finalArrow.style.transform="rotate(0deg)"
    }
}

const ques = document.querySelectorAll(".ques-container");
ques.forEach((q)=>{
    q.addEventListener("click",toggleAns);
});