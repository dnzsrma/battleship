import { setArr } from ".";

function createBoard(game){
    document.body.innerHTML = '';
    game.checkWhoseTurn();
    let container = document.createElement('div');
    container.classList.add('game-board-container');
    for(let i = 0 ; i < game.player1.board.board.length ; i++){
        let btn = document.createElement('button');
        if(game.player1.board.board[i] == true){
         btn.style.backgroundColor = 'blue';   
        }
        btn.classList.add('gameboard-tile-player');
        btn.id = 'player-button' + i;
        container.appendChild(btn);
    }
    document.body.appendChild(container);
    let container2 = document.createElement('div');
    container2.classList.add('game-board-container');
    for(let i = 0 ; i < game.player2.board.board.length ; i++){
        let btn2 = document.createElement('button');
        btn2.onclick = function(){
            if(game.player2.isTurn == false && game.player1.isTurn == true){
                game.checkWhoseTurn();   
                game.player2.board.receiveAttack(i);
                if(game.player2.board.missedShots.includes(i)){
                    btn2.style.backgroundColor = 'red';
                }
                else if(game.player2.board.hits.includes(i) && !game.player2.board.missedShots.includes(i)){
                    btn2.style.backgroundColor = 'green';
                }
                game.incrementTurn();
                game.aiPlay();
            }
        }
        btn2.classList.add('gameboard-tile-ai');
        container2.appendChild(btn2);
    }
    document.body.appendChild(container2);
}

function createPlacementBoard(){
    let div = document.createElement('div');
    div.id = 'placement-div';
    for(let i = 0 ; i < 100 ; i++){
        let tile = document.createElement('button');
        tile.classList.add('placement-tile');
        tile.addEventListener('click',function(){
            setArr(i);
        });
        div.appendChild(tile);  
    }
    document.body.appendChild(div);
}

export{
    createBoard,
    createPlacementBoard
}