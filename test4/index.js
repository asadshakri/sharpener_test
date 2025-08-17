const form = document.querySelector("form");

const adddesc = document.createElement("input");

adddesc.type = "text";
adddesc.id = "description";

const btn = form.querySelector("button");
form.insertBefore(adddesc,btn);

// Show the fruit description in italics on the next line
const fruits = document.querySelector(".fruits");
form.addEventListener("submit", function (event){
    event.preventDefault();
    const fruitadd = document.getElementById("fruit-to-add");
    const text1 = fruitadd.value;
    const fruitdesc = document.getElementById("description");
    const text2 = fruitdesc.value;

    const para = document.createElement("p");
    para.textContent = text2;
    para.style.fontStyle = "italic";
    const newli = document.createElement("li");
    
    const textli = document.createTextNode(text1);
    

    newli.appendChild(textli);
    newli.appendChild(para);
    newli.className = "fruit";

    const dbutt = document.createElement("button");
    const textb = document.createTextNode("x");
    dbutt.appendChild(textb);
    dbutt.className = "delete-btn";
    newli.appendChild(dbutt);


    fruits.appendChild(newli);




})


const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {

    const search = event.target.value.toLowerCase();
    const fr = document.getElementsByClassName("fruit");
    for (let i = 0; i < fr.length; i++) {
        const ele = fr[i].firstChild.textContent.toLowerCase();
        const ele2 = fr[i].querySelector("p")?fr[i].querySelector("p").textContent.toLowerCase():"";
        if (ele.includes(search) || ele2.includes(search)) {
            fr[i].style.display = "flex";
        } else {
            fr[i].style.display = "none";
        }
    }
})
