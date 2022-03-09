const calc = () => {
  const inputNumber = document.querySelectorAll(".calc-block input")

  const regExpNumber = /[^0-9]+/i

  inputNumber.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(regExpNumber, "")
    })
  })
}

export default calc