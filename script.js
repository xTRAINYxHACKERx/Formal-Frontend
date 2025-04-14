const loginlink = document.querySelector('.login-link');
const container = document.querySelector('.container');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerlink.addEventListener('click', ()=> {
    container.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    container.classList.remove('active');
});


btnpopup.addEventListener('click', () => {
    container.classList.add('active-popup');    
  });

  iconClose.addEventListener('click', () => {
    container.classList.remove('active-popup');
  });