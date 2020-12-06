/* global storeItems */
let m_section = document.querySelector('#section');
let m_allProducts = document.querySelector('#m_all');
let m_apple = document.querySelector('#m_apple');
let m_samsung = document.querySelector('#m_samsung');

function itemToSection(item) {
  let productDiv = document.createElement('div');
  productDiv.className = 'product-wrapper';
  let productImageDiv = document.createElement('div');
  productImageDiv.className = 'product-image';
  let productImage = document.createElement('img');
  productImage.src = item.imageURL;
  productImage.alt = '';
  productImage.height = 170;
  productImageDiv.appendChild(productImage);
  let shopName = document.createElement('p');
  shopName.innerHTML = 'Kha Tech Shop';
  productImageDiv.appendChild(shopName);
  productDiv.appendChild(productImageDiv);

  let productInfoDiv = document.createElement('div');
  productInfoDiv.className = 'product-info';
  let productTitle = document.createElement('h2');
  productTitle.innerHTML = item.name;
  let productPrice = document.createElement('h3');
  productPrice.innerHTML = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD'
  }).format(item.price);
  productInfoDiv.appendChild(productTitle);
  productInfoDiv.appendChild(productPrice);
  productDiv.appendChild(productInfoDiv);
  return productDiv;
}

function loadAllItems() {
  m_section.innerHTML = '';
  for (let i = 0; i < storeItems.length; i++) {
    let itemDiv = itemToSection(storeItems[i]);
    m_section.appendChild(itemDiv);
  }
}

window.onload = loadAllItems();

m_allProducts.addEventListener('click', function() {
  loadAllItems();
});

m_samsung.addEventListener('click', function() {
  m_section.innerHTML = '';
  for (let i = 0; i < storeItems.length; i++) {
    if (storeItems[i].category === 'samsung') {
      let itemDiv = itemToSection(storeItems[i]);
      m_section.appendChild(itemDiv);
    }
  }
});

m_apple.addEventListener('click', function() {
  m_section.innerHTML = '';
  for (let i = 0; i < storeItems.length; i++) {
    if (storeItems[i].category === 'apple') {
      let itemDiv = itemToSection(storeItems[i]);
      m_section.appendChild(itemDiv);
    }
  }
});
