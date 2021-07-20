'use strict';

function productMarkup(product) {
  return `
        <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="images/featured/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="images/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

const featuredItemsEl = document.querySelector('.featuredItems');

function insertProducts(products, featuredItemsEl) {
  let productsMarkup = '';
  for (let product of products) {
    productsMarkup += productMarkup(product);
  };
  featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
};

function treatmentAddToCartBtn() {
  const addToCartBtns = document.querySelectorAll('button[data-productId]');
  addToCartBtns.forEach(function (button) {
    button.addEventListener('click', addedProduct);
  });
};

function addedProduct(event) {
  const productId = event.currentTarget.getAttribute('data-productId');
  addProductIntoBasket(productId);
};

insertProducts(products, featuredItemsEl);
treatmentAddToCartBtn();