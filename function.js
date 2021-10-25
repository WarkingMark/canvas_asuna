/*Для создания выбора эмоций в стандартном варианте, не нужно!)*/
function createTable (count, parent,text) {
    let line = 1;
    let index_two = 1;

    for (let index = 1; index <= count; index++) {
        if(index_two % 3 == 0 && index_two !== 0) {
            let button = document.createElement('button');
            button.classList.add('change-button');
            button.setAttribute('number', index_two);
            button.setAttribute('line', line);
            button.innerHTML = `${text} ${line}_${index}`;
            parent.appendChild(button);
            index_two = 0;
            line++
        } else {
            let button = document.createElement('button');
            button.classList.add('change-button');
            button.setAttribute('number', index_two);
            button.setAttribute('line', line);
            button.innerHTML = `${text} ${line}_${index}`;
            parent.appendChild(button);   
        }
        index_two++
    }
}
function changeFrame(config, line, number,indentX, indentY) {
    let sWidth = config.sWidth;
    let sHeight = config.sHeight;
    let spriteHeight = config.spriteHeight;
    let spriteWidth = config.spriteWidth;
    let sy = config.sy;
    let sx = config.sx;

    number == 1 ? number = 0 : number = number - 1;

    sx = sx + (spriteWidth * number - 1) + (indentX * number - 1)
    line >= 2 ? sy = sy + (spriteHeight * line) + (indentY * line) : console.log('line < 2')

    context.drawImage(
        asuna,
        sx, sy, spriteWidth, spriteHeight,
        sWidth, sHeight, spriteWidth, spriteHeight
    )

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}