window.onload=function(){
    let move=1;

    document.getElementById('game').onclick=function(event){
        if(event.target=document.getElementsByClassName('box')){
            let fieldname=document.getElementById('whosemove');
            move++;

            if(move%2==0){
                event.target.innerHTML='X';
                fieldname.innerHTML="Zeroes move:";
            }
            else{
                event.target.innerHTML='O';
                fieldname.innerHTML="Crosses move:";
            }

            if(move>=10){
                alert("Draw!")
            }
        }
        winner();
    }
    function winner(){
        let blocks=document.getElementsByClassName('box');

        if(blocks[0].innerHTML=='X'&&blocks[1].innerHTML=='X'&&blocks[2].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[3].innerHTML=='X'&&blocks[4].innerHTML=='X'&&blocks[5].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[6].innerHTML=='X'&&blocks[7].innerHTML=='X'&&blocks[8].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[0].innerHTML=='X'&&blocks[3].innerHTML=='X'&&blocks[6].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[1].innerHTML=='X'&&blocks[4].innerHTML=='X'&&blocks[7].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[2].innerHTML=='X'&&blocks[5].innerHTML=='X'&&blocks[8].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[0].innerHTML=='X'&&blocks[4].innerHTML=='X'&&blocks[8].innerHTML=='X'){
            alert("Crosses won!!!");
        }
        else if(blocks[2].innerHTML=='X'&&blocks[4].innerHTML=='X'&&blocks[6].innerHTML=='X'){
            alert("Crosses won!!!");
        }

        if(blocks[0].innerHTML=='O'&&blocks[1].innerHTML=='O'&&blocks[2].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[3].innerHTML=='O'&&blocks[4].innerHTML=='O'&&blocks[5].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[6].innerHTML=='O'&&blocks[7].innerHTML=='O'&&blocks[8].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[0].innerHTML=='O'&&blocks[3].innerHTML=='O'&&blocks[6].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[1].innerHTML=='O'&&blocks[4].innerHTML=='O'&&blocks[7].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[2].innerHTML=='O'&&blocks[5].innerHTML=='O'&&blocks[8].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[0].innerHTML=='O'&&blocks[4].innerHTML=='O'&&blocks[8].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
        else if(blocks[2].innerHTML=='O'&&blocks[4].innerHTML=='O'&&blocks[6].innerHTML=='O'){
            alert("Zeroes won!!!");
        }
    }
}