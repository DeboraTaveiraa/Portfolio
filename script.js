document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do menu e as seções correspondentes
    const menuItems = document.querySelectorAll('.portfolio-cards__item');
    const backButtons = document.querySelectorAll('.portfolio-icon__arrow-left');

    // Adiciona um evento de clique para cada item de menu
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove a animação de rotação de todos os cards
            menuItems.forEach(i => i.classList.remove('rotate'));
            
            // Adiciona a animação de rotação ao item clicado
            item.classList.add('rotate');
            
            // Aguarda o fim da animação antes de ocultar os cards e exibir a seção
            setTimeout(() => {
                // Oculta a div com os cards
                setShowCards(false);
                
                // Remove a animação de rotação do card clicado após ocultar os cards
                item.classList.remove('rotate');

                // Mostra a seção relacionada ao item clicado
                const targetSection = document.getElementById(item.getAttribute('data-target'));
                removesAllActiveSections();
                
                // Exibe a seção correspondente
                targetSection.classList.add('active');
            }, 500); // O tempo deve ser igual à duração da animação
        });
    });

    // Adiciona um evento de clique para os botões de "voltar"
    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Seleciona a seção atual (a que está sendo exibida)
            const currentSection = button.closest('.portfolio-context');

            // Adiciona a classe de animação apenas à seção atual
            currentSection.classList.add('rotate');
            
            // Aguarda o fim da animação antes de ocultar a seção e exibir os cards
            setTimeout(() => {
                // Remove a animação de rotação da seção atual após ocultá-la
                currentSection.classList.remove('rotate');
                
                // Oculta todas as seções
                removesAllActiveSections();

                // Exibe novamente a lista de cards
                setShowCards(true);

                // Remove a animação de todos os cards para garantir que nenhum card esteja animado ao voltar
                menuItems.forEach(i => i.classList.remove('rotate'));
            }, 500); // O tempo deve ser igual à duração da animação
        });
    });
});

function removesAllActiveSections() {
    const sections = document.querySelectorAll('.portfolio-context');

    sections.forEach(section => section.classList.remove('active'));
}

function setShowCards(show) {
    const portfolioCards = document.querySelector('.portfolio-cards');
    portfolioCards.style.display = show ? 'flex' : 'none';
}