/* ---- NAVIGATION BAR FUNCTION -----*/
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ---- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function(){
    headerShadow();
};
function headerShadow(){
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px";
    }
}

/* ----- TYPING EFFECT ----*/
// var typingEffect = new Typed(".typedText",{
//     strings : ["Web Developer","Designer","Progrmmer"],
//     loop : true,
//     typeSpeed : 100,
//     backSpeed : 80,
//     backDelay : 2000
// })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ---- */
// const sr = ScrollReveal({
//     origin : 'top',
//     distance : '80px',
//     duration : 2000,
// })


/* ---- HOME ----*/

/* ------ CHANGE ACTIVE LINK ------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.nav-link[href *=' + id + ']').classList.add('active');
            })
        }
    })
}

/* Tab Interface For Resume */
const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) =>{
    event.preventDefault();
    const clickedItemId = event.target.dataset.id;
    if (clickedItemId){
        resumeHeading.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        resumeTabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        const correspondingTab = document.getElementById(clickedItemId);
        correspondingTab.classList.add("active");
    }
}

