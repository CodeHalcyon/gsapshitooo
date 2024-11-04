// gsap.from("#page1 #box", {
//     scale: 0.5,
//     rotate: 360,
//     duration: 1.5,
//     opacity: 0,
// });

// // Ensure ScrollTrigger is registered
// gsap.registerPlugin(ScrollTrigger);

// gsap.from("#page2 #box", {
//     scale: 0.5,
//     rotate: 360,
//     duration: 1.5,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body", 
//         markers: true,
//         start: "top 70%"
//     },
// });

// gsap.from("#page3 #box", {
//     scale: 0.5,
//     rotate: 360,
//     duration: 1.5,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         scroller: "body", 
//         markers: true,
//         start: "top 70%"
//     },
// });


// gsap.to("#page2 #txt",{
//     transform: "translateX(-76%)",
//     scrollTrigger:{
//         trigger: "#page2",
//         markers: true,
//         start: "top 20%",
//         end: "top -150%",
//         pin: true,
//         scrub: 2
//     }
// })



// Check viewport width and apply appropriate translateX value
let translateXValue;

if (window.innerWidth >= 1024) {
    // For desktop screens
    translateXValue = "-76%";
} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    // For tablets
    translateXValue = "-50%";
} else {
    // For mobile screens
    translateXValue = "-30%";
}

// Apply GSAP animation with the determined translateX value
gsap.to("#page2 #txt", {
    x: translateXValue, // Use `x` property for better compatibility
    scrollTrigger: {
        trigger: "#page2",
        markers: true,
        start: "top 20%",
        end: "top -150%",
        pin: true,
        scrub: 2
    }
});

