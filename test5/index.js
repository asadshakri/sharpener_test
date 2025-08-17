
// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
    const user = event.target.username.value;
    const em = event.target.email.value;
    const ph = event.target.phone.value;

    const details = {
        user: user,
        em: em,
        ph: ph
    }
    localStorage.setItem(details.em, JSON.stringify(details));

    display(details);
}
function display(details){
    const ul = document.createElement("ul");
    ul.innerHTML="";
    const newli = document.createElement("li");
    newli.textContent = `${details.user} ${details.em} ${details.ph}`;
    ul.appendChild(newli);
    
    const body = document.querySelector("body");
    body.appendChild(ul);


}

module.exports = handleFormSubmit;