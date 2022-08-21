const objectArray = [];


function addToCart(element){
    const name = element.parentNode.parentNode.children[0].innerText;
    const price = element.parentNode.parentNode.children[1].children[0].innerText;


    const elementObj = {
        productName: name,
        productPrice: parseFloat(price)
    }
    objectArray.push(elementObj);

    displayCart(objectArray);

    console.log(objectArray);
}




function displayCart(arr){
    
    document.getElementById('cart-item').innerText = (arr.length);
    document.getElementById('cart-item-total').innerText = (arr.length);
    document.getElementById('item-total').innerText = (arr.length);


    let totalPrice = 0;

    const tableBody = document.getElementById('table-body');
    const modalTableBody = document.getElementById('modal-table-body');

    tableBody.innerHTML = '';
    modalTableBody.innerHTML = '';

    
   for(let i = 0; i < arr.length; i++){


    totalPrice += arr[i].productPrice;

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${arr[i].productName}</td>
        <td>${arr[i].productPrice}</td>
    `;

    tableBody.appendChild(tr);


    const trModal = document.createElement('tr');
    trModal.innerHTML = `
        <th>${i + 1}</th>
        <td>${arr[i].productName}</td>
        <td>${arr[i].productPrice}</td>
    `;

    
    modalTableBody.appendChild(trModal);
   }


   
   const tr = document.createElement('tr');
    tr.innerHTML = `
        <th></th>
        <td>Total Price</td>
        <td>${totalPrice}</td>
    `;
    document.getElementById('subtotal').innerText = totalPrice;


    tableBody.appendChild(tr);






}