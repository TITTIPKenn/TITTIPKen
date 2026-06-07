let current = {
  name: "",
  price: 0,
  type: "ICE",
  size: "REGULAR"
};

function openMenu(name, price) {
  current.name = name;
  current.price = price;

  document.getElementById("name").innerText = name;
  document.getElementById("price").innerText = "Rp" + price;

  document.getElementById("popup").classList.remove("hidden");
}

function closeMenu() {
  document.getElementById("popup").classList.add("hidden");
}

function setType(type) {
  current.type = type;
}

function setSize(size) {
  current.size = size;
}

function order() {
  let msg =
`Halo, saya mau pesan:
☕ ${current.name}
🔥 ${current.type}
📏 ${current.size}
💰 Rp${current.price}`;

  let wa = "https://wa.me/628XXXXXXXXXX?text=" + encodeURIComponent(msg);
  window.open(wa);
}
