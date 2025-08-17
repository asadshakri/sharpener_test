
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const text = document.getElementById("fruit-to-add");
    const textvalue = text.value;
    const newli = document.createElement("li");
    const litext = document.createTextNode(textvalue);
    newli.appendChild(litext);
    newli.className = "fruit";

    const dbutt = document.createElement("button");
    const textb = document.createTextNode("x");
    dbutt.appendChild(textb);
    dbutt.className = "delete-btn";
    newli.appendChild(dbutt);

   const editbtn = document.createElement("button");
    const textedit = document.createTextNode("Edit");
    editbtn.appendChild(textedit);
    editbtn.className = "edit-btn";
    newli.appendChild(editbtn);

    fruits.appendChild(newli);
   
})
const fruit = document.querySelector('.fruits');
fruit.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn'))
    {
        const removlist = event.target.parentElement;
        fruit.removeChild(removlist);
    }  
})

const f = document.querySelectorAll(".fruit");
for (let i = 0; i < f.length;i++){
const createbtn = document.createElement("button");
const textcreate = document.createTextNode("Edit");
createbtn.appendChild(textcreate);
createbtn.className = "edit-btn";
    f[i].appendChild(createbtn);
}