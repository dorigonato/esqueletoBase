const controls = document.querySelectorAll('.control');
let currrentItem = 0;
const items = document.querySelectorAll('.carouselItem');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrowLeft');
        
        if (isLeft) {
            currrentItem -= 1;
        } else {
            currrentItem += 1;
        }

        if (currrentItem >= maxItems) {
            currrentItem = 0;
        }

        if (currrentItem <0) {
            currrentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('currentCarouselItem'));

        items[currrentItem].scrollIntoView({
            inline: "center",
            behavior: "instant",
        })

        items[currrentItem].classList.add('currentCarouselItem');
        
    });
});