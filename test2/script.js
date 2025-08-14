const shop = document.querySelector("#main-heading");

shop.style.textAlign = "right";

const fruit = document.querySelector(".fruits");
fruit.style.backgroundColor = "grey";
fruit.style.padding = "30px";
fruit.style.margin = "30px";
fruit.style.width = "50%";
fruit.style.borderRadius = "5px";
fruit.style.listStyleType = "none";

const basket = document.querySelector("h2");
basket.style.marginLeft = "3px";
basket.style.color = "brown";
const item = document.querySelectorAll(".fruit");

for (let i = 0; i < item.length; i++)
{
    item[i].style.backgroundColor = "white";
    item[i].style.margin = "10px";
    item[i].style.padding = "10px";
    item[i].style.borderRadius = "5px";
}

const evenitems = document.querySelectorAll(".fruit:nth-child(even)");

for (let i = 0; i < evenitems.length; i++)
{
    evenitems[i].style.backgroundColor = "brown";
    evenitems[i].style.color = "white";
}