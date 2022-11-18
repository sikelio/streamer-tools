class Navbar {
    init() {
        const navbarMenuButton = document.getElementsByClassName('btn-nav-menu');
        const minimize = document.getElementById('minimize');
        const maximize = document.getElementById('maximize');
        
        for (let i = 0; i < navbarMenuButton.length; i++) {
            navbarMenuButton[i].addEventListener('click', () => {
                switch (navbarMenuButton[i].getAttribute('data-action')) {
                    case 'exit-fullscreen':
                        window.apiStreamTools.exitFullscreen();
                        this.#setMaximizeMinimize(minimize, maximize, navbarMenuButton[i], 'fullscreen');
                        break;
                    case 'fullscreen':
                        window.apiStreamTools.fullscreen();
                        this.#setMaximizeMinimize(maximize, minimize, navbarMenuButton[i], 'exit-fullscreen');
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
    }

    #setMaximizeMinimize(hide, show, element, status) {
        hide.classList.add('d-none');
        show.classList.remove('d-none');
        element.setAttribute('data-action', status);
    }
}
