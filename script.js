const boxes=document.querySelectorAll(".box");

let turn=1;
boxes.forEach( (b) =>{
    b.addEventListener("click",()=>{
        if(turn==1){
            b.innerText="O";
            turn=0;
        }
        else{
            b.innerText="X";
            turn=1;
        }
        b.disabled=true;
        winner();
    });
} );

win=[[0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],];
c=0;
var p=document.querySelector("#result");

winner=()=>{
    for(i of win){
        v1=boxes[i[0]].innerText;
        v2=boxes[i[1]].innerText;
        v3=boxes[i[2]].innerText;
        // console.log("clicked"+v1,v2,v3);
        win_name="";
        if(v1==v2 && v1==v3 && v1!=""){
            win_name=v1;
            
        }
        if(win_name=="" && c==9){
            p.innerText="The game is a Tie";
            boxes.forEach( (b) =>{b.disabled=true;} )
        }
        else if(win_name=="X"){
            p.innerText="X is the winner";
            boxes.forEach( (b) =>{b.disabled=true;} )
        }
        else if(win_name=="O"){
            p.innerText="O is the winner";
            boxes.forEach( (b) =>{b.disabled=true;} )
        }
    }
    c++;
}



