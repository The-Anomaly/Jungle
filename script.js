function toggleMenu() {
  var x = document.getElementById("junglemenu");
  if (x.classList.contains("hide") === true) {
    x.classList.toggle("show");
  } else {
    return x.classList.toggle("hide");
  }
}

function closeMenu() {
  let y = document.getElementById("junglemenu");
  return y.classList.remove("show");
}
