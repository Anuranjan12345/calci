sum=0;
str="";
function add(){
    a=parseInt(document.getElementById("text").value)
    sum+=a;
    if(str.length==0)
    {
        str+=a;
    }
    else{
        str+= "+" +a;
    }
    document.getElementById("t1").innerHTML=str;
    document.getElementById("text1").value= "";

}
function sub(){
    a=parseInt(document.getElementById("text").value)
    sum-=a;
    if(str.length==0)
    {
        str+=a;
    }
    else{
        str+= "+" +a;
    }
    document.getElementById("t1").innerHTML=str;
    document.getElementById("text1").value= "";

}
function mul(){
    a=parseInt(document.getElementById("text").value)
    sum*=a;
    if(str.length==0)
    {
        str+=a;
    }
    else{
        str+= "+" +a;
    }
    document.getElementById("t1").innerHTML=str;
    document.getElementById("text1").value= "";

}
function div(){
    a=parseInt(document.getElementById("text").value)
    sum/=a;
    if(str.length==0)
    {
        str+=a;
    }
    else{
        str+= "+" +a;
    }
    document.getElementById("t1").innerHTML=str;
    document.getElementById("text1").value= "";

}
function eq(){
    document.getElementById("t1").innerHTML=str+ "="+sum;
    document.getElementById("text1").value= "";
}