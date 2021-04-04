

let listOfWishesNow = ["Salt", "Pepper", "Sugar"];

const productListID = "listOfProducts";
const displayDivID = "myList";

let getList = () => {
    let list = document.getElementById(productListID);
    if (list) {
        return list;
    }
    list = document.createElement('ol');
    list.setAttribute('id', productListID);

    // if (htmlList != undefined) {
    //     return htmlList;
    // }

    // htmlList = document.createElement('ol')
    var myListDiv = document.getElementById(displayDivID);
    myListDiv.appendChild(list);
    return list;


    // return htmlList;

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
            // var myList = document.querySelector('ol');
            listOfWishesNow.unshift(product);
            // var li = document.createElement('li')
            // var container = document.getElementById("#myList");
            // var content = container.innerHTML;
            // container.innerHTML = content;

            // //this line is to watch the result in console , you can remove it later
            // console.log("Refreshed");
            // listProducts(listOfWishesNow);
            // li.textContent = product;
            // myList.appendChild(li);
        }
        else {

            listOfWishesNow.push(product);
        }
        listProducts(listOfWishesNow);

    }
    else {
        alert('error');
    }
}

function startExecution () {
    listProducts(listOfWishesNow);
}
