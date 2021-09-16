// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// const tl2 = gsap.timeline({ defaults: { ease: "bounce.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
// tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".contenedor-principal-datos", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

gsap.to(".dot1-princ", {duration: 1, ease:"bounce.in", x:"20%", y:"30%", delay: 1});
gsap.to(".dot2-princ", {duration: 1, ease:"bounce.in", x:"300px", y:"0px", delay: 1});
gsap.to(".dot3-princ", {duration: 1, ease:"bounce.in", x:"200px", y:"450px", delay: 1});
gsap.to(".dot4-princ", {duration: 1, ease:"bounce.in", x:"800px", y:"500px", delay: 1});