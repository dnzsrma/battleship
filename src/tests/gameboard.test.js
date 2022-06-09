import { getExportStyleCode } from 'style-loader/dist/utils';
import {gameboard} from '../gameboard'

let board = new gameboard();

beforeEach(() => {
    board = new gameboard();
})

test('Creates board',() => {
    expect(board.board).toEqual(Array(100));
});

test('Can place ship on board',() =>{
    board.placeShips(0,4);
    for(let i = 0; i < 4 ; i++){
        expect(board.board[i]).toBeTruthy();
    }
});

test('Receives Attack', () => {
    board.placeShips(3,4);
    board.receiveAttack(4);
    expect(board.board[4]).toBe(false);
    expect(board.hits).toEqual([4]);
    expect(board.ships[0].alreadyHit).toEqual([4]);
});

test('Misses shots', () => {
    board.placeShips(1,3);
    board.placeShips(10,5);
    board.receiveAttack(10);
    board.receiveAttack(14);
    board.receiveAttack(2);
    board.receiveAttack(40);
    expect(board.board[10]).toBe(false);
    expect(board.board[14]).toBe(false);
    expect(board.board[3]).toBe(true);
    expect(board.board[2]).toBe(false);
    expect(board.hits).toEqual([10,14,2,40]);
    expect(board.missedShots).toEqual([40]);
    expect(board.ships[0].shipPosition).toEqual([1,3]);
    expect(board.ships[0].alreadyHit).toEqual([2]);
    expect(board.ships[1].shipPosition).toEqual([11,12,13]);
    expect(board.ships[1].alreadyHit).toEqual([10,14]);
});