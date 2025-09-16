var apiURL= "http://localhost:4000/users";

window.addEventListener("DOMContentLoaded", function () {
    axios
        .get(`${apiURL}`)
        .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            displayUserOnScreen(response.data[i]);
        }
        })
        .catch((error) => console.log(error));
});

function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };

    add(userDetails);
  
      document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
    const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);
  
  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", ()=> deleteuser(userDetails.id, userItem));
  editBtn.addEventListener("click", ()=> edituser(userDetails, userItem));
   
}

function add(userDetails) {
    axios
    .post(
      `${apiURL}`,
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));
}
    
function edituser(userDetails, userItem) {
  document.getElementById("username").value = userDetails.username;
  document.getElementById("email").value = userDetails.email;
  document.getElementById("phone").value = userDetails.phone;
  deleteuser(userDetails.id, userItem);

 // add(user);
 
}
function deleteuser(userId, userItem) {
    const userList = document.querySelector("ul");
    axios
    .delete(
      `${apiURL}/${userId}`
    )
    .then((response) => {console.log(response);
      userList.removeChild(userItem);
    })
    .catch((error) => console.log(error));

}
