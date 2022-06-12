import { player } from "./player";

export class game{
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
        this.turn = 1;
        this.pressed= [];
        this.aiPlaced = [];
    }



    shipPlacements(arr){
        let ships = [4,3,3,2,2,2,1,1,1,1];
        for(let i = 0 ; i < ships.length ; i++){
            this.player1.board.placeShips(arr[i],ships[i]);
        }
        this.aiPlace();
    }

    incrementTurn(){
        this.turn += 2;
    }
    
    checkWhoseTurn(){
        if(this.turn % 2 == 0){
            this.player2.playersTurn();
            this.player1.enemyTurn();
            console.log(this.turn + 'computer turn');
        }
        else{
            this.player1.playersTurn();
            this.player2.enemyTurn();
            console.log(this.turn + 'player turn');
        }   
    }

    aiPlay(){
        let hit = Math.floor(Math.random() * 100);
        while(this.pressed.includes(hit)){
            hit += 1 ;
        }
        this.player1.board.receiveAttack(hit);
        this.pressed.push(hit);
        this.checkPlayerBoard(hit);
        this.checkIfGameEnded();
    }

    aiPlace(){
        let ships = [4,3,3,2,2,2,1,1,1,1];
        let array = [];
        let x = 0;
        while(array.length < ships.length){
            let number = Math.floor(Math.random() * 100);
            if((Math.floor(number/10) * 10) < (number) && (Math.floor(number/10) * 10) + 9 > (number + ships[x])){ 
                if(!this.aiPlaced.includes(number)){
                    array.push(number);
                    x += 1;
                }                  
                for(let i = 0; i < ships[x] ; i++){
                    this.aiPlaced.push(number + i);
                }
 
            }
            else{
                number = Math.floor(Math.random() * 100);
            }
        }
        for(let i = 0 ; i < ships.length ; i++){
            this.player2.board.placeShips(array[i],ships[i]);
            console.log(ships[i] + ' placed ' + 'at ' + array[i]);
        }
    }
    checkPlayerBoard(hit){
            if(this.player1.board.missedShots.includes(hit)){
                document.getElementsByClassName('gameboard-tile-player')[hit].style.backgroundColor = 'red';
            }
            else if(this.player1.board.hits.includes(hit) && !this.player1.board.missedShots.includes(hit)){
                document.getElementsByClassName('gameboard-tile-player')[hit].style.backgroundColor = 'green';
            }

    }
    checkIfGameEnded(){
        if(this.player1.board.isAllSunk()){
            alert('Ai won!');
            location.reload();
        }
        else if(this.player2.board.isAllSunk()){
            alert('Player won!');
            location.reload();
        }
    }
}