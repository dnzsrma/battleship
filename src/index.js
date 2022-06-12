import css from "./style.css";
import { player } from "./player";
import { game } from "./game";
import { createBoard, createPlacementBoard } from "./ui";

createPlacementBoard();
let arr = [];
let ships = [4,3,3,2,2,2,1,1,1,1];
let x = 0;
function setArr(num){
    if(arr.length < 9){
        if( num + ships[x] > (Math.floor(num/10) * 10) + 9){
            alert('Cant place ship here.');
        }
        else{
            arr.push(num);
            for(let i = 0 ; i < ships[x]; i++){
                document.getElementsByClassName('placement-tile')[num+i].classList.add('blue');
            }
            x += 1;
        }
    }
    else{
        arr.push(num);
        let p1 = new player();
        let computer = new player();
        let game1 = new game(p1,computer);
        game1.shipPlacements(arr);
        createBoard(game1);
    }
}
//TODO: 
// Aynı butona tekrar basılmaması için kontrol eklenecek. Tüm gemiler battığında oyunun
// bitmesi sağlanacak.

export{setArr}