const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Conheça Recife",
    info: "Economia, Cultura, Política, Turismo",
    thumb: "images/1.png",
  },
  {
    title: "Conheça Aracaju",
    info: "Economia, Cultura, Política, Turismo",
    thumb: "images/6.png",
  },
  {
    title: "Conheça Salvador",
    info: "Economia, Cultura, Política, Turismo",
    thumb: "images/4.png",
  },
  {
    title: "Conheça Fortaleza",
    info: "Economia, Cultura, Política, Turismo",
    thumb: "images/3.png",
  },
  {
    title: "Conheça Belo Horizonte",
    info: "Economia, Cultura, Política, Turismo",
    thumb: "images/5.png",
  },
  {
    title:"Conheça Porto Alegre",
    info: "Economia, Cultura, Política, Turismo",
    thumb: "images/2.png",
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];


document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});