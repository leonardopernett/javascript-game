let getRadomNumber = (size) => {
    return  Math.floor(Math.random() * size)
}

let getDistance = (e, target)=> {
     let diffx = e.offsetX - target.x ;
     let diffy = e.offsetX - target.y ;
     return Math.sqrt((diffx *diffx)  +  (diffy * diffy)) //teorema de pitagora 

}

let distancePist = (distance)=> {
    if(distance < 30 ){
         return "hoooooooooooooot";
    }  else if(distance < 40){
         return "really hot  "
    }  else if(distance < 60 ){
         return "hot"
    }else if(distance <100){
        return "warn"
    }else if(distance <180){
        return "cold"
    }else if(distance <360){
        return "really cold"
    }else {
        return "freezing"
    }
}