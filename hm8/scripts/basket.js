'use strict';

const basketBtn = document.querySelector('.cartIconWrap');
const basketHide = document.querySelector('.basket');
basketBtn.addEventListener('click', function () {
  basketHide.classList.toggle('hidden');
});

const basketCounter = document.querySelector('.cartIconWrap span');
function increaseProductsCount() {
  basketCounter.textContent++;
};

let basket = {};
function addProductToCart(productId) {
  if (!(productId in basket)) {
    basket[productId] = 1;
  } else {
    basket[productId]++;
  }
};

function increaseProductCount(productId) {
  const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
  productCountEl.textContent++;
};

function sumForProduct(productId) {
  const productTotalRowEL = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
  let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
  productTotalRowEL.textContent = totalPriceForRow;
};

const basketTotalEl = document.querySelector('.basketTotal');
function renderNewProductInBasket(productId) {
  let productRow = `
  
    <div class="basketRow">
      <div>${products[productId].name}</div>
      <div>
        <span class="productCount" data-productId="${productId}">1</span> шт.
      </div>
      <div>$${products[productId].price}</div>
      <div>
        $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
      </div>
    </div>

  `;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
};

function renderProductInBasket(productId) {
  let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
  if (productExist) {
    increaseProductCount(productId);
    sumForProduct(productId);
  } else {
    renderNewProductInBasket(productId);
  }
};

const basketTotalValueEl = document.querySelector('.basketTotalValue');
function calculateTotalBasketPrice() {
  let totalSum = 0;
  for (let productId in basket) {
    totalSum += basket[productId] * products[productId].price;
  }
  basketTotalValueEl.textContent = totalSum.toFixed(2);
};

function addProductIntoBasket(productId) {
  increaseProductsCount();
  addProductToCart(productId);
  renderProductInBasket(productId);
  calculateTotalBasketPrice();
};