const logoSize = document.querySelector('.header__icon');
const headBar = document.querySelector('.header_content');
const logoZoom = 'scrollUp';
const webHeader = document.querySelector('.web_header');

function scrollJs() {
  const scrollDown = window.scrollY >= 50;
  if (scrollDown) {
    logoSize.classList.remove(`${logoZoom}`);
  } else {
    logoSize.classList.add(`${logoZoom}`);
  }
}

scrollJs();
window.addEventListener('scroll', scrollJs);
/* 
스크롤 값이 100보다 커지면 로고사이즈안에 폰트 크기를 30px로 준다
스크롤 값이 500보다 작아지면 원래 사이즈로 돌아간다

폰트가 아닌 트랜지션으로 스크롤이 100보다 커지면 트랜지션을 가지고있는 클래스를
넣음 아닐땐 다시 지움
*/
