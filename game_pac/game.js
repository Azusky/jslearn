let pig_x = 3;
let pig_y = 3;

let apple_x = 4;
let apple_y = 4;

let score = 0;


function action() {
    switch (event.key){
        case "ArrowUp": pig_y--; break

        case "ArrowDown": pig_y++; break

        case "ArrowRight": pig_x++; break

        case "ArrowLeft": pig_x--; break

    }
    if(pig_x == apple_x & pig_y == apple_y ) {
        score += 1
    }

    renderMap()
}

function renderMap() {

    gameMap.innerHTML = ""
    for(let y = 1; y<=10;y++){
        for(let x = 1; x<=10; x++) {
            if (x == pig_x && y == pig_y) {
                gameMap.innerHTML += `<div class= "pig"></div>`
            }
            else if (x == apple_x && y == apple_y) {
                gameMap.innerHTML += `<div class= "apple"></div>`
            }
            else {
                gameMap.innerHTML += `<div></div>`
            }
        }
    }

    gameScore.innerHTML = `Score: ${score}`
}

renderMap()


// hw1 : add limits map
// hw2 : add pig bomb and health points
// hw3 : apple, bomb - false/true < movement
// hw4 : add more coins bombs
