import {shipClass} from '../shipClass'

let ship = new shipClass(4);

beforeEach(() => {
    ship = new shipClass(4)
  })


test('create 4 length ship that starts at 5', () =>
{
    ship.placeShip(5);
    expect(ship.shipPosition).toStrictEqual([5,6,7,8]);
})

test('ship takes hit', () =>
{   
    ship.placeShip(10);
    ship.hit(11)
    ship.hit(10)
    expect(ship.shipPosition).toStrictEqual([12,13]);
    expect(ship.alreadyHit).toStrictEqual([11,10]);
})

test('ship can sink', () =>
{   
    ship.placeShip(15);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit(15);
    ship.hit(16);
    ship.hit(17);
    ship.hit(18);
    expect(ship.isSunk()).toBeTruthy();
})

