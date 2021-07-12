



class Drop {
    constructor(top,left)
    {
        this.top = top
        this.left = left
        this.id = "r-" + parseInt(Math.random()*10000000000)

    }

    sound() {
        this.audio = new Audio('audio/Big-Water-Bloop-C1-www.fesliyanstudios.com.mp3')
        this.audio.play()
    }
    render() {
        let surface = document.getElementById('water-surface')
        surface.innerHTML += `
        <div id='${this.id}' class="ripple" style="top: ${this.top}%; left:${this.left}%">
            <div class="displace"></div>
            <div class="light"></div>
        </div>`
        this.sound()
        setTimeout(()=>{
            let this_repple = document.getElementById(this.id)
            this_repple.className = ''
        },9000)
    }


}
