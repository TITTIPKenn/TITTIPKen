let current = {
  name: "",
  price: 0,
  type: "ICE",
  size: "R",
  sugar: "Normal",
  Rprice: 0,
  Lprice: 0,
  category: "drink"
};

let cart = [];

/* =========================
   MENU DATA (FULL FIX)
========================= */

const menuData = [
  {
    category: "Kenangan Frappe",
    items: [
      { name: "Choco Caramel Frappe", R: 20000, L: 25000 },
      { name: "Butterscotch Kenangan Frappe", R: 22500, L: 26500 },
      { name: "Matcha Kenangan Frappe", R: 23500, L: 27500 },
      { name: "Kopi Kenangan Mantan Frappe", R: 22500, L: 25500 },
      { name: "Vanilla Kenangan Frappe", R: 20000, L: 24000 }
    ]
  },
  {
    category: "Non Coffee",
    items: [
      { name: "Butterscotch Sea Salt Crumble", R: 18000, L: 25500 },
      { name: "Milk Oreo Crumble", R: 20000, L: 24000 },
      { name: "Babyccino", R: 16500, L: 21000 },
      { name: "Caramel Dutch Choco", R: 20000, L: 24000 },
      { name: "Hazelnut Choco Milk Tea", R: 18000, L: 22000 },
      { name: "Kenangan Milk Tea", R: 16500, L: 26000 },
      { name: "Dutch Chocolate", R: 19000, L: 23000 },
      { name: "Milo Dinosaurus", R: 18000, L: 22000 },
      { name: "Oreo Shake", R: 19000, L: 23000 },
      { name: "Hazelnut Dutch Choco", R: 21000, L: 25000 },
      { name: "Lemon Black Tea", R: 14000, L: 18000 },
      { name: "Susu Grass Jelly", R: 18000, L: 22000 },
      { name: "Matcha Latte", R: 19000, L: 22500 },
      { name: "Avocado Milk", R: 18000, L: 22000 },
      { name: "Avocado Caramel", R: 20000, L: 24000 }
    ]
  },
  {
    category: "Coffee",
    items: [
      { name: "Kopi Kenangan Mantan", R: 15000, L: 19500 },
      { name: "Americano", R: 15000, L: 18500 },
      { name: "Latte", R: 17500, L: 21500 },
      { name: "Butterscotch Sea Salt Latte", R: 20500, L: 23500 },
      { name: "Cafe Malt Latte", R: 18000, L: 22000 },
      { name: "Kopi Susu Black Aren", R: 16500, L: 21000 },
      { name: "Spanish Latte", R: 16000, L: 19000 },
      { name: "Butterscotch Aren Latte", R: 17500, L: 21500 },
      { name: "Caramel Latte", R: 18500, L: 22000 },
      { name: "Mocha Latte", R: 20000, L: 23500 },
      { name: "Creamy Aren Latte", R: 18000, L: 22000 },
      { name: "Mocha Caramel", R: 19000, L: 21000 },
      { name: "Caramel Macchiato", R: 20000, L: 24000 },
      { name: "Avocado Coffee", R: 22500, L: 26000 },
      { name: "Cappuccino", R: 17500, L: 21500 },
      { name: "Pistachio Aren Latte", R: 17500, L: 22000 },
      { name: "Dua Shot Iced Shaken", R: 20000, L: 24000 },
      { name: "Matcha Espresso", R: 19000, L: 23000 },
      { name: "Vanilla Latte", R: 19000, L: 23000 },
      { name: "Hazelnut Latte", R: 19500, L: 23000 }
    ]
  },
  {
    category: "Cemilan",
    items: [
      { name: "Canele Aren", price: 13000 },
      { name: "Aren Apple Pie", price: 15000 },
      { name: "Choco Muffin", price: 13000 },
      { name: "Blueberry Muffin", price: 13000 },
      { name: "Strawberry Choux Puff", price: 12000 },
      { name: "Chocolate Choux Puff", price: 12000 },
      { name: "Bambang Choco Cheese", price: 13000 },
      { name: "Adam Ayam Toast", price: 14000 },
      { name: "Wahyu Sapi Toast", price: 14000 },
      { name: "Salt Bread Original", price: 11000 },
      { name: "Canele Original", price: 12000 },
      { name: "Butter Croissant", price: 12000 },
      { name: "Chocolate Croissant", price: 14000 },
      { name: "Donut Almond", price: 12000 },
      { name: "Roti Gulung Abon", price: 13500 },
      { name: "Roti Coklat Klasik", price: 8000 },
      { name: "Choco Chip Cookies", price: 11500 },
      { name: "Sandwich Smoked Beef", price: 17000 },
      { name: "Croissant Abon", price: 14000 },
      { name: "Join the Dark Side Cookie", price: 15000 },
      { name: "Friend Chip Cookie", price: 13000 }
    ]
  }
];

/* =========================
   RENDER MENU
========================= */

function renderMenu() {
  let menu = document.getElementById("menu");
  let search = document.getElementById("search").value?.toLowerCase() || "";

  menu.innerHTML = "";

  menuData.forEach(section => {
    let items = section.items.filter(i =>
      i.name.toLowerCase().includes(search)
    );

    if (items.length === 0) return;

    menu.innerHTML += `<h3>${section.category}</h3>`;

    items.forEach(m => {
      menu.innerHTML += `
        <div class="card" onclick="openMenu('${m.name}', ${m.R || m.price}, ${m.L || m.price}, '${section.category}')">
          <h4>${m.name}</h4>
          <p>Rp${m.R || m.price}</p>
        </div>
      `;
    });
  });
}

/* =========================
   OPEN MENU
========================= */

function openMenu(name, R, L, category) {
  current.name = name;
  current.category = category;

  if (category === "Cemilan") {
    current.price = R;
  } else {
    current.Rprice = R;
    current.Lprice = L;
    current.price = R;
  }

  current.type = "ICE";
  current.size = "R";
  current.sugar = "Normal";

  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("name").innerText = name;
  document.getElementById("price").innerText = "Rp" + current.price;

  renderCart();
}

/* =========================
   OPTION DRINK ONLY
========================= */

function setType(type) {
  current.type = type;
}

function setSize(size) {
  current.size = size;

  if (size === "R") current.price = current.Rprice;
  else current.price = current.Lprice;

  document.getElementById("price").innerText = "Rp" + current.price;
}

function setSugar(type) {
  current.sugar = type;
}

/* =========================
   CART
========================= */

function addToCart() {
  cart.push({ ...current });
  renderCart();
}

function renderCart() {
  let html = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;

    html += `
      <div>
        ${item.name} - Rp${item.price}
        ${item.category !== "Cemilan" ? `(${item.type}, ${item.size}, ${item.sugar})` : ""}
      </div>
    `;
  });

  document.getElementById("cart").innerHTML = html;
  document.getElementById("total").innerText = total;
}

/* =========================
   CHECKOUT WA
========================= */

function checkout() {
  if (cart.length === 0) return alert("Keranjang kosong!");

  let nama = localStorage.getItem("nama");
  let lokasi = localStorage.getItem("lokasi");

  let msg = `Nama: ${nama}\nLokasi: ${lokasi}\n\n`;

  cart.forEach(item => {
    msg += `☕ ${item.name} - Rp${item.price}`;

    if (item.category !== "Cemilan") {
      msg += ` (${item.type}, ${item.size}, ${item.sugar})`;
    }

    msg += "\n";
  });

  let total = cart.reduce((a, b) => a + b.price, 0);
  msg += `\nTOTAL: Rp${total}`;

  let wa = "https://wa.me/628XXXXXXXXXX?text=" + encodeURIComponent(msg);
  window.open(wa);
}

/* =========================
   INIT
========================= */

renderMenu();