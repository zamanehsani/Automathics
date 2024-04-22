document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      accordionItems.forEach(item => {
        item.classList.remove('open');
        item.querySelector('.accordion-content').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
