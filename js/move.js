document.addEventListener('DOMContentLoaded', () => {

 function moveBalloon(){
  const radX = document.querySelector('body').getBoundingClientRect().width
  const radY = document.querySelector('body').getBoundingClientRect().height
  console.log(radY)
  const x0 = radX/2
  const y0 = radY/3
  const a = (radX -(radX*0.3))/2
  const b = 100
  let t = 0

  function moveElement() {
   const element = document.querySelector(".balloon-atr");
   const x = x0 + a * Math.cos(t);
   const y = y0 + b * Math.sin(t);
   element.style.left = x + "px";
   element.style.top = y + "px";
   t += 0.001
   if (t > 2 * Math.PI) {
    t = 0
   }
   if(y < y0){
    element.style.zindex = '901'
   }
   if(y > y0){
    element.style.zindex = '905'
   }
  }

  setInterval(moveElement, 10)
 }

 function moveShip(){
  const radX = document.querySelector('body').getBoundingClientRect().width
  const element = document.querySelector("#ship")
  const widShip = document.querySelector("#ship").getBoundingClientRect().width
  let x = document.querySelector("#ship").getBoundingClientRect().x
  let t = 0

  function moveElement(){
    element.style.left = x + "px"
    t += 0.01
    if(x < radX + 20){
      x = x + 0.5
    } else {
      x = -widShip
    }
  }

  setInterval(moveElement, 10)
 }


 // попытка разобраться с кабинами (не получилось)
 function moveCabin(){
  const points = [
    { x: 300, y: 500 },
    { x: 500, y: 800 },
    { x: 700, y: 1000 }
  ];

  const steps = 50;

  const interval = 10;

  let currentStep = 0;

  function interpolate(start, end, t) {
    const x = start.x + (end.x - start.x) * t;
    const y = start.y + (end.y - start.y) * t;
    return { x, y };
  }

  function moveElementTo(point) {
    const element = document.querySelector('.cabin')
      element.style.transform = `translate(${point.x}px, ${point.y}px)`;
  }

  function performStep() {
    const currentPointIndex = Math.floor(currentStep / steps * (points.length - 1));
    const nextPointIndex = currentPointIndex + 1;
    const t = (currentStep % (steps / (points.length - 1))) / (steps / (points.length - 1));
    const currentPoint = points[currentPointIndex];
    const nextPoint = points[nextPointIndex];
    const intermediatePoint = interpolate(currentPoint, nextPoint, t);

    moveElementTo(intermediatePoint);

    currentStep++;

    if (currentStep >= steps) {
      clearInterval(animationInterval);
    }
  }

  const animationInterval = setInterval(performStep, interval)
 }

//  moveCabin()
 moveShip()
 moveBalloon()
})