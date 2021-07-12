

class Cart {

    constructor(id) {
        this.id =id
        this.items = []
    }

    render(rootID) {
        let root =  document.getElementById(rootID)
        root.innerHTML = ``
        let count = this.items.length
        let countLabel = 'empty'
        if(count > 0 ){
           countLabel = `${count} items`
        }
        let html = `
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="images/Full-Cart-icon.png" alt="">
                        Cart (${countLabel})
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

            </ul>`
            root.innerHTML = html
    }
    addProduct(e){
        let product = e.target
        let productID = product.getAttribute('data-product-id')
        console.log(productID)
    }
}
