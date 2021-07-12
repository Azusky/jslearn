

class Product {
    constructor(id, name,images, price) {
        this.id = id
        this.name = name
        this.images = images
        this.price = price
    }
    render() {
        let html =`
        <div class="card m-2" style="width: 18rem;">
            <img src="${this.images}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.price.amount} ${this.price.currency}</p>
                <a href="#" data-product-id='${this.id}' class="btn btn-primary btn-add-to-cart">Add to card</a>
            </div>
        </div>`
        return html
    }
}
