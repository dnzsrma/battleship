export class shipClass{
    
    constructor(length) {
        this.length = length;
        this.alreadyHit = [];
        this.shipPosition = Array(length);
        this.sunk = false;
    }

    placeShip = (startsAt) => {
        for(let i = 0 ; i < this.length; i++){
            this.shipPosition[i] = startsAt + i;
        }
        return this.shipPosition;
    }
    
    hit = (hitPosition) => {
          if(this.shipPosition.includes(hitPosition)){
              this.alreadyHit.push(hitPosition);
              this.shipPosition = this.shipPosition.filter(value => value !== hitPosition);
              if(this.shipPosition.length === 0){
                  this.sunk = true;
                
              }
          }
          else{
              //that place is already hit.
              alert('You cant hit same spot twice.');
          }
    }

    isSunk = () => {
        if(this.sunk){
            return true;
        }
        else{
            return false;
        }
    }
}