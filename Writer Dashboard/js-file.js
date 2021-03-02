// function openMenu() {
//   var x = document.getElementById("menu");
//   // x.style.display = "none";
//   console.log(x);
//   console.log(x.style.display);
//     if(x.style.display === "none") {
//       return x.style.display = "block";
//     } 
//     else {
//       return x.style.display = "none";
//     }
//   }

function openMenu() {
  var x = document.getElementById("menu");
    if(x.classList.contains("hide") === true) {
      x.classList.toggle("show");
    } 
    else {
      return x.classList.toggle("hide");
    }
  }
  const closeDialog = () => {
    let dialog = document.getElementById('dialog');
    return dialog.classList.remove("show2");
};
