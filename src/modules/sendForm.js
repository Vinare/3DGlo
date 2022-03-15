const sendForm = ({
  formID,
  someElem = []
}) => {
  const form = document.getElementById(formID);
  const allInputs = document.querySelectorAll('input')
  const allSelects = document.querySelectorAll('select')
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо!Наш менеджер с вами свяжется.'

  const validate = (list) => {
    // работает кастомная валидация^^
    let success = true
    return success
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    formData.forEach((val, key) => {
      formBody[key] = val
    })

    someElem.forEach(elem => {
      const element = document.getElementById(elem.id)

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value
      }
    })

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText

          formElements.forEach(input => {
            input.value = ''
          });

          // чистим все inputs и selects после отправки форм
          [...allInputs, ...allSelects].forEach(input => input.value = '')

          setTimeout(() => {
            form.removeChild(statusBlock);
          }, 5000);
        })
        .catch(error => {
          statusBlock.textContent = errorText
          setTimeout(() => {
            form.removeChild(statusBlock);
          }, 5000);

        })
    } else {
      return alert('Данные не валидны!!!')
    }

    statusBlock.textContent = loadText
    form.append(statusBlock)
  }

  statusBlock.style.color = '#19b5fe'

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожааааалуйста!')
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault()

      submitForm()
      console.log('Отправлено');
    })
  } catch (error) {
    console.log(error.message);
  }
}

export default sendForm