document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.nav__hamburger');
  const menu = document.querySelector('.menu__list');

  burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    menu.classList.toggle('active');

    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll('.menu__list-item-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      burger.classList.remove('open');
      menu.classList.remove('active');
      document.body.style.overflow = "";
    });
  })
})