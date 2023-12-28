const Number=document.querySelector('.Number');
const Image=document.querySelector('img');
let start=0;
const maxValue=100;
const Loader = ()=> {
    if(start<maxValue){
        start++;
        Number.textContent=start+"%";
        const opacity=start/maxValue;
        Image.style.opacity=opacity;
        Image.style.filter='blur(${10 - 10 * opacity})px';
    }
    else{
       clearInterval(CallLoader); 
       Number.textContent="";
    }
}

 const CallLoader=setInterval(Loader,200);
