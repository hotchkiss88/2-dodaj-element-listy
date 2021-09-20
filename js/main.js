let list = document.getElementById("items");
console.log(list);

let btn = document.getElementsByTagName("button")[0];
console.log(btn);

let i = 3;

const addElementItem = (e) => {
    i++;

    let li = document.createElement("li");

    list.appendChild(li);

    li.classList += "item";

    li.innerText += "Item " + i.toString();

}

btn.addEventListener("click", addElementItem);