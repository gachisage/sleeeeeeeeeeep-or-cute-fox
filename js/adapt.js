const smokeh = document.querySelector('.hsmoke')
const width = document.documentElement.clientWidth
const height = document.documentElement.clientHeight
console.log(width/height);


  const percent = ((width/height)) * 100;
  smokeh.style.top = `${percent}%`;
  console.log(percent);


// if(width/height > 0.5){
//   smokeh.style.top = '77%'
// }
// if(width/height > 0.45 && width/height < 0.5){
//   smokeh.style.top = '74%'
// }
// if(width/height > 0.43 && width/height < 0.46){
//   smokeh.style.top = '72%'
// }
// if(width/height > 0.41 && width/height < 0.5){
//   smokeh.style.top = '71%'
// }

function topSmoke(){
  const ratio = width/height
}
