const navlist = document.getElementById("navtools");
const toggle = document.getElementById("toggle");
console.log(navlist, toggle);
toggle.addEventListener("click", () => {
  let disp = window.getComputedStyle(navlist, null).getPropertyValue("display");

  if (disp === "none") {
    navlist.style.display = "flex";
  } else {
    navlist.style.display = "none";
  }
});