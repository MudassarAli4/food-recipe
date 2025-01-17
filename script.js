let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let items = document.querySelectorAll(".carousel .item");
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
  carousel.classList.remove("prev");
  carousel.classList.add("next");
  active = active + 1 >= countItem ? 0 : active + 1;
  other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
  other_2 = active + 1 >= countItem ? 0 : active + 1;
  changeSlider();
};
prev.onclick = () => {
  carousel.classList.remove("next");
  carousel.classList.add("prev");
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  other_1 = active + 1 >= countItem ? 0 : active + 1;
  other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
  changeSlider();
};
const changeSlider = () => {
  let itemOldActive = document.querySelector(".carousel .item.active");
  if (itemOldActive) itemOldActive.classList.remove("active");

  let itemOldOther_1 = document.querySelector(".carousel .item.other_1");
  if (itemOldOther_1) itemOldOther_1.classList.remove("other_1");

  let itemOldOther_2 = document.querySelector(".carousel .item.other_2");
  if (itemOldOther_2) itemOldOther_2.classList.remove("other_2");

  items.forEach((e) => {
    e.querySelector(".image img").style.animation = "none";
    e.querySelector(".image figcaption").style.animation = "none";
    void e.offsetWidth;
    e.querySelector(".image img").style.animation = "";
    e.querySelector(".image figcaption").style.animation = "";
  });

  items[active].classList.add("active");
  items[other_1].classList.add("other_1");
  items[other_2].classList.add("other_2");

  clearInterval(autoPlay);
  autoPlay = setInterval(() => {
    next.click();
  }, 5000);
};

function filterCards(cuisine) {
  const buttons = document.querySelectorAll(".menu button.list");
  const cards = document.querySelectorAll(".card");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  cards.forEach((card) => {
    if (cuisine === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(cuisine)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  let noResults = true;

  cards.forEach(function (card) {
    let foodNameElement = card.querySelector(".card-header h3:last-child");
    let foodName = foodNameElement.textContent;

    if (foodName.toLowerCase().includes(filter)) {
      card.style.display = "";
      noResults = false;
      let regex = new RegExp(`(${filter})`, "gi");
      let highlightedName = foodName.replace(
        regex,
        '<span class="highlight">$1</span>'
      );
      foodNameElement.innerHTML = highlightedName;
    } else {
      card.style.display = "none";
      foodNameElement.innerHTML = foodName;
    }
  });
});

let faqs = document.querySelectorAll(".faq");
// loop for every faq
faqs.forEach((faq) => {
  // using faq.query to select its child only
  const toggleButton = faq.querySelector(".faq-toggle");
  //arrown fuction and evenlistener
  toggleButton.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
