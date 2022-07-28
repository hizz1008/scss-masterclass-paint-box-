const VISIBLE = 'visible';
const INVISIBLE = 'invisible';
const underHero = document.querySelector('.under_hero');

window.addEventListener('scroll', fadeIn);

function fadeIn() {
  const reveals = document.querySelectorAll('.fade_content');

  for (let i = 0; i < reveals.length; i++) {
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add(`${VISIBLE}`);
      reveals[i].classList.remove(`${INVISIBLE}`);
    } else {
      reveals[i].classList.remove(`${VISIBLE}`);
      reveals[i].classList.add(`${INVISIBLE}`);
    }
  }
}

/*function fadeIn() {
  const scrollOwn = window.scrollY >= 80;
  if (scrollOwn) {
    underHero.classList.add(`${FadeIn}`);
    underHero.style.opacity = '1';
  } else {
    underHero.classList.remove(`${FadeIn}`);
    underHero.style.opacity = '0';
  }
}

function fadeIn() {
  const scrollOwn = window.scrollY >= 80;
  if (scrollOwn) {
    underHero.classList.add(`${VISIBLE}`);
    underHero.classList.remove(`${INVISIBLE}`);
  } else {
    underHero.classList.remove(`${VISIBLE}`);
    underHero.classList.add(`${INVISIBLE}`);
  }
}

function fadeIn() {
  const scrollTwo = window.scrollY >= 950;
  if (scrollTwo) {
    underHeroTwo.classList.add(`${VISIBLE}`);
    underHeroTwo.classList.remove(`${INVISIBLE}`);
  } else {
    underHeroTwo.classList.remove(`${VISIBLE}`);
    underHeroTwo.classList.add(`${INVISIBLE}`);
  }
}
 */
