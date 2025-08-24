document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    const expenselist=JSON.parse(localStorage.getItem("expenselist")) || [];
    for(let i=0;i<expenselist.length;i++){
        display(expenselist[i]);
    }
}

function handleSubmit(event){
    event.preventDefault();
    const expenseamount=event.target.expenseamount.value;
    const description=event.target.description.value;
    const category=event.target.category.value;

    const expenseDetails={expenseamount,description,category};

    const expenselist=JSON.parse(localStorage.getItem("expenselist")) || [];

    const editId= sessionStorage.getItem("editId");
    if(editId)
    {
        update(expenselist, expenseDetails, editId);
    }
    else
    {
        addData(expenselist, expenseDetails);
    }
    localStorage.setItem("expenselist", JSON.stringify(expenselist));
    event.target.reset();

}

function display(data){
    const ul =document.querySelector("ul");
    const li=document.createElement("li");
    li.textContent = `${data.expenseamount}   ${data.description}   ${data.category}`;
    li.id = data.id;
    ul.appendChild(li);

    const deletebtn=document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", () => deleteData(data.id, li));
    deletebtn.style.marginLeft = "100px";
    deletebtn.style.margin="10px";
    const editbtn=document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.addEventListener("click", () => editData(data));
    editbtn.style.marginLeft = "10px";
    editbtn.style.margin="10px";

    li.appendChild(deletebtn);
    li.appendChild(editbtn);
}

function update(expenselist, expenseDetails, editId) {

    for (let i = 0; i < expenselist.length; i++) {
        if(expenselist[i].id == editId){
            expenselist[i].expenseamount = expenseDetails.expenseamount;
            expenselist[i].description = expenseDetails.description;
            expenselist[i].category = expenseDetails.category;
        }
    }
    const li = document.getElementById(editId);
    li.firstChild.textContent = `${expenseDetails.expenseamount}   ${expenseDetails.description}   ${expenseDetails.category}`;
    sessionStorage.removeItem("editId");
    const submitbtn = document.querySelector("button[type=submit]");
    submitbtn.textContent = "Add Expense"; 
}

function deleteData(id,li){
    const expenselist = JSON.parse(localStorage.getItem("expenselist")) || [];
    const updatedlist=[];
    for(let i=0;i<expenselist.length;i++){
        if(expenselist[i].id !=id){
            updatedlist.push(expenselist[i]);
        }
    }
    localStorage.setItem("expenselist", JSON.stringify(updatedlist));
    li.remove();
}

function editData(data) {
    const expenseamount = document.querySelector("#expenseamount");
    const description = document.querySelector("#description");
    const category = document.querySelector("#category");
    expenseamount.value = data.expenseamount;
    description.value = data.description;
    category.value = data.category;

    sessionStorage.setItem("editId", data.id);
    const submitbtn = document.querySelector("button[type=submit]");
    submitbtn.textContent = "Update Expense";
}
  

function addData(expenseList, expenseDetails) {
    expenseDetails.id = Date.now();
    expenseList.push(expenseDetails);
    display(expenseDetails);
}
    