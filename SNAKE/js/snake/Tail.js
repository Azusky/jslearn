class Tail {

    constructor(x=0,y=0, dir) {
        this.x= x
        this.y= y
        this.dir = dir
        this.bgPsX = -0
        this.bgPsY = -0
    }

    render()
    {
        switch(this.dir)
        {
            case "up":
                this.bgPsX = -192
                this.bgPsY = -128

               break

            case "down":
                this.bgPsX = -256
                this.bgPsY = -192

              break

            case "left":
                this.bgPsX = -256
                this.bgPsY = -128

                break

            case "right":
                this.bgPsX = -192
                this.bgPsY = -192
                break
        }
        return `
                <div
                style="
                       width: 64px;
                       height: 64px;
                       background: url(images/snake.png);
                       background-position-x: ${this.bgPsX}px;
                       background-position-y: ${this.bgPsY}px;
                       position: absolute;
                       top:${this.y*64}px;
                       left:${this.x*64}px;
                       ">
                    </div>
                `
    }
}
