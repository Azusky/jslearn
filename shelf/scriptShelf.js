let bookShelf = {
    top: null,
    middle: null,
    bottom: null
}


var what = prompt("What to put on the shelf?");
var where = prompt("On which shelf?");

bookShelf[where] = what;

var table = document.createElement('table');

var body = document.querySelector('body');
for (var i in bookShelf) {
    console.log(i)
    var tr = document.createElement("tr");
    var shelf = document.createElement("td");
    valuesShelf = bookShelf[i];
    shelf.appendChild(document.createTextNode(valuesShelf));
    tr.appendChild(shelf);
    table.appendChild(tr);
};
body.appendChild(table)
console.log(table);
