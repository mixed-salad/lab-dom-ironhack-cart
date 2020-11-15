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
  const totalPrice = subtotalPricesArray.reduce((total, price) => total + price, 0);
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerHTML = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
