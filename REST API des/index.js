var apiUrl = "https://crudcrud.com/api/3cfb6fb4a7774670b2e2c0cf4812dfa6/orderData";
window.addEventListener('DOMContentLoaded',()=>{
    axios.get(apiUrl)
    .then((response)=>{
        console.log(response);
        for(let i=0;i<response.data.length;i++){
            showOrderDetails(response.data[i]);
        }
    }).catch((error)=>{
        console.log(error);
    });
});

function handleSubmit(event){
    event.preventDefault();
    const price = document.getElementById('price').value;
    const dish = document.getElementById('dish').value;
    const table = document.getElementById('table').value;


    async function post()
    {
    const orderDetails = { price,dish,table };
     try{

      const create=await axios.post(apiUrl,orderDetails);
  
      console.log(create);
      showOrderDetails(create.data);
      }
      catch(err){
         console.log(err)
      }   
  
    }
     post()
    }

    function showOrderDetails(order){
        const li=document.createElement('li');
        li.textContent=`${order.price} - ${order.dish} - ${order.table}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent='Delete Order';
        li.appendChild(deleteBtn);
        
        deleteBtn.addEventListener('click',()=>{
            deleteOrder(order._id, li);});

        document.getElementById(order.table).appendChild(li);   
    }

    function deleteOrder(orderId, listItem){
        axios.delete(`${apiUrl}/${orderId}`)
        .then((response)=>{
            console.log(response);
            listItem.remove();
        }).catch((error)=>{
            console.log(error);
        });
    }
    
