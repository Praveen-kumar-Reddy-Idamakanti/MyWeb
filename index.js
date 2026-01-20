
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    gsap.to(".skills",{
        scrollTrigger:{
            trigger:".skills",
            start:"center center",
            end:"+=70%",
            scrub:2,
            markers:true,
            pin:true,
        },
    })
    let t1=gsap.timeline();
    t1
    .from(".hero",{
        duration: 1.5
    })
    .from(".upp-praveen",{
        y: -360,
        opacity:0.5,
        duration: 1.2
    },"-=1.5")
    .from(".lo-praveen",{
        y: 360,
        opacity:0.5,
        duration: 1.2
    },"-=1.5")
    .from(".des-text",{
        opacity:0,
        y:20,
        duration: 0.8
    })
    .from(".nav",{
        opacity:0,
        y:-20,
        duration: 0.5
    })
 });

