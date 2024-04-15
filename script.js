var dis_value = document.querySelector("#display");
document.querySelectorAll("#keys button").forEach((e) => {

  e.addEventListener("click", function() {
    
    if(this.innerText==="Clear"){
       clear();
    }
    else if(this.innerText==="ans"){
       ans();
    }else{
dis_value.value += this.innerText;
    }
    
  });
});

function clear(){
    dis_value.value='';
}
function ans(){
     try {
       dis_value.value = eval(dis_value.value); 
     } catch (error) {
       dis_value.value = "Error";
     }
}


var a=[1,2,3,4]

console.log(a.slice(0, 1));