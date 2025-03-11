let section = document.querySelectorAll("section");
let navlink = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 50;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".nav-link[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
