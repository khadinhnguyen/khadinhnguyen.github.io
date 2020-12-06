let orderFieldContainer = document.querySelector('#order-number-field-container');
let orderField = document.querySelector('#order-number-field');
let orderProbSelection = document.querySelector('#customer-order-problem');
let commentSelection = document.querySelector('#customer-comment');
let questionSelection = document.querySelector('#customer-question');

orderProbSelection.addEventListener('click', function() {
  orderFieldContainer.appendChild(orderField);
});

commentSelection.addEventListener('click', function() {
  orderFieldContainer.removeChild(orderField);
});

questionSelection.addEventListener('click', function() {
  orderFieldContainer.removeChild(orderField);
});
