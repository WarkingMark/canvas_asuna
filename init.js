let faces = document.querySelector('#faces');
let mouth = document.querySelector('#mouth');

let facesConfigSheets = {
    sWidth :  156,
    sHeight : 124,
    spriteHeight : 99,
    spriteWidth : 200,
    sy : 0,
    sx : 562
}

let mouthConfigSheets = {
    sWidth :  225,
    sHeight : 242,
    spriteHeight : 60,
    spriteWidth : 70,
    sy : 0,
    sx : 1191  
}


let asuna = new Image();
asuna.src = 'asuna.png';
asuna.onload = () => {
    context.drawImage(asuna, 
        0, 0, 557, 920, 
        0, 0, 557, 920
    );
}

let canvas = document.querySelector('#canvas__asuna');
let context = canvas.getContext('2d');

canvas.width = 573;
canvas.height = 920;

function randomAnimate(config, numberMin,numberMax, lineMin, lineMax, indectX, indectY) {
    let number = randomNumber(numberMin, numberMax);
    let line = randomNumber(lineMin, lineMax);
    console.log(number, line)
    changeFrame(config, number, line, indectX, indectY);
}
setInterval(() => {
    randomAnimate(
        mouthConfigSheets, 
        1, 4,
        1, 8, 
        8, 10
    );  
    randomAnimate(facesConfigSheets, 1, 4, 1, 4, 6, 11);   
}, 2000);