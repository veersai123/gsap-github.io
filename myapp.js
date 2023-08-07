//======================= EPISODE 1 =======================
// gsap.to("#box",{
//     x:900,
//     y:200,
//     duration:2,
//     delay:1,
//      backgroundColor:"blue",
//      rotate:360,
//      scale:0.5
// })
// ===============
// gsap.to("h1",{
//      x:600,
//      color:"yellow",
//      duration:1,
//      delay:1,
// })
// gsap.to("h2",{
//     x:600,
//     color:"salmon",
//     duration:1,
//     delay:2,
// })
// gsap.to("h3",{
//     x:600,
//     color:"black",
//     duration:1,
//     delay:3,
// })
//itna bda code thode likhnege jaldi se shortcut batiye
//var tl=gsap.timeline(); // time line function synchronously chalne ke liye use hota hai
//tl.to("h1",{              // yaha per koi delay dene ki jaroorat nahi padi
//     x:600,
//     duration:1,
// })
// tl.to("h2",{
//     x:600,
//     duration:2,
// })
// tl.to("h3",{
//     x:600,
//     duration:3,
// })
// ==================================
// gsap.to("h1",{
//     x:600,
//     color:"black",
//     duration:1,
//     delay:0.5,
//     // stagger:1,(one by one move hoga sb ek sath move nhi honge)
//     yoyo:1,//(flactuate hoga from left to right)
//     repeat:1,//matlab ek baar repeat hoga
// })
//======================= EPISODE 2 =======================
var tl=gsap.timeline()
tl.from("#nav img,#nav h3,#nav h4,#nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,//(0.5 ke interval me sare elements )
})
tl.from("#main h1",{
    x:-200,
    opacity:0,
    stagger:0.5,//(one by one aayega usi interval me)
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3,
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:40,
    repeat:-1,
    duration:0.7,
    yoyo:true  //(uper se niche aata hai)
})