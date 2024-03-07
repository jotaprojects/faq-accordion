document.addEventListener('click', (e) => {
    if (!e.target.matches('.accordion__item-title')) return;

    const item = e.target.closest('.accordion__item');
    item.classList.toggle('accordion__item--active');
})
