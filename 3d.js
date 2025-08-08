document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.banner .slider .item');
    const totalItems = items.length;

    // Set --quantity for all items
    items.forEach(item => {
        item.style.setProperty('--quantity', totalItems);
    });

    // Set --position for each item
    items.forEach((item, index) => {
        item.style.setProperty('--position', index + 1);
    });
});
