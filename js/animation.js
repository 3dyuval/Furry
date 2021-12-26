gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, Draggable)

const dark = "#78006C",
  light = "#ffd1d1",
  light2 = "#faeaea"

ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
})
// -----------navbar scroll --------- //

document.querySelectorAll("nav li a").forEach(anchor => {
  anchor.addEventListener("click", event => {
    const section = event.currentTarget.getAttribute("href")
    gsap.to(window, { duration: 1.5, scrollTo: section })
  })
})

// -----------hero section --------- //

gsap.to("#furry .hero-img-bgcol", {
  scrollTrigger: { trigger: "#furry" },
  x: "-100%",
  duration: 1.5,
  ease: "power1.easeOut",
  backgroundColor: light,
})

gsap.from("#furry p, #furry h1", {
  scrollTrigger: { trigger: "#furry" },
  x: 20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
})
gsap.to("#furry h1, #furry p", {
  scrollTrigger: {
    trigger: "#furry h1",
    scrub: true,
    start: "bottom center",
  },
  color: dark,
  yPercent: 25,
})

gsap.to("#chillin .hero-img-bgcol", {
  scrollTrigger: { trigger: "#chillin", start: "top center" },
  x: "100%",
  duration: 1.5,
  ease: "power1.easeOut",
  backgroundColor: "#78006C",
})

gsap.from("#chillin p, #chillin h1", {
  scrollTrigger: { trigger: "#chillin", start: "top center" },
  x: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
})
gsap.to("#chillin h1, #chillin p", {
  scrollTrigger: {
    trigger: "#chillin h1",
    scrub: true,
    start: "bottom center",
  },
  color: light2,
  yPercent: 25,
})

// ---------- facts section ------- //

gsap.from(".fact", {
  scrollTrigger: { trigger: ".fact", start: "40% bottom" },
  yPercent: -20,
  duration: 1,
  stagger: 0.5,
})

gsap.from(".fact", {
  scrollTrigger: {
    trigger: ".fact",
    start: "top center",
    end: "+=50%",
    scrub: true,
  },
  opacity: 0,
})

// ---------- pictures section ------- //
const container = document.querySelector(".pictures-container")

for (let pic = 1; pic < 9; pic++) {
  let picDiv = document.createElement("div")
  picDiv.classList.add("picture")
  picDiv.setAttribute("picture", `${pic}`)
  container.appendChild(picDiv)
}

gsap.from(".pictures-container", {
  scrollTrigger: { trigger: "section.pictures" },
  xPercent: 100,
  duration: 2,
  ease: "expo",
})

// ----------- meow-me --------- //

gsap.from(".meow-me, .opening-hours", {
  scrollTrigger: { trigger: "section.meow" },
  opacity: 0,
  duration: 2,
  ease: "expo",
  stagger: 0.5,
})

Draggable.create(".pictures-container", {
  type: "x",
})
