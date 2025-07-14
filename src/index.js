import './style.css'
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

const contentController = (function () {
    const mainContainer = document.querySelector('main')
    const navContainer = document.querySelector('nav')

    let content = homePage()

    updateContent()

    navContainer.addEventListener('click', (event) => {
        if (event.target.type == 'button') {
            changeContent(event.target)
            updateContent()
        }
    })

    function changeContent(button) {
        switch (button.id) {
            case 'homeButton':
                console.log('home');
                content = homePage()
                break
            case 'menuButton':
                console.log('menu');
                content = menuPage()
                break
            case 'contactButton':
                console.log('contact');
                content = contactPage()
                break
            default:
                break;
        }
    }

    function updateContent() {
        mainContainer.innerText = ''
        mainContainer.appendChild(content)
    }
})();