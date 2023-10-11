const cartArray = [];

function display(cartProduct) {
  //   console.log(cartProduct);
  const tableBody = document.getElementById('cart-product');
  tableBody.innerHTML = '';
  for (let i = 0; i < cartProduct.length; i++) {
    // console.log(cartProduct[i].productName, cartProduct[i].productPrice);
    const name = cartProduct[i].productName;
    const price = cartProduct[i].productPrice;

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name}</td>
    <td>${price}</td>
    `;
    tableBody.appendChild(tr);
  }
}

// console.log('connected');
function addToCart(element) {
  //   console.log(element.parentNode.parentNode.children[0].innerText);
  const productName = element.parentNode.parentNode.children[0].innerText;
  //   console.log(productName);
  //   console.log(element.parentNode.parentNode.children[1].innerText);
  const productPrice =
    element.parentNode.parentNode.children[1].children[0].innerText;
  //   console.log(productPrice);

  const productObj = {
    productName: productName,
    productPrice: parseFloat(productPrice),
  };
  cartArray.push(productObj);
  //   console.log(cartArray);

  document.getElementById('total-added-product').innerText = cartArray.length;
  display(cartArray);
}
