

class Snake {
    constructor(x=0,y=0,dir="up") {

        this.dir=dir

        this.children = []
        this.children.push(new Head(x,y,this.dir))
        this.children.push(new Body(x+1,y,this.dir))
        this.children.push(new Tail(x+2,y,this.dir))





    }
    move()
    {

            this.children.reverse()
               this.children.forEach((s,i) =>{
                if(i == this.children.length -1)
                {
                  if(s.dir == 'up') {s.y--}
                  if(s.dir == 'right') {s.x++}
                  if(s.dir == 'down') {s.y++}
                  if(s.dir == 'left') {s.x--}
                }
                else
                {
                    if(s.x < this.children[i+1].x)
                    {
                        s.dir = "left"
                    }
                    if(s.x>this.children[i+1].x)
                    {
                        s.dir = "right"
                    }
                    if(s.y < this.children[i+1].y)
                    {
                        s.dir = "down"
                    }
                    if(s.y >this.children[i+1].y)
                    {
                        s.dir = "up"
                    }
                    s.x = this.children[i+1].x
                    s.y = this.children[i+1].y
                }
                })
            this.children.reverse()
    }


    render() {
        let html = ``
        for(let i=0; i<this.children.length;i++)
        {

            html += this.children[i].render()
        }
        return  html
    }
}
