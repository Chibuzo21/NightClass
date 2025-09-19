const NextBtn = document.querySelector("#Next");
const PrevBtn = document.querySelector("#Prev");
const image = document.querySelector("img");

const Pictures = [
  "./Images/image1.jpg",
  "./Images/image2.jpg",
  "./Images/image3.jpg",
  "./Images/image4.jpg",
  "./Images/image5.jpg",
  "./Images/image6.jpg",
];

let index = 0;
image.src = Pictures[index];

function NextFn() {
  index++;
  if (index >= Pictures.length) {
    index = 0;
  }
  image.src = Pictures[index];
}
NextBtn.addEventListener("click", NextFn);

function PrevFn() {
  index--;
  if (index < 0) {
    index = Pictures.length - 1;
  }
  image.src = Pictures[index];
}
PrevBtn.addEventListener("click", PrevFn);
