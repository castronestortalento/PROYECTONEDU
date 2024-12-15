
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
    cartTotalElement.textContent = "0";
    return;
  }


  let total = 0;
  cart.forEach((item, index) => {
    total += item.amount * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${item.photo}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Precio: $${item.amount}</p>
        <p>Cantidad: ${item.quantity}</p>
        <p>Total: $${item.amount * item.quantity}</p>
      </div>
      <div class="cart-item-actions">
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });


  cartTotalElement.textContent = total;
}


function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}


document.getElementById("clear-cart").addEventListener("click", () => {
  if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

document.addEventListener("DOMContentLoaded", renderCart);