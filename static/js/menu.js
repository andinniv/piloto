// menu.js

// Exemplo de efeito de menu deslizante
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Alterna a classe 'active' no item do menu
            const subMenu = item.querySelector('.submenu');
            if (subMenu) {
                subMenu.classList.toggle('active');
            }
        });
    });
});

// Estilo CSS esperado (adicione ao CSS do projeto)
// .submenu { display: none; transition: max-height 0.3s ease; overflow: hidden; }
// .submenu.active { display: block; }
