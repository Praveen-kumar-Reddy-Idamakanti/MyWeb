
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    projects=document.querySelectorAll(".project")
    images=document.querySelectorAll(".project-image")
    const totalProjects = projects.length;

    showProject(0);
    ScrollTrigger.create({
        trigger: ".recent-work",
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: true,
        markers: false,
        pinType:"fixed",
        onUpdate: self => {
            const progress = gsap.utils.clamp(0, 0.999, self.progress);
            const index = Math.floor(progress * projects.length);
            showProject(index);
        }
    });

    pictures=document.querySelectorAll(".work0");
    names=document.querySelectorAll(".name");
    description=document.querySelectorAll(".description");
    video=document.querySelectorAll(".video");

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
        end: "+=400%",
        scrub: 1
    }
    });
    gsap.to(".skills",{
        scrollTrigger:{
            trigger:".skills",
            start:"center center",
            end:"+=100%",
            scrub:1,
            markers:false,
            pin:true,
        },
    });
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
    ScrollTrigger.refresh();
 });

