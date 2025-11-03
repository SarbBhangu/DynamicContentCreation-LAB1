const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const totalPrice = document.querySelector(`#total-price`);
const cart = document.getElementById(`cart`);

let total = 0

function updateTotal(amount){
  total += amount;
  totalPrice.textContent = total.toFixed(2);
}
  
addProductButton.addEventListener('click', () => {
  const name = productNameInput.value.trim();
  const price = Number(productPriceInput.value);

   if (!name) {
    alert('Please enter a product name!');
    return;
  }

  const li = document.createElement('li');
    li.className = 'cart-item';
    li.dataset.price = String(price);
    li.innerHTML = `
      <span class="name">${name}</span>
      <span class="price">$${price.toFixed(2)}</span>
      <button class="remove">Remove</button>
  `;

  cart.appendChild(li);
  updateTotal(price);

  productNameInput.value = '';
  productPriceInput.value = '';
})

cart.addEventListener(`click` , (e) => {
  if (!e.target.classList.contains(`remove`)) return;

  const li = e.target.closest(`li`);
  const price = Number(li.dataset.price)|| 0;

  updateTotal(-price);
  li.remove();
})
