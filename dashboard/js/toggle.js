const text = document.querySelector(".text");
const changeButton = document.querySelector(".changeColor");
const userList = document.querySelector(".item-list");
const listInput = document.querySelector(".input-list")
const addList = document.querySelector(".addListBtn");




text.style.backgroundColor ="skyblue";
changeButton.style.backgroundColor= "gray";

changeButton.addEventListener("click", function(){
    text.classList.toggle("change");
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    
    newLi.appendChild(liContent);
    userList.appendChild(newLi);

})