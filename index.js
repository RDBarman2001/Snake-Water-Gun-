getRandomItem=(arr)=>{

    // get random index value
    const randomIndex = Math.floor(Math.random() * 3);

    // get random item
    const item = arr[randomIndex];

    return item;
}


start=()=>{
  let play=prompt("how many time you want to play")
 let time=1;
 let point=0;
 let cpoint=0;
 while(play>=time){
   const array = ["s","w","g"];
const com = getRandomItem(array);
let you=prompt("s,w or g")

if(com==you){
console.log("Draw..")
}
else if(you=="s"&&com=="g"){
    console.log("You loose")
    cpoint++
}
else if(you=="w"&&com=='s'){
    console.log("You loose")
    cpoint++
}
else if(you=='g'&&com=='w'){
    console.log("You loose")
    cpoint++
}
else if(you=='s'&&com=='w'){
    console.log("You won")
    point++
}
else if(you=='w'&&com=='g'){
    console.log("You won")
    point++
}
else if(you=='g'&&com=='s'){
    console.log("You won")
    point++
}
time++;
}
console.log("your score:",point)
console.log("My score:",cpoint)
if(point>cpoint){
    console.log("You Beat Me!")
}
else if(point<cpoint){
    console.log("You can Do better!Try again")
}
else{
    console.log("Draw Match......")
}
  let a=prompt("Type y to play again")
  if(a=='y'){
    start()
  }
}
start();