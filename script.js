const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');

addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = Number(productPriceInput.value);

  if (!name || !price) return;

  const li = document.createElement('li');
  li.textContent = `${name} - $${price.toFixed(2)}`;

  document.getElementById(`cart`).appendChild(li);

  productNameInput.value = '';
  productPriceInput.value = '';
})