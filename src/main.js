document.addEventListener("DOMContentLoaded", () => {
const sidebar = document.querySelector('.sidebar');
const firstBtn = sidebar.querySelector('.nav-btn:first-child');
const firstBtnIcon = firstBtn.querySelector('svg');
const firstBtnText = firstBtn.querySelector('h1');

function closeSidebar() {
  sidebar.style.width = 'max-content';
  
  sidebar.querySelectorAll('.nav-btn h1').forEach(h1 => {
    h1.style.display = 'none';
  });

  firstBtn.style.backgroundColor = 'transparent';
  firstBtn.style.borderRadius = '0';
  firstBtnIcon.style.backgroundColor = '#FFC10750'; 
  firstBtnIcon.style.borderRadius = '50%';
  firstBtnIcon.style.padding = '6px';
  firstBtnIcon.style.display = 'block';
}

function openSidebar() {
  sidebar.style.width = '280px';

  sidebar.querySelectorAll('.nav-btn h1').forEach(h1 => {
    h1.style.display = 'block';
  });

  firstBtn.style.backgroundColor = '#FFC10750'; 
  firstBtn.style.borderRadius = '0 25px 25px 0';

  firstBtnIcon.style.backgroundColor = 'transparent';
  firstBtnIcon.style.borderRadius = '0';
  firstBtnIcon.style.padding = '0';
  firstBtnIcon.style.display = 'inline';
}

closeSidebar();

sidebar.addEventListener('mouseenter', openSidebar);
sidebar.addEventListener('mouseleave', closeSidebar);


});
