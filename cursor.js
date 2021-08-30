const mosueCursor = document.querySelector(".cursor");
const containerLink = document.querySelectorAll(".container ul");

window.addEventListener('mousemove',cursor)

function cursor(e/*e=event*/ ) {
    mosueCursor.style.left = e.pageX + "px";
    mosueCursor.style.top = e.pageY + "px";
    mosueCursor.style.display = "block"
}
/* study about a 'forEach'*/
containerLink.forEach(link => {
    link.addEventListener("mouseover", ()=> {
        mosueCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
    })
    link.addEventListener("mouseleave", ()=> {
        mosueCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
}); 
/*----------------------*/

/*get info from 'Dev Ed__youtuber'*/