const item = [

            'Lorem',
            'Men',
            'Won',
            'Bar',
            'Poll',
            'Shuhy',
            'MUrg',
            'Loly',
            'Gog'
]
const TOTAL = 9
let eWidth = 0
let dropOpen = false
const BTN = 50

function adapt()
{
    navbarDrop.innerHTML = ``
    for(let n=9; n>1;n--){
        estimateWidth(n)
        if(eWidth <= innerWidth){
            showItem(n)
            break
        }
    }

}
function estimateWidth(n)
{
    let text = ``
    let pad = 0
    for( let i = 0; i < n; i++)
    {
        text += item[i]
        pad += 2 * 10
    }
    eWidth = 11.5 * text.length + pad + BTN
    console.log(eWidth)

}

function showItem(n)
{
    navbar.innerHTML = ``
    for(let i = 0; i < n && i < item.length; i++)
    {
        navbar.innerHTML += `<a href="">${item[i]}</a>`

    }
    let remainig = TOTAL - n
    if (remainig > 0)
    {
        navbar.innerHTML += `<button onclick="showRemainingItems(${remainig})">
                                    <span>${remainig}</span>
                                    =
                            </button>`
    }
}

function showRemainingItems(n)
{
    if(dropOpen)
    {
        navbarDrop.innerHTML = ``
        dropOpen = false
    }
    else
    {
        //let list = `<ul></ul>`

        for(let i = TOTAL - n; i < TOTAL ; i++)
        {
            navbarDrop.innerHTML += `<li>
                            <a href=""> ${item[i]} </a>
                    </li>`

        }
        
        dropOpen = true

    }
}
