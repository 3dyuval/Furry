import { Fetch } from "./classes.js"

const factElements = document.querySelectorAll(".fact")
const factButtons = document.querySelectorAll(".fact button")
const catFact = new Fetch("https://catfact.ninja/")

const init = () => {
  factElements.forEach(element => {
    catFact.get("fact").then(data => {
      element.querySelector("p").innerHTML = data.fact
    })
  })
}

init()

factButtons.forEach(button => {
  button.addEventListener("click", async event => {
    try {
      const factDiv = event.currentTarget.parentElement
      const paragraph = event.currentTarget.parentElement.querySelector("p")
      button.disabled = true
      button.textContent = "prr..."
      const data = await catFact.get("fact")

      gsap.fromTo(
        paragraph,
        { opacity: 0, duration: 2, y: -10 },
        { opacity: 1, y: 0 }
      )
      paragraph.innerHTML = data.fact

      button.textContent = "fetch"
      button.disabled = false
      button.blur()
      snackbar.duration = 2000
      snackbar.show("fact fetched!")
    } catch (error) {
      snackbar.show("fetch failed!")
      button.textContent = "fetch"
      button.disabled = false
      paragraph.innerHTML = "oops, fetch did not happen."
    }
  })
})
