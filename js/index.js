// ITERATION 1

function updateSubtotal(product) {
  console.log(product);
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subtotal = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  const subtotalPricesArray = [];
  for (let item of products) {
    subtotalPricesArray.push(updateSubtotal(item));
  }
  // ITERATION 3
  const totalPrice = subtotalPricesArray.reduce(
    (total, price) => total + price,
    0
  );
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removeElement = target.parentNode.parentNode;
  const table = document.getElementsByTagName('tbody');
  table[0].removeChild(removeElement);
  calculateAll();

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const tableElement = document.getElementsByTagName('tbody');
  const newProduct = document.querySelectorAll('.create-product input');
  let newProductName = newProduct[0].value;
  let newProductPrice = newProduct[1].value;
  
  const tableRowElement = document.createElement('tr');
  tableRowElement.className = 'product';

  // create new td elements 
    //name td
  const nameDataElement = document.createElement('td');
  nameDataElement.className = 'name';
  const nameValueElement = document.createElement('span');
  nameValueElement.innerHTML = newProductName;
  nameDataElement.appendChild(nameValueElement);
    //price td
  const priceDataElement = document.createElement('td');
  const priceValueElement = document.createElement('span');
  priceDataElement.className = 'price';
  priceDataElement.innerHTML = '$';
  priceValueElement.innerHTML = newProductPrice;
  priceDataElement.appendChild(priceValueElement);
    //quantity td
  const quantityDataElement = document.createElement('td');
  quantityDataElement.className = 'quantity';
  const quantityInputelement = document.createElement('input');
  quantityInputelement.type = 'number';
  quantityInputelement.value = '0';
  quantityInputelement.min = '0';
  quantityInputelement.placeholder = 'Quantity';
  quantityDataElement.appendChild(quantityInputelement);
  console.log(quantityDataElement);
    //subtotal td
  const subtotalDataElement = document.createElement('td');
  subtotalDataElement.className = 'subtotal';
  const subtotalValueElement = document.createElement('span');
  subtotalDataElement.innerHTML = '$';
  subtotalValueElement.innerHTML = '0';
  subtotalDataElement.appendChild(subtotalValueElement);
    //action td
  const actionDataElement = document.createElement('td');
  actionDataElement.className = 'action';
  const actionBtnElement = document.createElement('button');
  actionBtnElement.className = 'btn btn-remove';
  actionBtnElement.innerHTML = 'Remove';
  actionBtnElement.addEventListener('click', removeProduct);
  actionDataElement.appendChild(actionBtnElement);

  //Appending all the td elements to tr element
  tableRowElement.appendChild(nameDataElement);
  tableRowElement.appendChild(priceDataElement);
  tableRowElement.appendChild(quantityDataElement);
  tableRowElement.appendChild(subtotalDataElement);
  tableRowElement.appendChild(actionDataElement);

  //Appending tr to tbody
  tableElement[0].appendChild(tableRowElement);

  console.log(tableRowElement);
  //reset the values
  newProduct[0].value = '';
  newProduct[1].value = '0';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (btn of removeBtns) {
    btn.addEventListener('click', removeProduct);
  }

  const addBtn = document.getElementById('create');
  addBtn.addEventListener('click', createProduct);
  //... your code goes here
});
