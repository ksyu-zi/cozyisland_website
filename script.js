const nav = document.querySelector('#nav');
const nav_btn = document.querySelector('#nav_btn');
const nav_btn_img = document.querySelector('#nav_btn_img');
const nav_title = document.querySelectorAll('.navigation_title')
const up_btn = document.querySelector('.up_btn')

nav_btn.onclick = () => {
    if (nav.classList.toggle('open')) {
        nav_btn_img.src = 'image/close.png';
        for (const title of nav_title) {
            title.addEventListener('click', () => {
                nav.classList.remove('open')
                nav_btn_img.src = 'image/menu.png';
            })
        }
    }
    else {
        nav_btn_img.src = 'image/menu.png';
    }
}

up_btn.onclick = () => {
    window.scrollTo(window.pageXOffset, 0)
    up_btn.classList.add('up_btn_none')
}
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        up_btn.classList.remove('up_btn_none')
    }
})