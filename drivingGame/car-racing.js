let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let road = new Image();
let car1 = new Image();
let car2 = new Image();
let car3 = new Image();

road.src = './road.png'; //road.height=700; road.width=500;
car1.src = './car-1.png'; //car1.height=100;car1.width=50;
car2.src = './car-2.png';
car3.src = './car-3.png';

let car = {
    x: road.height/4.5,
    y: c.height-100
}
otherCar = [];
otherCar[0] ={
    x: road.height/4.5,
    y : 0
}

function runGame() {
    ctx.drawImage(road,0,0,500,900);
    ctx.drawImage(car1,car.x,car.y,50,70);
    for (i=0;i<otherCar.length;i++) {
        ctx.drawImage(car2,otherCar[i].x,otherCar[i].y,50,70);
        ctx.drawImage(car3,otherCar[i].x-130,otherCar[i].y-300,50,70);
        otherCar[i].y+=2
        if (otherCar[i].y==600) {
            otherCar.push({
                x: road.height/4.5,
                y: 0
            })
        }
        if (otherCar[i].y>road.height) {
            otherCar.splice(0,1)
        }
    }

    requestAnimationFrame(runGame);
}
window.addEventListener("keydown", control)

function control(evt) {
    switch (evt.keyCode) {
        case 39:
            car.x+=120;
            break;
        case 37:
            car.x-=120;
            break
        case 38:
            car.y -=20;
            break
        case 40:
            car.y+=30;
    }
}
runGame();
