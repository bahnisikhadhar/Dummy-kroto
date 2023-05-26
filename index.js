const leftSide=document.getElementById("slide");

function slider(event) 
{
    // console.log(event);
    const {screenX}=event;
    leftSide.style.width= `${screenX}px`;
    // leftSide.style.width = `${event.clientX / window.innerWidth * 100}%` ;-----> this one is also correct
}

document.addEventListener("mousemove",slider);

