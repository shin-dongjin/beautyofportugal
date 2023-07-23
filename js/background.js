const images = [
  './imgs/img01.jpg',
  './imgs/img02.jpg',
  './imgs/img03.jpg',
  './imgs/img04.jpg',
  './imgs/img05.jpg',
];

function chooseImage() {
  const randomNumber = Math.floor(Math.random() * images.length);
  document.body.setAttribute(
    'style',
    `background-image: url('${images[randomNumber]}')`
  );
}

window.onload = function () {
  chooseImage();
};
