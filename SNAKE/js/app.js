let snake = new Snake(1,5,"up")
// snake.render()


let map = new Map()
let apple1 = new Apple(2,6)
let apple2 = new Apple(3,6)

map.children.push(apple1)
map.children.push(apple2)
map.children.push(snake)
map.render(container)

setInterval( ()=> {
        snake.move()
        map.render(container)
    },1000
)

const userAction = (e) => {
    console.log(e)
    switch(e.code) {
        case "ArrowUp":
            // snake.children.forEach(
            //     (s)=>{
            //         s.dir ='up'
            //     }
            // )
                snake.children[0].dir = 'up'
                // snake.children[1].dir = 'up'
                // snake.children[2].dir = 'up'
                break;
        case "ArrowRight":
            // snake.children.forEach(
            //     (s)=>{
            //         s.dir ='right'
            //     }
            // )
             snake.children[0].dir = 'right'
            //  snake.children[1].dir = 'right'
            //  snake.children[2].dir = 'right'

             break;
        case "ArrowDown":
            // snake.children.forEach(
            //     (s)=>{
            //         s.dir ='down'
            //     }
            // )
             snake.children[0].dir = 'down';
             break;
        case "ArrowLeft":
            // snake.children.forEach(
            //     (s)=>{
            //         s.dir ='left'
            //     }
            // )
             snake.children[0].dir = 'left'
             break;
    }
}
