const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');

addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = Number(productPriceInput.value);

  console.log('Name: ', name);
  console.log('Price:', price);
})