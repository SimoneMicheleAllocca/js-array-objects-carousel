const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];


const contCarouselImg = document.querySelector(".my-carousel-images");

const myThumbnails = document.querySelector(".my-thumbnails");



images.forEach((curElem, index) => {

  curImg =
    ` 
      <div class="my-carousel-item" carousel-item="1">
      <img
        class="img-fluid"
        src="${curElem.image}"        
      />
        <div class="item-description px-3">
          <h2>${curElem.title}</h2>
          <p>${curElem.text}</p>
        </div>
      </div>


    `

  curThumb =
    `
      <img class="img-fluid my-thumbnail" src="${curElem.image}"
      alt="${curElem.title}" />
  
     `


  contCarouselImg.innerHTML += curImg;
  myThumbnails.innerHTML += curThumb;

});



let myCarouselItem = document.querySelectorAll(".my-carousel-item");
let myThumbnailsImg = document.querySelectorAll(".my-thumbnail")
let imgIndex = 0;

myCarouselItem[imgIndex].classList.add("active");
myThumbnailsImg[imgIndex].classList.add("active");


const btnNext = document.querySelector(".my-next").addEventListener("click", nextImg);

function nextImg() {
  myCarouselItem[imgIndex].classList.remove("active");
  myThumbnailsImg[imgIndex].classList.remove("active");


  if (imgIndex < myCarouselItem.length - 1) {
    imgIndex++;
    myCarouselItem[imgIndex].classList.add("active");
    myThumbnailsImg[imgIndex].classList.add("active");

  } else {
    imgIndex = 0;
    myCarouselItem[imgIndex].classList.add("active");
    myThumbnailsImg[imgIndex].classList.add("active");
  }


}

const btnPrev = document.querySelector(".my-previous").addEventListener("click", prevImg);

function prevImg() {
  myCarouselItem[imgIndex].classList.remove("active");
  myThumbnailsImg[imgIndex].classList.remove("active");
  if (imgIndex > 0) {
    imgIndex--;
    myCarouselItem[imgIndex].classList.add("active");
    myThumbnailsImg[imgIndex].classList.add("active");
  } else {
    imgIndex = myCarouselItem.length - 1;
    myCarouselItem[imgIndex].classList.add("active");
    myThumbnailsImg[imgIndex].classList.add("active");
  }

}

let start = false;
let clock;
const startBtn = document.getElementById("my-stop-button")
  .addEventListener("click", startButton);

function startButton() {

  if (!start) {
    start = true;
     clock = setInterval(function () {

      myCarouselItem[imgIndex].classList.remove("active");
      myThumbnailsImg[imgIndex].classList.remove("active");


      if (imgIndex < myCarouselItem.length - 1) {
        imgIndex++;
        myCarouselItem[imgIndex].classList.add("active");
        myThumbnailsImg[imgIndex].classList.add("active");

      } else {
        imgIndex = 0;
        myCarouselItem[imgIndex].classList.add("active");
        myThumbnailsImg[imgIndex].classList.add("active");
      }



    }, 2000);



  } else {
    clearInterval(clock)
    start = false
  }

}


const invertBtn = document.getElementById("my-order-button")
  .addEventListener("click", reverseButton);

function reverseButton() {
  const clock = setInterval(function () {
    myCarouselItem[imgIndex].classList.remove("active");
    myThumbnailsImg[imgIndex].classList.remove("active");
    if (imgIndex > 0) {
      imgIndex--;
      myCarouselItem[imgIndex].classList.add("active");
      myThumbnailsImg[imgIndex].classList.add("active");
    } else {
      imgIndex = myCarouselItem.length - 1;
      myCarouselItem[imgIndex].classList.add("active");
      myThumbnailsImg[imgIndex].classList.add("active");
    }
  }, 2000);
}