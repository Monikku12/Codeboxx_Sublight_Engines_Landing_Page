// HAMBURGER MENU

const navigation = document.getElementById("navbar");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  navigation.style.setProperty("--childrenNumber", navigation.children.length);

  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});











// CONTACT US FORM EMAIL