//__model_1__//////////////////////////////////////////////////////
//only works on "FIRST TAG WHICH HAVE CLASS:be__big-cursor"
const mosueCursor = document.querySelector(".cursor");
const beBigCursor = document.querySelector(".be__big-cursor");

const BE_BIG_CURSOR = "be__big-cursor";
const GROW_CURSOR = "grow-cursor";
const HOVERED_CURSOR = "hovered-cursor";


window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);


function cursor(e) {
    mosueCursor.style.left = e.pageX + "px";
    mosueCursor.style.top = e.pageY + "px";
    mosueCursor.style.display = "block";
}

function activeCursor(e) {
    const item = e.target;
    if(item.classList.contains(BE_BIG_CURSOR)){
        mosueCursor.classList.add(GROW_CURSOR);
        item.classList.add(HOVERED_CURSOR);
    } else {
        mosueCursor.classList.remove(GROW_CURSOR);
        beBigCursor.classList.remove(HOVERED_CURSOR);
    }    
}



//__model_2__//////////////////////////////////////////////////////
//const mosueCursor = document.querySelector(".cursor");
//const beBigCursor = document.querySelectorAll(".be__big-cursor");
//
//const BE_BIG_CURSOR = "be__big-cursor";
//const GROW_CURSOR = "grow-cursor";
//const HOVERED_CURSOR = "hovered-cursor";
//
//window.addEventListener("mousemove", cursor);
//
//function cursor(e) {
//   mosueCursor.style.left = e.pageX + "px";
//    mosueCursor.style.top = e.pageY + "px";
//   mosueCursor.style.display = "block";
//}
//
//beBigCursor.forEach(link => {
//    link.addEventListener("mouseover", ()=> {
//        mosueCursor.classList.add("grow-cursor");
//        link.classList.add("hovered-cursor");
//    });
//    link.addEventListener("mouseleave", ()=> {
//        mosueCursor.classList.remove("grow-cursor");
//       link.classList.remove("hovered-cursor");
//    });
//}); 
//
//get info from 'Dev Ed__youtuber'
///////////////////////////////////////////////////////////////////