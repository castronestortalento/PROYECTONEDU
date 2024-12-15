var learningPrograms = [
    {
      id: 1,
      name: "Liderazgo",
      description:
        "Este curso está diseñado para equipar a los conductores de equipos con las herramientas y conocimientos necesarios para enfrentar los desafíos actuales en la conducción de personas.",
      amount: 15000,
      photo: "../images/liderazgo.png",
    },
    {
      id: 2,
      name: "Inteligencia Emocional",
      description:
        "Aprende la importancia de desarrollar la inteligencia emocional como una cualidad directamente conectada al Liderazgo, a la toma de decisiones, a la generación de contextos colaborativos paralograr un liderazgo efectivo.",
      amount: 17000,
      photo: "../images/inteligencia.jpg",
    },
    {
      id: 3,
      name: "Gestion de las Emociones",
      description:
        "En este curso se explicará importancia de desarrollar la inteligencia emocional como una cualidad directamente conectada al Liderazgo, a la toma de decisiones, a la generación de contextos colaborativos, creativos, de bienestar y al fortalecimiento de vínculos saludables; sabiendo que el éxito no depende únicamente de las cualidades técnicas e intelectuales.",
      amount: 25000,
      photo: "../images/emociones.png",
    },
    {
      id: 4,
      name: "Escucha Activa, Empatia y Asertividad",
      description:
        "La escucha activa, la empatía y la asertividad son habilidades esenciales en el proceso negociador. Al aplicar estas habilidades, se fomenta la comprensión mutua, se establece una comunicació efectiva y se crea un ambiente propicio para llegar a acuerdos satisfactorios para todas las partes involucradas.",
      amount: 18000,
      photo: "../images/empatia.png",
    },
    {
      id: 5,
      name: "Motivacion en el Trabajo",
      description:
        "Este curso de motivación está diseñado para impactar positivamente en tu liderazgo ya que te brindará diferentes técnicas, tips y herramientas para llevar adelante una conducción del equipo estimulante.",
      amount: 20000,
      photo: "../images/motivacion.jpg",
    },
    {
      id: 6,
      name: "Herramientas de Coaching",
      description:
        "Domina las técnicas para ayudar a remover los obstáculos tuyos y los de tus colaboradores, y así mejorar el rendimiento personal y profesional en el mundo de las ventas retail.",
      amount: 22000,
      photo: "../images/coaching.jpg",
    },
  ];
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function showPrograms() {
    const container = document.getElementById("courses-container");
  
    learningPrograms.forEach((curso) => {
      const card = document.createElement("div");
      card.className = "col-lg-4 col-md-6 col-sm-12 product-card";
  
      card.innerHTML = `
        <img src="${curso.photo}" alt="${curso.name}" class="product-image" style="width:100%; border-radius:8px;">
        <h3>${curso.name}</h3>
        <p><strong>Precio:</strong> $${curso.amount}</p>
          <button class="btn btn-details"><strong>Detalles</strong></button>
        <button class="btn btn-success btn-add-to-cart"><img src="../images/cart.png" class="cart-icon" alt="Carrito"></button>
        <div class="description"></div>
      `;
  
      card.querySelector(".btn-details").addEventListener("click", () => {
        const descriptionDiv = card.querySelector(".description");
        if (descriptionDiv.innerHTML === "") {
          descriptionDiv.innerHTML = `<p>${curso.description}</p>`;
        } else {
          descriptionDiv.innerHTML = "";
        }
      });
  
      card.querySelector(".btn-add-to-cart").addEventListener("click", () => {
        addToCart(curso);
      });
  
      container.appendChild(card);
    });
  }
  
  function addToCart(curso) {
    const existingProduct = cart.find((item) => item.id === curso.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...curso, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${curso.name} fue añadido al carrito`);
  }

  
  function showCart() {
    console.log("Carrito de Compras:", cart);
  }

  document.addEventListener("DOMContentLoaded", showPrograms);