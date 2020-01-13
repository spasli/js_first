var num1 = prompt("first number");
var num2 = prompt("second number");
var op = prompt("operator");
var num1= parseInt(num1);
var num2 = parseInt(num2);
var result ;
	switch(op){
		case'+':result = num1+num2;
		break;
		case'-':result = num1-num2;
		break;
		case'*':result = num1*num2;
		break;
		case'/':result = num1/num2;
		break;
		default:result = 0;
	}
alert(result);
