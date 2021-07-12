

const catalog = [
    new Product('1', "Potato", "images/potatoes-4331742_640.jpg",{amount: 15, currency: "MDL"}),
    new Product(2, "Onions", "images/onions-1397037_640.jpg",{amount: 10, currency: "MDL"}),
    new Product(3, "Meat", "images/meat-3139641_640.jpg",{amount: 75, currency: "MDL"})
]




const renderCatalog = (rootID) => {
    let root =  document.getElementById(rootID)
    root.innerHTML = ``
    catalog.forEach(product => root.innerHTML += product.render())

    let btns = document.querySelectorAll('.btn-add-to-cart')

    btns.forEach(btn =>{
        btn.addEventListener('click', cart.addProduct)
    })
}
