const header = document.querySelector('header');
const mainMenu = document.querySelectorAll('.mainmenu > li');
const subMenu = document.querySelectorAll('.submenu');

for (let i = 0; i < mainMenu.length; i++) {

    mainMenu[i].addEventListener('mouseover', function () {
        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].style.display = 'block';
            header.style.height = '240px';    
        }

    });
}

