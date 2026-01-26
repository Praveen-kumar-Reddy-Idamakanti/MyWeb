 import Lenis from "https://unpkg.com/@studio-freight/lenis@1/dist/lenis.mjs";
 document.addEventListener("DOMContentLoaded", (event) => {
     const isMobile = window.innerWidth <= 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0;

    gsap.registerPlugin(ScrollTrigger)

    let lenis=null;
    
    if(!isMobile){
        lenis=new Lenis({
            smooth:true,
            lerp:0.08
        });
        lenis.on("scroll",ScrollTrigger.update);

        gsap.ticker.add((time)=>{
            lenis.raf(time*1000);
        });

        gsap.ticker.lagSmoothing(0);
    }

    if (!isMobile && lenis) {
        ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            if (arguments.length) {
            lenis.scrollTo(value, { immediate: true });
            }
            return lenis.scroll;
        },
        getBoundingClientRect() {
            return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
            };
        }
        });

    }

    //Recent work Section

    const projects=document.querySelectorAll(".project")
    const images=document.querySelectorAll(".project-image")

    showProject(0);
    ScrollTrigger.create({
        trigger: ".recent-work",
        start: "top top",
        end: "+=400%",
        pin: true,
        anticipatePin: 1,
        scrub: true,
        markers: false,
        onUpdate: self => {
            const progress = gsap.utils.clamp(0, 0.999, self.progress);
            const index = Math.floor(progress * projects.length);
            showProject(index);
        }
    });

    //Work Section
    const pictures=document.querySelectorAll(".work0");
    const names=document.querySelectorAll(".name");
    const description=document.querySelectorAll(".description");
    const video=document.querySelectorAll(".video");

    showWork(0);
    gsap.to(".pictures",{
        y:-1030,
        ease:"none",
        scrollTrigger:{
            trigger:".work",
            start:"top top",
            end:"+=800%",
            scrub:0.5,
            markers:false,
            pin:true,
            anticipatePin: 1,
            onUpdate: self=>{
                const progress =gsap.utils.clamp(0,0.999, self.progress);
                const index=Math.floor(progress*pictures.length);
                document.getElementById("work-no").textContent="0"+(index+1)

                showWork(index);
                // console.log("length: ",pictures.length)
                // console.log(pictures)
            }
        },
    })


    gsap.to(".work-no", {
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".work",
        start: "top top",
        end: "+=500%",
        scrub: 2
    }
    });

    //Skills section
    gsap.to(".skills",{
        scrollTrigger:{
            trigger:".skills",
            start:"center center",
            end:"+=100%",
            scrub:1,
            markers:false,
            pin:true,
            anticipatePin: 1,
        },
    });

    //HERO timeline
    let t1=gsap.timeline();
    t1
    .from(".hero",{
        duration: 1.5})
    .from(".upp-praveen",{y: -360,opacity:0.5,duration: 1.2},"-=1.5")
    .from(".lo-praveen",{y: 360,opacity:0.5,duration: 1.2},"-=1.5")
    .from(".des-text",{opacity:0, y:20,duration: 0.8})
    .from(".nav",{opacity:0,y:-20,duration: 0.5})



    function showProject(i){
        projects.forEach((project,index)=>{
            if (i===index){
                gsap.to(project,{
                    opacity:1,
                    duration:0.5,
                    ease:"power2.out"
                });
                gsap.to(images[index],{
                    autoAlpha:1,
                    scale:1,
                    y:0,
                    duration:0.6,
                    ease:"power3.out"
                });
            }
            else{
                gsap.to(project,{
                        opacity:0.3,
                        duration:0.4,
                    });
                gsap.to(images[index],{
                    autoAlpha:0,
                    scale:0.95,
                    y:20,
                    duration:0.4,
                    ease:"power2.out"
                });
            }
        });
    }   

    function showWork(i){
        console.log(i)
        names.forEach((ele,index)=>{
            if (i===index){
                description[index].style.visibility="visible";
                ele.style.opacity=1
                // video[index].style.visibility="visible"
            }
            else{
                description[index].style.visibility="hidden";
                ele.style.opacity=0.3
                // video[index].style.visibility="hidden"
            }
        })

    }

    window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

 });




