
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    projects=document.querySelectorAll(".project")
    images=document.querySelectorAll(".project-image")
    const totalProjects = projects.length;


ScrollTrigger.create({
  trigger: ".recent-work",
  start: "top top",
  end: "+=400%",
  pin: true,
  scrub: true,
  markers: false,
  onUpdate: self => {
     const progress = gsap.utils.clamp(0, 0.999, self.progress);
    const index = Math.floor(progress * projects.length);
    showProject(index);
  }
});


    gsap.to(".skills",{
        scrollTrigger:{
            trigger:".skills",
            start:"center center",
            end:"+=100%",
            scrub:2,
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
                project.style.opacity="1"
                images[index].style.visibility="visible"
            }
            else{
            project.style.opacity="0.3"
            images[index].style.visibility="hidden"
            }
        });
    }
    ScrollTrigger.refresh();

 });

