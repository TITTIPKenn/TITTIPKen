let current = {
  name: "",
  price: 0,
  type: "ICE",
  size: "R",
  Rprice: 0,
  Lprice: 0
};

let cart = [];

const menuData = [
  { name: "Latte", R: 17500, L: 21500 },
  { name: "Americano", R: 15000, L: 18500 },
  { name: "Cappuccino", R: 17500, L: 21500 },
  { name: "Caramel Macchiato", R: 20000, L: 24000 },
  { name: "Vanilla Latte", R: 19000, L: 23000 },
  { name: "Hazelnut Latte", R: 19500, L: 23000 },
  { name: "Matcha Latte", R: 19000, L: 22500 }
];

function renderMenu() {
  let menu = document.getElementById("menu");
  let search = document.getElementById("search").value.toLowerCase();

  menu.innerHTML = "";

  menuData
    .filter(m => m.name.toLowerCase().includes(search))
    .forEach(m => {
      menu.innerHTML += `
        <div class="card" onclick="openMenu('${m.name}', ${m.R}, ${m.L})">
          <h4>${m.name}</h4>
          <p>R Rp${m.R}</p>
          <p>L Rp${m.L}</p>
        </div>
      `;
    });
}

function openMenu(name, R, L) {
  current.name = name;
  current.Rprice = R;
  current.Lprice = L;

  current.type = "ICE";
  current.size = "R";
  current.price = R;

  document.getElementById("popup").classList.remove("hidden");

  document.getElementById("name").innerText = name;
  document.getElementById("price").innerText = "Rp" + R;

  setType("ICE");
  setSize("R");
}

function closeMenu() {
  document.getElementById("popup").classList.add("hidden");
}

function setType(type) {
  current.type = type;

  document.getElementById("btnICE").classList.remove("active");
  document.getElementById("btnHOT").classList.remove("active");

  document.getElementById(type === "ICE" ? "btnICE" : "btnHOT")
    .classList.add("active");
}

function setSize(size) {
  current.size = size;

  if (size === "R") current.price = current.Rprice;
  else current.price = current.Lprice;

  document.getElementById("price").innerText = "Rp" + current.price;

  document.getElementById("btnR").classList.remove("active");
  document.getElementById("btnL").classList.remove("active");

  document.getElementById(size === "R" ? "btnR" : "btnL")
    .classList.add("active");
}

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
        ${item.name} (${item.type} ${item.size}) - Rp${item.price}
      </div>
    `;
  });

  document.getElementById("cart").innerHTML = html;
  document.getElementById("total").innerText = total;
}

function checkout() {
  if (cart.length === 0) return alert("Keranjang kosong!");

  let nama = localStorage.getItem("nama");
  let lokasi = localStorage.getItem("lokasi");

  let msg = `Nama: ${nama}\nLokasi: ${lokasi}\n\n`;

  cart.forEach(item => {
    msg += `☕ ${item.name} (${item.type} ${item.size}) - Rp${item.price}\n`;
  });

  let total = cart.reduce((a, b) => a + b.price, 0);
  msg += `\nTOTAL: Rp${total}`;

  let wa = "https://wa.me/6289633016767?text=" + encodeURIComponent(msg);
  window.open(wa);
}

renderMenu();
