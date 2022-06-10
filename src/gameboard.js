import { shipClass } from "./shipClass";

export class gameboard{
    constructor(){
        this.board = Array(100); 
        this.missedShots = [];
        this.hits = [];
        this.ships = [];
    }

    placeShips(tileNo,length){
        const ship  = new shipClass(length);
        this.ships.push(ship);
        ship.placeShip(tileNo);
        for(let i = 0 ; i < length ; i++){
            this.board.splice(tileNo+i,1,true);
        }
    }
    receiveAttack(tileNo){
        if(this.board[tileNo] == true){
            for (let i = 0 ; i < this.ships.length ; i++){
                if(this.ships[i].isSunk() == false){
                    if(this.ships[i].shipPosition.includes(tileNo)){
                        this.ships[i].hit(tileNo);
                    }
                }
            }
            this.board[tileNo] = false;
            this.hits.push(tileNo);
        }
        else if(this.board[tileNo] == false){
            //This tile was already hit.
        }
        else{
            this.hits.push(tileNo);
            this.board[tileNo] = false;
            this.missedShots.push(tileNo);
        }
    }
    isAllSunk(){
        for(let i = 0 ; i < this.ships.length ; i++){
            if(this.ships[i].isSunk() == false){
                return false;
            }
            else{
                return true;
            }
        }
    }
}