gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const meowMeContainer = document.querySelector(".meow-me")
const meowMeForm = document.querySelector(".meow-me form")
const meowMeSubmit = document.querySelector(".meow-me button")
const allInputs = document.querySelectorAll(".focusable")
const overlayFocus = document.querySelector(".overlay-focus")

const meowMeTl = gsap.timeline()

const meowMeFormSubmit = event => {
  event.preventDefault()
  console.log("submitted")
  meowMeForm.removeEventListener("submit", meowMeFormSubmit)
  meowMeForm.addEventListener("submit", event => {
    event.preventDefault()
  })
}
meowMeForm.addEventListener("submit", meowMeFormSubmit)

const overlayOnFocus = mode => {
  meowMeContainer.classList[mode]("focused")
  overlayFocus.classList[mode]("overlay-focus-on")
}

overlayFocus.addEventListener("click", event => {
  overlayOnFocus("remove")
})

window.addEventListener("scroll", event => {
  overlayOnFocus("remove")
  allInputs.forEach(input => {
    input.blur()
  })
})

allInputs.forEach(input => {
  input.addEventListener("focus", event => {
    overlayOnFocus("add")
  })
})

meowMeContainer.addEventListener(
  "click",
  event => {
    meowMeTl.to(meowMeContainer, { duration: 0.1, scale: 1.0 })
    meowMeTl.to(meowMeContainer, {
      duration: 0.2,
      scale: 1.1,
      ease: "ExpoScaleEase",
    })
    meowMeTl.to(meowMeContainer, { duration: 0.1, scale: 1.0 })
  },
  {
    once: true,
  }
)

// TODO form validation

// const nameValidated = false;
// const emailValidated = false;
// const messageValidated = false;
