

let listOfWishesNow = ["Salt", "Pepper", "Sugar"];

const productListID = "listOfProducts";
const displayDivID = "myList";

function getList() {
    let list = document.getElementById(productListID);
    if (list) {
        return list;
    }
    list = document.createElement('ol');
    list.setAttribute('id', productListID);

    var myListDiv = document.getElementById(displayDivID);
    myListDiv.appendChild(list);
    return list;
}
function listProducts(listP) {
    var list = getList();
    list.innerHTML = '';

    listP.forEach(function (product) {
        var li = document.createElement('li');
        li.textContent = product;
        list.appendChild(li)
    });
};


function addProduct() {
    product = prompt('do you want to add a new product?');
    console.log(typeof product)
    vipProduct = confirm("This is Vip Product?");
    if (product != '') {
        if (vipProduct) {
            listOfWishesNow.unshift(product);
        }
        else {
            listOfWishesNow.push(product);
        }
        listProducts(listOfWishesNow);
    }
    else {
        alert('error, empty product');
    }
}

function startExecution() {
    listProducts(listOfWishesNow);
}
