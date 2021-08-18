const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: '',
    phone: '',
    comment: '',
    
  }
  
  console.log(form.elements);
})