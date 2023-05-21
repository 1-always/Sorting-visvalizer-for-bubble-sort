const n=20;
var arr=[];
init();

function init() {
    
const numbersInput = document.getElementById("array").value;
const numbersArray = numbersInput.split(" ").map(number => number.trim());
const array = numbersArray.map(number => Number(number));
arr1=[...array]
arr=arr1.splice(arr.length-1);
console.log(arr);

//bubbleSort(arr);
showBars();
}
function Play() {
const copy=[...arr];
const moves=bubbleSort(copy);
animate(moves);
//showBars();

}

function animate(moves)
{
if(moves.length ==0)
{   showBars();
    return ;
}
const move=moves.shift();
const [i,j]=move.index;
if(move.type=="swap"){
    [arr[i],arr[j]]=[arr[j],arr[i]];
}
showBars(move);
setTimeout(function()
{
    animate(moves);
},500);

}
//console.log(arr);
function bubbleSort(arr) {
const moves=[];
do{

   var swapi=false;
   for(let i=0; i<arr.length; i++ )
   {   
    moves.push({index:[i-1,i],type:"cmp"});
    if(arr[i-1]>arr[i])
    {
        swapi=true;
        moves.push({index:[i-1,i],type:"swap"});
        
        [arr[i-1],arr[i]]=[arr[i],arr[i-1]];
    }
}
}while(swapi);
return moves;
}
function insertionsort(arr)
{
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
      }
      return arr
}

//console.log(moves);
function showBars(move) {
container.innerHTML="";
for(let i=0; i<arr.length; i++ )
{   
const bar=document.createElement("div");
bar.style.height=(arr[i]*5)+"%";
//bar.style.width="20px";
//bar.style.backgroundColor="#000080";
bar.classList.add("bar");
if(move && move.index.includes(i))
{  
    bar.style.backgroundColor=move.type=="swap"?"green":"red";
    
}
container .appendChild(bar);
}
}
