let current = {

  name: "",

  price: 0,

  type: "",

  size: "",

  sugar: "",

  Rprice: 0,

  Lprice: 0,

  category: ""

};

let cart = [];

/* =========================
   MENU DATA (FULL ORIGINAL)
========================= */

const menuData = [
  {
    category: "Kenangan Frappe",
    items: [
      { name: "Choco Caramel Frappe", R: 20000, L: 25000 },
      { name: "Butterscotch Kenangan Frappe", R: 22500, L: 26500 },
      { name: "Matcha Kenangan Frappe", R: 23500, L: 27500 },
      { name: "Kopi Kenangan Mantan Frappe", R: 22500, L: 25500 },
      { name: "Vanilla Kenangan Frappe", R: 20000, L: 24000 },
      { name: "Dutch Choco Kenangan Frappe", R: 23500, L: 27500 },
      { name: "Choco Caramel Cream Frappe", R: 17000, L: 22000 }
    ]
  },

  {
    category: "New Menu Kopken",
    items: [
      { name: "Tiramisu Latte", R: 18000, L: 22500 },
      { name: "Tiramisu Mocha Latte", R: 20000, L: 24000 },
      { name: "OG Aren Milky", R: 18000, L: 22500 },
      { name: "OG Aren Speculoos", R: 19000, L: 23500 },
      { name: "Duo Shot OG Aren", R: 20000, L: 24500 },
      { name: "OG Thaitea", R: 16500, L: 19500 },
      { name: "Thaitea Loaded", R: 20500, L: 25500 },
      { name: "Thaitea Aren", R: 18500, L: 22500 },
      { name: "Thaitea Coffee", R: 20000, L: 24500 }
    ]
  },

  {
    category: "Non Coffee",
    items: [
      { name: "Toffe Nut Choco Macchiato", R: 19000, L: 24000 },
      { name: "Butterscotch Sea Salt Crumble", R: 18000, L: 25500 },
      { name: "Hazelnut Choco Milk Tea", R: 18500, L: 22500 },
      { name: "Avocado Caramel", R: 20000, L: 24000 },
      { name: "Milk Oreo Crumble", R: 20000, L: 24000 },
      { name: "Babyccino", R: 16500, L: 21000 },
      { name: "Avocado Milk", R: 18000, L: 22000 },
      { name: "Caramel Dutch Choco", R: 20000, L: 24000 },
      { name: "Dutch Chocolate", R: 19000, L: 23000 },
      { name: "Matcha Latte", R: 19000, L: 22500 },
      { name: "Lemon Black Tea", R: 14000, L: 18000 },
      { name: "Kenangan Milk Tea", R: 16500, L: 26000 },
      { name: "Milo Dinosaurus", R: 18000, L: 22000 },
      { name: "Oreo Shake", R: 19000, L: 23000 },
      { name: "Hazelnut Dutch Choco", R: 21000, L: 25000 },
      { name: "Susu Grass Jelly", R: 18000, L: 22000 },
      { name: "Fresh Lemonade", R: 15500, L: 20500 },
      { name: "Raspberry Hibiscus", R: 17000, L: 22000 },
      { name: "Oatside Matcha Latte", R: 20000, L: 24000 }
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
      { name: "Spanish Latte", R: 17500, L: 22000 },
      { name: "Butterscotch Aren Latte", R: 17500, L: 21500 },
      { name: "Caramel Latte", R: 18500, L: 22000 },
      { name: "Mocha Latte", R: 20000, L: 23500 },
      { name: "Toffe Nut Latte", R: 17500, L: 22500 },
      { name: "Toffe Nut Aren Latte", R: 18000, L: 23000 },
      { name: "Toffe Nut Oat Latte", R: 17500, L: 23000 },
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
      { name: "Adam Ayam Toast", price: 14000 },
      { name: "Wahyu Sapi Toast", price: 14000 },
      { name: "Salt Bread Original", price: 11000 },
      { name: "Salt Bread Beef & Cheese", price: 13500 },
      { name: "Sandwich Smoked Beef", price: 17000 },
      { name: "Butter Croissant", price: 12000 },
      { name: "Chocolate Croissant", price: 14000 },
      { name: "Croissant Abon", price: 14500 },
      { name: "Dirty Croissant Milo", price: 15000 },
      { name: "Roti Keju Manis", price: 9000 },
      { name: "Roti Srikaya", price: 9000 },
      { name: "Roti Sisir Original", price: 9000 },
      { name: "Roti Sisir Coklat", price: 9000 },
      { name: "Roti Susu Manis", price: 9000 },
      { name: "Vanilla Choux Puff", price: 12000 },
      { name: "Strawberry Choux Puff", price: 12000 },
      { name: "Chocolate Choux Puff", price: 12000 },
      { name: "Choco Muffin", price: 13000 },
      { name: "Blueberry Muffin", price: 13000 },
      { name: "Chocolate Donut", price: 9500 },
      { name: "Sugar Donut", price: 8000 },
      { name: "Donut Almond", price: 12000 },
      { name: "Donut Abon", price: 11000 },
      { name: "Roti Gulung Abon", price: 13500 },
      { name: "Roti Coklat Klasik", price: 8000 },
      { name: "Choco Chip Cookies", price: 11500 },
      { name: "Join the Dark Side Cookie", price: 15000 },
      { name: "Friend Chip Cookie", price: 13000 },
      { name: "Bolu Marble Cheese", price: 13000 },
      { name: "Bolu Marble Mocca", price: 13000 },
      { name: "Bolu Marble Chocolate", price: 13000 },
      { name: "Canele Aren", price: 13000 },
      { name: "Canele Original", price: 12000 },
      { name: "Aren Apple Pie", price: 15000 },
      { name: "Bambang Choco Cheese", price: 13000 },
      { name: "Pasta Mentai", price: 19000 },
      { name: "Pasta Indopesto", price: 18500 },
      { name: "Thai Chicken Spaghetti", price: 18000 },
      { name: "Spaghetti Tuna Aglio Olio", price: 18500 }
    ]
  }
];

/* =========================
   RENDER MENU
========================= */

function renderMenu() {

  let menu = document.getElementById("menu");

  let search = document.getElementById("search").value.toLowerCase();

  menu.innerHTML = "";

  menuData.forEach(section => {

    let items = section.items.filter(i =>

      i.name.toLowerCase().includes(search)

    );

    if (!items.length) return;

    menu.innerHTML += `<h3>${section.category}</h3>`;

    items.forEach(m => {

      let price = m.price ?? m.R;

      let L = m.L ?? 0;

      menu.innerHTML += `

        <div class="card"

          onclick="openMenu('${m.name}', ${price}, ${L}, '${section.category}')">

          <h4>${m.name}</h4>

          <p>Rp${price}</p>

        </div>

      `;

    });

  });

}
/* =========================

   OPEN POPUP (FIX FINAL CEMILAN)

========================= */

function openMenu(name, R, L, category) {

  R = Number(R) || 0;

  current.name = name;
  current.category = category;

  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("name").innerText = name;

  resetButtons();

  if (category === "Cemilan") {

    current.price = R;
    current.type = "";
    current.size = "";
    current.sugar = "";
    current.Rprice = 0;
    current.Lprice = 0;

    document.getElementById("drinkOptions").style.display = "none";
    document.getElementById("cemilanInfo").style.display = "block";

    document.getElementById("price").innerText = "Rp " + R;

  } else {

    current.Rprice = R;
    current.Lprice = L;

    current.type = "ICE";
    current.size = "R";
    current.sugar = "Normal";
    current.price = R;

    document.getElementById("drinkOptions").style.display = "block";
    document.getElementById("cemilanInfo").style.display = "none";

    document.getElementById("price").innerText = "Rp " + R;

    setType("ICE");
    setSize("R");
    setSugar("Normal");
  }
}

/* =========================

   RESET BUTTON

========================= */

function resetButtons() {

  document.querySelectorAll("#popup button")

    .forEach(b => b.classList.remove("active"));

}

/* =========================

   CLOSE POPUP

========================= */

function closeMenu() {

  document.getElementById("popup").classList.add("hidden");

}

/* =========================

   OPTIONS

========================= */

function setType(t) {

  current.type = t;

}

function setSize(s) {

  current.size = s;

  current.price = (s === "R") ? current.Rprice : current.Lprice;

  document.getElementById("price").innerText = "Rp " + current.price;

}

function setSugar(s) {

  current.sugar = s;

}

/* =========================

   CART (AMAN)

========================= */

function addToCart() {

  cart.push({ ...current });

  renderCart();

  closeMenu();

}

function removeItem(i) {

  cart.splice(i, 1);

  renderCart();

}

function renderCart() {

  let html = "";

  let total = 0;

  cart.forEach((item, i) => {

    total += item.price;

    html += `

      <div>

        ${item.name} - Rp${item.price}

        ${item.category !== "Cemilan"

          ? `(${item.type}, ${item.size}, ${item.sugar})`

          : ""

        }

        <button onclick="removeItem(${i})">❌</button>

      </div>

    `;

  });

  document.getElementById("cart").innerHTML = html;

  document.getElementById("total").innerText = total;

}

/* =========================

   CHECKOUT

========================= */

function checkout() {

  if (!cart.length) return alert("Keranjang kosong!");

  let nama = localStorage.getItem("nama") || "-";

  let lokasi = localStorage.getItem("lokasi") || "-";

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

  window.open("https://wa.me/6289633016767?text=" + encodeURIComponent(msg));

}

/* =========================

   INIT

========================= */

renderMenu();
