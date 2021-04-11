
let n = 1

function incrementN() {
    if(n < 10){
        n++
        update();
    }

}



function decrementN() {
    if(n > 0){
        n--;
        update();
    }

}

function update() {
    console.log(n);

    let span = document.querySelector("span");
    span.innerHTML = n;
}

function resetN(){
    n = 1
    update()

}
