

let gameMap = [0,0,0,0,1,0,0,2,0,0];
let man = 4
let dir = 'right'


function drawMap()
{
    m.innerHTML = ``
    for(let i = 0; i < gameMap.length; i++)
    {
        if(gameMap[i] == 0)
        {
            m.innerHTML += `<div></div>`
        }
        else if(gameMap[i] == 1)
        {
            m.innerHTML += `<div class="man ${dir}" ></div>`
        }
        else if(gameMap[i] == 2)
        {
            m.innerHTML += `<div class="burger"></div>`
        }

    }
};

drawMap()

function action()
{
    switch(event.key)
    {
        case "ArrowLeft":
            if(man > 0){
                gameMap[man] = 0
                man--
                gameMap[man] = 1
                dir = 'left'
                drawMap()
            }

            break

        case "ArrowRight":
            if(man < (gameMap.length - 1)){
                gameMap[man] = 0
                man++
                gameMap[man] = 1
                dir = 'right'
                drawMap()
            }

            break
    }
}
