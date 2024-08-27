const skillItems = document.querySelectorAll('.item');

skillItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('hovered');
  });
});