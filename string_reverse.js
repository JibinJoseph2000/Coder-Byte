function FirstReverse(str) { 
  let a = str;
  //console.log(str)
  let str1 = '';
  for(let i=str.length-1; i>0;i--){
  str1 = str1 + a[i];  
  //console.log(str1);
  }
  str1 = str1 + a[0];
  return str1; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
