function sidebar(){
    let bar1=document.getElementById("bar1");
    let bar2=document.getElementById("bar2");
    let bar3=document.getElementById("bar3");
    let bar=document.getElementById("bar");

    
    if(bar.classList.contains("-translate-x-full")){

        bar1.classList.add("bg-red-700")
        bar1.classList.remove("bg-red-700");
        bar1.classList.add("rotate-45");
        bar1.classList.add("translate-y-2")
        bar2.classList.add("opacity-0")
        bar3.classList.add("-rotate-45")
        bar3.classList.add("-translate-y-2")
        bar.classList.remove("-translate-x-full");
    }
    else{
        

        bar1.classList.remove("rotate-45");
        bar1.classList.remove("translate-y-2");
        bar2.classList.remove('opacity-0');
        bar3.classList.remove("-translate-y-2");
        bar3.classList.remove("-rotate-45");
        bar.classList.add("-translate-x-full");
    }

}