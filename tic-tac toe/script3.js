window.onload = function () {
    let move = 0;

    let game = true;

    document.getElementById('game').onclick = function (event) {
        if (event.target = document.getElementsByClassName('box')) {
            let fieldname = document.getElementById('whosemove')
            if (move % 2 == 0 && game) {
                event.target.innerHTML = 'X';
                fieldname.innerHTML = 'Zeroes move:';
            }
            else if (move % 2 != 0 && game) {
                event.target.innerHTML = 'O';
                fieldname.innerHTML = 'Crosses move:';
            }
            move++;
            if (Winner() === 3 && move >= 9) {
                fieldname.innerHTML = 'Draw!';
                game = false;
            }
            else if (Winner() === 1) {
                fieldname.innerHTML = 'Crosses won!';
                game = false;
            }
            else if (Winner() === 2) {
                fieldname.innerHTML = 'Zeroes won!';
                game = false;
            }

            if (game == false) {

            }
            document.getElementById('restart').onclick = function () {
                move = 0;
                console.log(game);
                fieldname.innerHTML = 'Loading...';
                game = true;
                document.getElementById('1').innerHTML = '';
                document.getElementById('2').innerHTML = '';
                document.getElementById('3').innerHTML = '';
                document.getElementById('4').innerHTML = '';
                document.getElementById('5').innerHTML = '';
                document.getElementById('6').innerHTML = '';
                document.getElementById('7').innerHTML = '';
                document.getElementById('8').innerHTML = '';
                document.getElementById('9').innerHTML = '';
            }
        }
        Winner();
    }

    function Winner() {
        let blocks = document.getElementsByClassName('box');
        let array = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (i = 0; i < array.length; i++) {
            if (blocks[array[i][0]].innerHTML == 'X' && blocks[array[i][1]].innerHTML == 'X' && blocks[array[i][2]].innerHTML == 'X') {
                return 1;
            }
            else if (blocks[array[i][0]].innerHTML == 'O' && blocks[array[i][1]].innerHTML == 'O' && blocks[array[i][2]].innerHTML == 'O') {
                return 2;
            }
            else {
                return 3;
            }
        }
    }


}