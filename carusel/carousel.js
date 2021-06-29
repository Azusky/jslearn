


const IMAGES = [
    "image/643-800x600.jpg",
    "image/837-800x600.jpg",
    "image/1035-800x600.jpg",
]

const TITLES = [
    "Beach",
    "Dog",
    "Cascade",
]

let currentIndex = 0

const EFFECTS = [
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInLeft",
    "animate__fadeInRight",
]


function showImage(n)
{
    let i = Math.round(Math.random() * 3)
    carouselSlides.innerHTML =
                        `
                        <img
                            src="${IMAGES[n]}"
                            class="animate__animated ${EFFECTS[i]}"
                        />
                        `
}


function showTitle(n)
{

    carouselTitles.innerHTML =
                        `
                        <h2>${TITLES[n]}<h2>
                        `
}


function showIndicators(n)
{
    carouselIndicators.innerHTML = ``
    for (let i=0; i<IMAGES.length; i++)
    {
        if(i == n)
        {
            carouselIndicators.innerHTML += ` + `
        }
        else
        {
            carouselIndicators.innerHTML += ` - `
        }
    }
}

function next()
{
    if(currentIndex < (IMAGES.length -1) )
    {
        showImage(++currentIndex)
        showTitle(currentIndex)
        showIndicators(currentIndex)
        console.log(currentIndex)
        console.log(IMAGES[currentIndex])
    }

}

function prev()
{
    if(currentIndex > 0)
    {

        showImage(--currentIndex)
        showTitle(currentIndex)
        showIndicators(currentIndex)
        console.log(currentIndex)
        console.log(IMAGES[currentIndex])
    }

}
showImage(currentIndex)
showTitle(currentIndex)
showIndicators(currentIndex)
console.log(IMAGES[currentIndex])


function play()
{
    setInterval( next,3000)
}
function action()
{
    switch(event.key)
    {
        case "ArrowLeft":
            prev()

            break

        case "ArrowRight":

            next()
            break
    }
}
