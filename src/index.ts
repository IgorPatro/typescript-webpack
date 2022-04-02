import sendForm from "./form"

const form = document.querySelector("form")

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    sendForm(form)
  })
}
