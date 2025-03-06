
function smooth_scrol (){
    const scroll = new LocomotiveScroll({
      el: document.querySelector(''),
      smooth: true
});
}

function animation(){
    gsap.from(".navbar h1",{
        opacity:0,
        delay:1.4,
        duration:0.5,
        scrollTrigger:{
           trigger:".navbar h1",
           scroller:"body",
           start:"top 75%",
    }  
    })
    
    gsap.from(".page-1 h1",{
        opacity:0,
        y:50,
        duration:0.5,
        delay:0.6,
        stagger:0.1,
    })

    gsap.from(".page-1 img",{
        opacity:0,
        duration:0.5,
        delay:0.2,
        scrollTrigger:{
           trigger:".page-1 img",
           scroller:"body",
           start:"top 65%",
        }
    })
    
    gsap.from(".page-3 .part-1 span h1",{
        opacity:0,
        y:30,
        duration:0.8,
        stagger:0.4,
        scrollTrigger:{
           trigger:".page-3 .part-1 span h1",
           scroller:"body",
           start:"top 75%",
        }
    })
    
    gsap.from(".page-4-header h1",{
        opacity:0,
        duration:1,
        scrollTrigger:{
           trigger:".page-4-header h1",
           scroller:"body",
           start:"top 80%",
    }  
    })
    
    gsap.from(".page-4-header button",{
        opacity:0,
        y:15,
        duration:0.3,
        scrollTrigger:{
           trigger:".page-4-header button",
           scroller:"body",
           start:"top 80%",
    }  
    })
    
    gsap.from(".page-4-header h5",{
        opacity:0,
        y:10,
        duration:0.6,
        scrollTrigger:{
           trigger:".page-4-header h5",
           scroller:"body",
           start:"top 70%",
    }  
    })
    
    gsap.from(".content",{
        opacity:0,
        x:-20,
        duration:1,
        scrollTrigger:{
           trigger:".content",
           scroller:"body",
           start:"top 70%",
    }  
    })
    
    gsap.from(".page-4-content h2",{
        opacity:0,
        x:-20,
        duration:0.5,
        scrollTrigger:{
           trigger:".page-4-content h2",
           scroller:"body",
           start:"top 35%",      
    }
    })
    
}

function cursor(){
    let page3part2 = document.querySelector(".page-3 .part-2")
    let cursor = document.querySelector(".page-3 .part-2 h2")
    
    page3part2.addEventListener("mouseenter",function(){
        cursor.style.opacity = 1
    })
    
    page3part2.addEventListener("mouseleave",function(){
        cursor.style.opacity = 0

    })
    
    page3part2.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            left:dets.x-20,
            top:dets.y-50,
            
        })
    })
    
}

function sideBar(){
    let openMenubar = document.querySelector(".ri-menu-3-line")
    let crossMenubar = document.querySelector(".ri-close-large-line")
      
    let tl = gsap.timeline()
      
    tl.to(".navbar-center",{
          top:0,
          duration:0.3,
    })
    
    tl.pause()
    
    openMenubar.addEventListener("click",function(){
      tl.play()
    })
    crossMenubar.addEventListener("click",function(){
      tl.reverse()
    })
}


animation()
cursor()
sideBar()
