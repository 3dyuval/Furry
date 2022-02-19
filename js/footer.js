
import Snackbar from "./snackbar.js"
const snackbar = new Snackbar()

const footerForm = document.getElementById("footer-form")
const success = document.getElementsByClassName("success")
const email = document.getElementById("your-email")

footerForm.addEventListener("submit", e => handleFooterSubmit(e))

function handleFooterSubmit(e) {
    e.preventDefault()
    snackbar.duration = 2000
    snackbar.show("thanks!")
    footerForm.style.display = "none"
    success[0].style.display = "block"
}