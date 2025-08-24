document.addEventListener("DOMContentLoaded", initialize);

    // When the page get load display all users
function initialize() {
    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
    for (let i = 0; i < usersList.length; i++)
    {
        display(usersList[i]);
    }
}

    // add new users in usersList array
function handleFormSubmit(event) {  
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = { username, email, phone };

    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    const editId = sessionStorage.getItem("editId");

    if (editId) {
        for (let i = 0; i < usersList.length; i++) {
            if (usersList[i].id == editId) {
                usersList[i].username = userDetails.username;
                usersList[i].email = userDetails.email;
                usersList[i].phone = userDetails.phone;
            }
        }
        
        const li = document.getElementById(editId);
        li.firstChild.textContent = userDetails.username + " " + userDetails.email + " " + userDetails.phone;

        sessionStorage.removeItem("editId");
        const submitbtn = document.querySelector("button[type=submit]");
        submitbtn.textContent = "Submit"; // Reset the button text after editing

    }
    else {
        addData(usersList, userDetails);
    }
    localStorage.setItem("usersList", JSON.stringify(usersList));
    event.target.reset(); // Reset the form after submission

        

    }

    // use this function to display user on screen
function display(data) {

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = data.username + " " + data.email + " " + data.phone;
    li.id = data.id;
    ul.appendChild(li);

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", () => deleteData(data.id, li));

    li.appendChild(deletebtn);

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.addEventListener("click", () => editData(data));

    li.appendChild(editbtn);
        
    
    }

    // use this function to add user details into local storage
function addData(usersList, userDetails) {
    userDetails.id = Date.now();
    usersList.push(userDetails);
    display(userDetails);

    
    }


    // use this function to delete the user details from local store and DOM (screen)
function deleteData(id,li) {

    const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

    let updated = [];

    for (const user of usersList)
    {
        if (user.id != id)
        {
            updated.push(user);
        }
    }
    localStorage.setItem("usersList", JSON.stringify(updated));

    li.remove();
        
    
    }

    // use this function to update user details from local storage
function editData(data) {

    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");

    username.value = data.username;
    email.value = data.email;
    phone.value = data.phone;

    sessionStorage.setItem("editId", data.id);
    const submitbtn = document.querySelector("button[type=submit]");
    submitbtn.textContent = "Update";

}
module.exports = handleFormSubmit
