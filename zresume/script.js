/*function buyBike(planTrip) {
    setTimeout(function(){ console.log("Bought Royal Enfield Himalayan"); planTrip()}, 2000);
  }
  
  function planTrip() {
    setTimeout(() => { console.log("Trip to Ladakh") }, 1000);
  }
  buyBike(planTrip);*/

 /* const projectorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rented = false;
        if (rented)
            resolve("Projector rented successfully");
        else
            reject("Error: Projectors out of stock");
    },1000)
});

const pizzasPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rented = false;
        if (rented)
            resolve("Pizzas delivered at time");
        else
            reject("Error: Pizzas not delivered on time");
    },2000)
});

const friendsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const rented = false;
        if (rented)
            resolve("Both friends available");
        else
            reject("Error: Both friends not available");
    },3000)
});

Promise.all([projectorPromise, pizzasPromise, friendsPromise]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})*/

/*async function picnicDecision() {
  // Write your code here
  
    
      const checkWeather= await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSunny = false;
          if (isSunny)
            resolve("Let us go for picnic");
          else
            reject("Error: It is cloudy");
        },3000)
      })
       console.log(checkWeather);
       console.log("Picnic started");
  
}

picnicDecision();*/

/*function add(...num)
{
    let sum;sum=0;
    for(let i =0;i<num.length;i++)
    {
        sum=sum+num[i];
    }
    return sum;
}

console.log(add(1,2,3,4,5));*/

/*const list=document.querySelector("#work1");
console.log(list.children);*/

var n=2;

function sq(num){
    //var ans=num*num;
    return n;
}
var square2=sq(n);
