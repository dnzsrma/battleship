import { gameboard } from "./gameboard";

export class player{
    constructor(){
        this.isTurn = false;
        this.board = new gameboard();
        this.ai = false;
    }
    playersTurn = () => {
        this.isTurn = true;
    }
    enemyTurn = () => {
        this.isTurn = false;
    }
}