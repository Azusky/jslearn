class Slide {
    constructor(url){
        this.url = url
    }

    render (rootSelector){
        let parentDiv = document.querySelector(rootSelector)
        this.slideElement = document.createElement('div')
        this.slideElement.className = 'slide'

        for(let y = 1; y <= 12; y++){
            for(let x = 1; x <= 16; x++){
                let sq = document.createElement('div')
                sq.className = 'sq'
                sq.style.top =`${(y-1) *50}px`
                sq.style.left=`${(x-1) *50}px`

                sq.style.backgroundImage = `url(${this.url})`
                sq.style.backgroundPositionY =`${-(y-1) *50}px`
                sq.style.backgroundPositionX=`${-(x-1) *50}px`

                this.slideElement.appendChild(sq)
            }
        }
        if(parentDiv.firstElementChild)
            parentDiv.removeChild(parentDiv.firstElementChild)

        parentDiv.appendChild(this.slideElement)

    }

    addEffect(){
        for(let i = 0; i < this.slideElement.children.length; i++){
            this.slideElement.children[i].style.animation = `fadeOut 1s linear ${Math.random()}s forwards`
        }
    }
}


class Carousel {
    constructor(rootSelector, slides){
        this.rootSelector = rootSelector
        this.slides =slides
    }

    render( slideIndex) {
        this.slides[slideIndex].render(this.rootSelector)
    }

    next(){
        this.slides.push(this.slides.shift())
        this.render(0)
    }
}

////////////////////////////////////////////////////////////
const carousel = new Carousel('.carousel',  [
    new Slide('images/643-800x600.jpg'),
    new Slide('images/837-800x600.jpg'),
    new Slide('images/1035-800x600.jpg'),
])
carousel.next()
