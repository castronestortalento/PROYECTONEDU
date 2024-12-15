// Recuperar el carrito del localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Función para renderizar los productos del carrito
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  // Limpiar el contenedor
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
    cartTotalElement.textContent = "0";
    return;
  }

  // Generar los elementos del carrito
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

  // Actualizar el total
  cartTotalElement.textContent = total;
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Función para vaciar el carrito
document.getElementById("clear-cart").addEventListener("click", () => {
  if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

// Renderizar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", renderCart);