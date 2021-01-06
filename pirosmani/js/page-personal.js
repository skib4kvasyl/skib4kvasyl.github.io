// пеключання активного класу на сторінці з персональна інформація

const persTab = document.querySelectorAll('.personal__item');

persTab.forEach(pers => {
    pers.addEventListener('click', function () {
        persTab.forEach(perses => perses.classList.remove('personal__item--active'));
        this.classList.add('personal__item--active');
    });
});

// пеключання блоків контенту залежно від активного блоку "особиста інформація" або "іторія замовлень"

const persItems = document.querySelectorAll('[data-tab-target]');
const persContents = document.querySelectorAll('[data-tab-content]');

persItems.forEach((per) => {
    per.addEventListener('click', () => {
        const perTargets = document.querySelector(per.dataset.tabTarget);
        persContents.forEach((perAll) => {
            perAll.classList.remove('content__active');
        });
        perTargets.classList.add('content__active');
    });
});