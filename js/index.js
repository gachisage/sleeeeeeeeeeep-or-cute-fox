document.addEventListener('DOMContentLoaded', loaded)

function loaded() {

  const $ = (selector) => document.querySelector(selector)

  function layout(count, int, selector, path1, path2){
    let currentImage = 1
    const imageCount = count
    const intervalTime = int

    function switchImage() {
      const loaderImage = $(selector)
      currentImage = currentImage === imageCount ? 1 : currentImage + 1
      loaderImage.src = `${path1}${currentImage}${path2}`

    }

    setInterval(switchImage, intervalTime)
  }


  function loading(){
    $('#loader').style.display = 'none'

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
    layout(6, 100, '.hsmoke', 'img/houseSmoke/','.png')
  }

  loading()
  smoke()
  flameBall()
  flameDr()
  smokeHouse()
}