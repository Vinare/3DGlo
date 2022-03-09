const validations = () => {
  const inputMessage = document.getElementById("form2-message")
  const inputText = document.querySelectorAll("form input[type='text']")
  const inputEmail = document.querySelectorAll("form input[type='email']")
  const inputPhone = document.querySelectorAll("form input[type='tel']")

  const regExpText = /[^а-я\-\s]+/i
  const regExpEmail = /[^a-z\@\-\_\.\!\~\*\']+/i
  const regExpPhone = /[^0-9\(\)\-]+/i

  const manyDash = /(\-+)/g
  const manySpace = /(\s+)/g
  const edgeDash = /^\-|\-$/g
  const edgeSpace = /^\s+|\s+$/g

  inputText.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(regExpText, "")
    })
  })

  inputEmail.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(regExpEmail, "")
    })
  })

  inputPhone.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(regExpPhone, "")
    })
  })

  inputMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(regExpText, "")
  })

  inputText.forEach((input) => {
    input.addEventListener("blur", (e) => {
      let capitalizeLetterFunc = (match) => match.toUpperCase()

      e.target.value = e.target.value
        .replace(manyDash, "-")
        .replace(manySpace, " ")
        .replace(edgeDash, "")
        .replace(edgeSpace, "")
      
      e.target.value = e.target.value.toLowerCase()
      e.target.value = e.target.value
      .replace(/^[а-я]{1}|\s{1}[а-я]{1}/gi, capitalizeLetterFunc)
    })
  })

  inputEmail.forEach((input) => {
    input.addEventListener("blur", (e) => {
      e.target.value = e.target.value
        .replace(manyDash, "-")
        .replace(manySpace, " ")
        .replace(edgeDash, "")
        .replace(edgeSpace, "")
    })
  })

  inputPhone.forEach((input) => {
    input.addEventListener("blur", (e) => {
      e.target.value = e.target.value
        .replace(manyDash, "-")
        .replace(manySpace, " ")
        .replace(edgeDash, "")
        .replace(edgeSpace, "")
    })
  })
}

export default validations