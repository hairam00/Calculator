
var current, screen, output, limit, zero, period, operator;
var screen = document.getElementById("result");
var elem = document.querySelectorAll(".num");
var len = elem.length;
//* displaying 
for(var i=0; i<len; i++)
{
    
    elem[i].addEventListener("click", function()
    {
        var num = this.value;
        console.log(num);
        output = screen.innerHTML += num;
        limit = output.length;
        if(limit>10)
        {
            alert("No more digits plz!");
        }
        console.log("i'm here!");
       
    } ,false);
}
//* Zero Button
document.querySelector(".zero").addEventListener("click",function(){
    zero = this.value;
    output = screen.innerHTML += zero;

}, false);
//* period Button
document.querySelector(".period").addEventListener("click",function(){
    if(screen.innerHTML ==="")
    {
        screen.innerHTML = screen.innerHTML.concat("0.");
    }
    else if(screen.innerHTML= output)
    {
        screen.innerHTML = screen.innerHTML.concat(".");
    }
},false );

//* Delete Button
document.querySelector(".del-bg").addEventListener("click",function(){
    screen.innerHTML = "";
    console.log("Clear Button Pressed");
},false);

document.querySelector(".del-bg").addEventListener("click" , function(){
    screen.innerHTML="";
},false);

//* Operators
var elemm =document.querySelectorAll(".operator");
var lenn= elemm.length;
for(var i=0; i < lenn; i++)
{
    elemm[i].addEventListener("click" , function(){
      var oper =this.value;
        console.log(oper);
        output=screen.innerHTML += oper;
      
        limit=output.length;
        if(limit>10)
        {
            alert("max digits");
        }
    },false);
}

//* Eqaution
document.querySelector("#eqn-bg").addEventListener("click", function(){
    if(screen.innerHTML=output)
    {
        screen.innerHTML=eval(output);
        output=screen.innerHTML;
    }
    else{
        screen.innerHTML==="";
        console.log('innerHTML.${screen.innerHTML};output${output}')
    }
})


