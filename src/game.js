export class game{
    constructor(player1,player2){
        this.player1 = player1;
        this.player2 = player2;
        this.turn = 0;
    }



    shipPlacements(arr){
        let ships = [4,3,3,2,2,2,1,1,1,1];
        for(let i = 0 ; i < ships.length ; i++){
            this.player1.board.placeShips(arr[i],ships[i]);
        }
        for(let i = 0 ; i < ships.length ; i++){
            this.player2.board.placeShips(arr[i],ships[i]);
        }
    }

    incrementTurn(){
        this.turn += 1;
        if(this.turn % 2 == 0){
            this.player2.playersTurn();
            this.player1.enemyTurn();
        }
        else{
            this.player1.playersTurn();
            this.player2.enemyTurn();
        }
    }
    
    
}