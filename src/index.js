import css from "./style.css";
import { player } from "./player";
import { game } from "./game";
import { createBoard } from "./ui";


let p1 = new player();
let computer = new player();

let game1 = new game(p1,computer);
game1.shipPlacements([5,23,70,78,96,28,31,48,51,65]);

createBoard(game1);

