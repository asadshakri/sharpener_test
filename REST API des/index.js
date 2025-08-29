window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/fb42ac7af33142cba894ed8f8fda382a/orderData")
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

    const orderDetails = {
        price,
        dish,
        table
    };

    axios.post('https://crudcrud.com/api/fb42ac7af33142cba894ed8f8fda382a/orderData', orderDetails)
        .then((response)=>{
            console.log(response);
            showOrderDetails(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }


    function showOrderDetails(order){
        const li=document.createElement('li');
        li.textContent=`${order.price} - ${order.dish} - ${order.table}`;

        const tableType = order.table.toLowerCase();

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent='Delete Order';
        li.appendChild(deleteBtn);
        
        deleteBtn.addEventListener('click',()=>{
            deleteOrder(order._id, li);});

        
            document.getElementById(order.table).appendChild(li);
        
    }

    function deleteOrder(orderId, listItem){
        axios.delete(`https://crudcrud.com/api/fb42ac7af33142cba894ed8f8fda382a/orderData/${orderId}`)
        .then((response)=>{
            console.log(response);
            listItem.remove();
        }).catch((error)=>{
            console.log(error);
        });
    }
