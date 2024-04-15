import Snackbar from './snackbar.js'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)


const snack = new Snackbar()
const meowMeContainer = document.querySelector(".meow-me")
const meowMeForm = document.querySelector(".meow-me form")
const meowMeSubmit = document.querySelector(".meow-me button")
const meowMeFormInputs = meowMeForm.querySelectorAll('input:not([type="hidden"])')
const overlayFocus = document.querySelector(".overlay-focus")

const meowMeTl = gsap.timeline()


meowMeFormInputs.forEach(input => {
    input.addEventListener("change", () => {
      if (Array.from(meowMeFormInputs)
      .some(input => input.hasAttribute("required") && !input.validity.valid)) {
        meowMeSubmit.disabled = true
      } else {
        meowMeSubmit.disabled = false
      }
    })
})

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
