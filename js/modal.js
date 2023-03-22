export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    Modal.wrapper.classList.add("open")
  },
  close() {
    Modal.wrapper.classList.remove("open")
  },
}

function handleCloseModal() {
  Modal.close()
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close()
  }
}
window.addEventListener("keydown", handleKeyDown)
Modal.buttonClose.addEventListener("click", handleCloseModal)
