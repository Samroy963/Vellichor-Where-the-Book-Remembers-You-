var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var addButton = document.getElementById("addButton");


addButton.addEventListener("click",function(){
    overlay.style.display = "block";
    popup.style.display = "block";
})

var cancelPopup = document.getElementById("cancelPopup");

cancelPopup.addEventListener("click",function(event){
     event.preventDefault();
     popup.style.display = "none";
     overlay.style.display = "none";
})

var addBook = document.getElementById("addBook");
var container = document.querySelector(".container");
var bookTitle = document.getElementById("bookTitle");
var bookAuthor = document.getElementById("bookAuthor");
var bookDesc = document.getElementById("bookDesc");

addBook.addEventListener("click",function(event){
    event.preventDefault();
    if (bookTitle.value.trim() === "" || bookAuthor.value.trim() === "" || bookDesc.value.trim() === "") {
        alert("Please fill all the required fields!");
        return;
    }
    var div = document.createElement("div");
    div.setAttribute("class","bookContainer");
    div.innerHTML = `
                    <h2>${bookTitle.value}</h2>
                    <h5>${bookAuthor.value}</h5>
                    <p>${bookDesc.value}</p>
                    <button onclick="deleteBook(event)">Delete</button>
                    `
    container.append(div);
    overlay.style.display = "none";
    popup.style.display = "none";
    bookTitle.value = "";
    bookAuthor.value = "";
    bookDesc.value = "";
})

function deleteBook(event){
   event.target.parentElement.remove();
}
