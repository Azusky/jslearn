

let product = [
    {
        name:'Dark souls',
        rating:10,
        img:'https://www.gematsu.com/wp-content/uploads/2011/05/Dark-Souls-PS3-Box-Art-JP.jpg',
        price:{
            amount:50,
            unit:'USD'
        }
    },
    {
        name:'Dark souls 2',
        rating:8,
        img:'https://lh4.googleusercontent.com/proxy/GJvRwe9LrSIAXIbHzzBUPai0kiAGh0XFIW70GBWJM_pCFJAq8t3IpQzcCoJsdT2YTZHhJtOwN0kGSz358JcvUouR6WULtuzWiin7Men4kRJmjPwK5zRdSVA2X_ObWYTp1IqoUL9TaEfT08fG_StZlos=s0-d',
        price:{
            amount:25,
            unit:'USD'
        }
    },
    {
        name:'Dark souls 3',
        rating: 12,
        img:'https://pbs.twimg.com/media/ExQJGetW8Aoba8T.jpg',
        price:{
            amount:55,
            unit:'USD'
        }
    },
    {
        name:'BloodBorn',
        rating:9.5,
        img:'https://static.miraheze.org/awesomegameswiki/7/72/476119-bloodborne-playstation-4-front-cover.jpg',
        price:{
            amount:80,
            unit:'USD'
        }
    },
    {
        name:'Sekiro',
        rating:9,
        img:'https://sun9-56.userapi.com/c856120/v856120709/b60d/0nARgZ2Nr-Q.jpg',
        price:{
            amount:90,
            unit:'USD'
        }
    },
]
let showCartStatus = false
let cart = []
function addToCart(i)
{
    let massage = `The product ${product[i].name}`
    alert(massage)
    cart.push(product[i])
}

function showCart()
{

    listP.innerHTML = ``
    if (!showCartStatus)
    {
        if(cart.length != 0)
        {
            for(let i=0; i < cart.length; ++i)
            {
                console.log(cart[i].name)
                listP.innerHTML += `
                                    <li>${cart[i].name}: ${cart[i].price.amount} ${cart[i].price.unit}</li>
                                    `
            }
            showCartStatus = true
        }
        else
        {
            alert('cart is emty!')
        }

    }
    else
    {
        listP.innerHTML = ``
        showCartStatus = false
    }



}

function showLProducts()
{
    for(let i=0; i<product.length; i++)
    {
        catalog.innerHTML += `
                            <div class="product">
                                <h2>${product[i].name}</h2>
                                <div> Rating:${product[i].rating}</div>
                                <div>${product[i].price.amount} ${product[i].price.unit}</div>

                                <img src="${product[i].img}">
                                <br>
                                <button onclick="addToCart(${i})">ADD to Card</button>
                                <hr>
        `
    }
}
showLProducts()
