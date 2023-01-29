const icons = [...document.querySelectorAll('.fa-chevron-down')];

icons.map(icon => {
  icon.addEventListener('click', (e) => {
    const parent = e.target.parentElement.lastElementChild;
    parent.classList.toggle('active');
  })
})