const sectionProject = document.getElementById("sectionProjects");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const isDesktop = window.matchMedia("(min-width: 1079px)").matches;
console.log(isDesktop)

if(isDesktop){
    animation(card1, "-30vw")
    animation(card2, "0vw")
    animation(card3, "30vw")
}

function animation(cards, x){
    gsap.to(cards ,{
        opacity: 1,
        x: x,
        duration: 10,
        ease: "power3.out",
        scrollTrigger:{
            trigger: sectionProject,
            start: "top center",
            end: "bottom bottom",
            //markers: true,
            scrub: 0.5,
        }
    })
}