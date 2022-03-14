const sendForm = ({
  formID,
  someElem = []
}) => {
  const form = document.getElementById(formID);
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка...'
  const successText = 'Спасибо!Наш менеджер с вами свяжется.'

  const validate = (list) => {
    let success = true;

    list.forEach((item) => {
      if (item.classList.contains('form-email')) {
        if (!item.value.match(/.+@.+\..+/gi)) {
          success = false;
          return false;
        }
      } else if (item.classList.contains('form-phone')) {
        if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
          success = false;
          return false;
        }
      } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
        if (!item.value.match(/^[а-яА-Я][а-яА-Я]+[а-яА-Я]?$/g)) {
          success = false;
          return false;
        }
      } else if (item.classList.contains('mess')) {
        if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {
          success = false;
          console.log(item);
          return false;
        }
      }

    });

    return success;
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

    if (validate(formElements)) {
      sendData(formBody)
        .then(data => {
          statusBlock.textContent = successText

          formElements.forEach(input => {
            input.value = ''
          });
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
  }

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