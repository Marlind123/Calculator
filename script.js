var dis=document.getElementById("display")
number1=""
number2=""
press=(el)=>{
    if(dis.innerHTML=="0"){
        dis.innerHTML=null
        if(number1.length<7){
        number1+=el
        dis.innerHTML=number1
    }
    }
    else{
        if(number1.length<7){
            number1+=el
            dis.innerHTML=number1
        }
    }

    }

add=(x,y)=>{
    var sum=x+y;
    return sum;
}

substract=(x,y)=>{
    var sub=x-y;
    return sub;
}
division=(x,y)=>{
    var div=x/y;
    return div;
}
mult=(x,y)=>{
    var mul=x*y;
    return mul;
}

var x=""
setOP=(ele)=>{ 
    x=ele
    number2=number1
    number1=""
    return x;
}



calculate=()=>{
    var num1=parseFloat(number1)
    var num2=parseFloat(number2)
    var result=0;
    switch(x){

        case "+":
            result=add(num1,num2);
            break;
        case "-":
            result=substract(num2,num1);
            break;
        case "/":
            result=division(num2,num1);
           
            break;
        case "*":
            result=mult(num1,num2);
            break;
    }
    dis.innerHTML=result
    number1=result
}


clr=()=>{
    number1=""
    number2=""
    x=""
    dis.innerHTML="0"
}

