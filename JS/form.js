const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const fields = [form.elements.name, form.elements.phone, form.elements.comment]
  const data = {
    name: form.elements.name.value,
    phone: form.elements.phone.value,
    comment: form.elements.comment.value,
  }

  let isValid = true;
  
  fields.forEach(field => {
    if (!field.value.length) {
      isValid = false;
      field.classList.add('error')
    } else {
      field.classList.remove('error')
    }
  })

  console.log(isValid);
})