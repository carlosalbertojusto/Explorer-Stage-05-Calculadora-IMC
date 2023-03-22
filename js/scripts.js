import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { isNotANumber, IMC } from "./utils.js"

const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const btnSubmit = document.querySelector("#btnSubmit")

function handleSubmit(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const weightOrHeightIsNotANumber =
    isNotANumber(weight) || isNotANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = IMC(weight, height)

  displayMessage(result)
}

function displayMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message

  Modal.open()
}

function handleKeyDownEnter(event) {
  if (event.key === "Enter") {
    Modal.open()
  }
}

btnSubmit.addEventListener("click", handleSubmit)
window.addEventListener("keydown", handleKeyDownEnter)
inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
