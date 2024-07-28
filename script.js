let link = document.getElementsByClassName("link");
let currentvalue =1;

function activelink(){
    for(1 of link){
      1..classlist.remove("active")

    }
    Event.target.classlist.add("active");
    currentvalue = Event.target.value;
}
function lastbutton(){
    if(currentvalue>1){
        for(1 of link){
            1..classlist.remove("active"); 
    }
    currentvalue--;
    link[ currentvalue-1].classList.add("active");
}
}

function prevbutton(){
    if(currentvalue<6){
        for(1 of link){
            1..classlist.remove("active"); 
    }
    currentvalue++;
    link[ currentvalue-1].classList.add("active");
}
}