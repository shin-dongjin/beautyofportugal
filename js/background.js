const images = [
  '../beautyofportugal/imgs/img01.jpg',
  '../beautyofportugal/imgs/img02.jpg',
  '../beautyofportugal/imgs/img03.jpg',
  '../beautyofportugal/imgs/img04.jpg',
  '../beautyofportugal/imgs/img05.jpg',
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
