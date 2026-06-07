let current = {
  name: "",
  price: 0,
  type: "ICE",
  size: "R",
  Rprice: 0,
  Lprice: 0
};

const menuData = [
  { name: "Choco Caramel Frappe", R: 20000, L: 25000 },
  { name: "Butterscotch Kenangan Frappe", R: 22500, L: 26500 },
  { name: "Matcha Kenangan Frappe", R: 23500, L: 27500 },
  { name: "Kopi Kenangan Mantan Frappe", R: 22500, L: 25500 },
  { name: "Vanilla Kenangan Frappe", R: 20000, L: 24000 },
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
  { name: "Avocado Caramel", R: 20000, L: 24000 },
  { name: "Kopi Kenangan Mantan", R: 15000, L: 19500 },
  { name: "Americano", R: 15000, L: 18500 },
  { name: "Latte", R: 17500, L: 21500 },
  { name: "Butterscotch Sea Salt", R: 20500, L: 23500 },
  { name: "Cafe Malt Latte", R: 18000, L: 22000 },
  { name: "Kopi Susu Black Aren", R: 16500, L: 21000 },
  { name: "Spanish Latte", R: 16000, L: 19000 },
  { name: "Caramel Latte", R: 18500, L: 22000 },
  { name: "Mocha Latte", R: 20000, L: 23500 },
  { name: "Caramel Macchiato", R: 20000, L: 24000 },
  { name: "Avocado Coffee", R: 22500, L: 26000 },
  { name: "Cappuccino", R: 17500, L: 21500 },
  { name: "Vanilla Latte", R: 19000, L: 23000 },
  { name: "Hazelnut Latte", R: 19500, L: 23000 }
];

function renderMenu() {
  const menu = document.getElementById("menu");
  const search = document.getElementById("search").value.toLowerCase();

  menu.innerHTML = "";

  menuData
    .filter(m => m.name.toLowerCase().includes(search))
    .forEach(m => {
      menu.innerHTML += `
        <div class="card" onclick="openMenu('${m.name}', ${m.R}, ${m.L})">
          <h4>${m.name}</h4>
          <p>R Rp${m.R.toLocaleString()}</p>
          <p>L Rp${m.L.toLocaleString()}</p>
        </div>
      `;
    });
}

function openMenu(name, R, L) {
  current.name = name;
  current.Rprice = R;
  current.Lprice = L;

  current.size = "R";
  current.type = "ICE";
  current.price = R;

  document.getElementById("name").innerText = name;
  document.getElementById("price").innerText = "Rp" + current.price;

  document.getElementById("popup").classList.remove("hidden");

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

  if (type === "ICE") {
    document.getElementById("btnICE").classList.add("active");
  } else {
    document.getElementById("btnHOT").classList.add("active");
  }
}

function setSize(size) {
  current.size = size;

  if (size === "R") {
    current.price = current.Rprice;
  } else {
    current.price = current.Lprice;
  }

  document.getElementById("price").innerText = "Rp" + current.price;

  document.getElementById("btnR").classList.remove("active");
  document.getElementById("btnL").classList.remove("active");

  if (size === "R") {
    document.getElementById("btnR").classList.add("active");
  } else {
    document.getElementById("btnL").classList.add("active");
  }
}

function order() {
  let msg =
`Halo saya mau pesan:
☕ ${current.name}
🔥 ${current.type}
📏 ${current.size}
💰 Rp${current.price}`;

  let wa = "https://wa.me/628XXXXXXXXXX?text=" + encodeURIComponent(msg);
  window.open(wa);
}

renderMenu();