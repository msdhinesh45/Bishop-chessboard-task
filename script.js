const boxes = document.querySelectorAll(".chess-board .row div");

boxes.forEach((box,index)=>{
    const row = Math.floor(index/8);
    const col = index % 8;

    box.addEventListener("mouseenter",()=>highlightDiagonals(row,col));
    box.addEventListener("mouseleave",()=>clearHighlights());
});

function highlightDiagonals(row,col){
    boxes.forEach((box,index)=>{
        const r = Math.floor(index / 8);
        const c = index % 8;

        if(Math.abs(r-row)===Math.abs(c-col)){
            box.classList.add("highlight");
        }
    })
}

function clearHighlights(){
    boxes.forEach((box)=>{
        box.classList.remove("highlight");
    });
};