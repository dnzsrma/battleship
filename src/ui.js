function createBoard(game){
    game.incrementTurn();
    let container = document.createElement('div');
    container.classList.add('game-board-container');
    for(let i = 0 ; i < game.player1.board.board.length ; i++){
        let btn = document.createElement('button');
        if(game.player1.board.board[i] == true){
         btn.style.backgroundColor = 'blue';   
        }
        btn.onclick = function(){
            if(game.player1.isTurn == false){
                game.incrementTurn();
                game.player1.board.receiveAttack(i);
                if(game.player1.board.missedShots.includes(i)){
                    btn.style.backgroundColor = 'red';
                }
                else if(game.player1.board.hits.includes(i) && !game.player1.board.missedShots.includes(i)){
                    btn.style.backgroundColor = 'green';
                }
            }
        }
        btn.innerText = i;
        btn.classList.add('gameboard-tile');
        container.appendChild(btn);
    }
    document.body.appendChild(container);
    let container2 = document.createElement('div');
    container2.classList.add('game-board-container');
    for(let i = 0 ; i < game.player2.board.board.length ; i++){
        let btn2 = document.createElement('button');
        btn2.innerText = i;
        btn2.onclick = function(){
            if(game.player2.isTurn == false){
                game.incrementTurn();
                game.player2.board.receiveAttack(i);
                if(game.player2.board.missedShots.includes(i)){
                    btn2.style.backgroundColor = 'red';
                }
                else if(game.player2.board.hits.includes(i) && !game.player2.board.missedShots.includes(i)){
                    btn2.style.backgroundColor = 'green';
                }
                
            }
        }
        btn2.classList.add('gameboard-tile');
        container2.appendChild(btn2);
    }
    document.body.appendChild(container2);
}

export{
    createBoard
}