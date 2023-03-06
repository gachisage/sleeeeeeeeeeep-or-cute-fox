
const $ = (selector) => document.querySelector(selector)
$('#nature').style.display = 'none'

// window.onload = function() {

  loading();
  setTimeout(function() {
    $('#nature').style.display = 'block'
    $('#loader').style.display = "none";
    // $('.hsmoke').style.display = "none";
    cancelAnimationFrame(loading)

  }, 6000);

  setTimeout(function() {
    cancelAnimationFrame(loading)
  }, 10000);
// };



setTimeout(function() {
  animate()
}, 8000);

function loading(){
  layout(13, 60, '.loader-image', 'img/fox/','.1.png')
}
function flameBall(){
  layout(4, 100, '.flame', 'img/balloon/flame/','.png')
}
function smoke(){
  layout(5, 150, '.smoke', 'img/smoke/','.png')
}
function flameDr(){
  layout(4, 150, '.flameDr', 'img/flameFair/','.png')
}
function smokeHouse(){
  layout(7, 140, '.hsmoke', 'img/houseSmoke/','.png')
}

function animate() {
  smoke();
  smokeHouse();
  flameDr();
  flameBall();
}

function layout(count, int, selector, path1, path2){
  let currentImage = 1
  const imageCount = count
  const intervalTime = int
  const loaderImage = $(selector)
  let lastTime = 0;

  function switchImage(timestamp) {
    const deltaTime = timestamp - lastTime;
    if (deltaTime >= intervalTime) {
      currentImage = currentImage === imageCount ? 1 : currentImage + 1
      loaderImage.src = `${path1}${currentImage}${path2}`
      lastTime = timestamp;
    }
    requestAnimationFrame(switchImage)
  }
  requestAnimationFrame(switchImage)
}