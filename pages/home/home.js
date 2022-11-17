const navbarMenuButton = document.getElementsByClassName('btn-nav-menu');
console.error(navbarMenuButton);

for (let i = 0; i < navbarMenuButton.length; i++) {
    navbarMenuButton[i].addEventListener('click', () => {
        switch (navbarMenuButton[i].getAttribute('data-action')) {
            case 'fullscreen':
                window.apiStreamTools.fullscreen();
                break;
            case 'close':
                window.apiStreamTools.close();
                break;
            default:
                return;
                break;
        }
    });
}