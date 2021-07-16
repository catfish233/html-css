'use strict'
let height = parseFloat(prompt('input your height(m):'));
let weight = parseFloat(prompt('input your weight(kg):'));
// let weight = 0;
// let height = 0;
var bmi = weight/(height^2);
if(bmi<=18.5){
    console.log('过轻')
}
else if(bmi<=25){
    console.log('正常')
}
else  if(bmi<=32){
    console.log('肥胖')
}
else{
    console.log('严重肥胖')
}