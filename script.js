const tabMenu = document.querySelectorAll('.js-tabmenu li'); // é uma Array Like
const tabContent = document.querySelectorAll('.js-tabcontent section'); // Array Like

if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo'); // adiciona a classe ativo ao primeiro elemento

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}
