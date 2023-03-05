
 function moveBalloon(){
  const radX = document.querySelector('body').getBoundingClientRect().width
  const radY = document.querySelector('body').getBoundingClientRect().height
  console.log(radY)
  const intervalTime = 10
  const x0 = radX/2
  const y0 = radY/3
  const a = (radX -(radX*0.3))/2
  const b = 100
  let t = 0
  let lastTime = 0;
  let zin = 905


  function moveElement(timestamp) {
  const deltaTime = timestamp - lastTime
   const element = document.querySelector(".balloon-atr");
   const x = x0 + a * Math.cos(t);
   const y = y0 + b * Math.sin(t);

   if (deltaTime >= intervalTime) {
    element.style.left = x + "px";
    element.style.top = y + "px";
    t += 0.001
    lastTime = timestamp
    if (t > 2 * Math.PI) {
     t = 0
    }
    zin = y < y0 ? element.style.zIndex = 901 : element.style.zIndex = 905
   }
   requestAnimationFrame(moveElement)
  }
  requestAnimationFrame(moveElement)
 }

 function moveShip(){
  const intervalTime = 30

  const radX = document.querySelector('body').getBoundingClientRect().width
  const element = document.querySelector("#ship")
  const widShip = document.querySelector("#ship").getBoundingClientRect().width
  let x = document.querySelector("#ship").getBoundingClientRect().x
  let t = 0
  let lastTime = 0;


  function moveElement(timestamp){
    const deltaTime = timestamp - lastTime

    if (deltaTime >= intervalTime) {
      element.style.left = x + "px"
      t += 0.01
      lastTime = timestamp

      if(x < radX + 20){
        x++

      } else {
        x = -widShip
      }
    }
    requestAnimationFrame(moveElement)
  }
  requestAnimationFrame(moveElement)
 }



setTimeout(() => {
  moveShip()
  moveBalloon()
}, 8000)
