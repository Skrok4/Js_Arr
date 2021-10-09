var arr = [];  
let str = ' ';
let out_arr = document.querySelector(".box");
for (var i=0; i<10; i++) {
    str += i+' — '+'<br>';   
}
out_arr.innerHTML = str;
  
function GenerateArr(){
arr = [];
let str = ' ';
let out_arr = document.querySelector(".box");
for (var i=0, t=8; i<10; i++) {
    arr.push(Math.round(Math.random() * t+1))
    if (arr[i]!==undefined) str +=i+' — '+arr[i]+'<br>';   
}
out_arr.innerHTML = str;
return 0;
}

function FindInArr(){
var elem = prompt("Enter element what u whant to find", "");
    elem=parseInt(elem);
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === elem) 
  {
    alert("Element " + elem + " contain in array " + arr.filter(item => item === elem).length + " times" );
    return true;  
    }
  }
  alert("Array doesn't contain number " + elem);
  return false;
}

