
//debounce function

function debounce(func, delay) {
  let timeout;
  return function (...args) { 
        clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function validatePassword(){
    const query = searchinput.value;
    if(query!="password" && query!="")
    {
        message.textContent= "wrong password attempt" + ++c;
        message.style.color="red";
    }
    else if(query==""){
        message.textContent= "";
        c=0;
    } 
    else{
        message.textContent= "correct password";
        message.style.color="green";
        c=0;
    }

}


const searchinput = document.getElementById("password");
const message = document.getElementById("message");
let c=0;
searchinput.addEventListener("input", debounce(validatePassword, 1000));