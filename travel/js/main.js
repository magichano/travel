(function () {

    const burger=document.querySelector('.menuu');
    const nav=document.querySelector('.nav');
    const cross=document.querySelector('.crosss');

    burger.addEventListener('click', () => {
        nav.classList.add('nav_active');
    });
    
    cross.addEventListener('click', () => {
        nav.classList.remove('nav_active');
    });

}());