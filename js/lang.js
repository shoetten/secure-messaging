Reveal.addEventListener('ready', () => {
  const langAreas = document.querySelectorAll('.lang-area');
  const buttons = document.querySelectorAll('.lang-selector__button');

  langAreas.forEach((area) => {
    area.classList.toggle('hide', area.dataset['lang'] !== 'de');
  });

  Reveal.sync();

  document.querySelectorAll('.lang-selector__button').forEach((el) => {
    el.addEventListener('click', (event) => {
      langAreas.forEach((area) => {
        area.classList.toggle('hide', area.dataset['lang'] !== el.dataset['lang']);
      });

      Reveal.sync();

      buttons.forEach((button) => {
        button.classList.toggle('lang-selector__button--active', el === button);
      });
    });
  });
});
