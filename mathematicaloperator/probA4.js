var num1=11;
var num2=10;
var num3=8;
if(num1<num2&&num2<num3){
  console.log("num3 is greatest");
}
  else if(num2<num1&&num1<num3){
    console.log("num3 is greatest")
  }
else if(num2<num3&&num3<num1){
  console.log("num1 is greatest")
}
  else if(num3<num2&&num2<num1){
    console.log("num1 is greatest")
  }
else{
  console.log("num2 is greatest");
}