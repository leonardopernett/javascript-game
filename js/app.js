const width  = 400;
const height = 400;

let target = {
    x: getRadomNumber(width),
    y: getRadomNumber(height)
}
console.log(mapa)

let map =  document.getElementById('map')
let result =  document.getElementById('result')
let click = 0;
map.addEventListener('click',(e)=>{
  click ++;
   const distance = getDistance(e, target);
   const distanceHin = distancePist(distance);

     result.innerHTML= distanceHin
    

     if(distance < 20 ){
         alert ("you found the treasure in "+ click + " attemps")
         window.location.reload();
     }
})