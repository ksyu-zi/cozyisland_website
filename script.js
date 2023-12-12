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

const pets = [
  {
    id: "656366a9ac1e6a40449b0a07",
    category: "Кот",
    name: "Томик",
    age: "2 года",
    sterilized: true,
    about: "игривый, ласковый",
    imageId: "image/animal0.png"
  },
  {
    id: "656366a9de1090eddc1e57c9",
    category: "Пес",
    name: "Нейт",
    age: "4 года",
    sterilized: true,
    about: "спокойный, послушный",
    imageId: "image/animal1.png"
  },
  {
    id: "656366a9c8a3ee9d900ec37d",
    category: "Кот",
    name: "Марсик",
    age: "3 месяца",
    sterilized: false,
    about: "озорной, любвеобильный",
    imageId: "image/animal2.png"
  },
  {
    id: "656366a927dae3a9322e0a06",
    category: "Кот",
    name: "Рыжик",
    age: "3 года",
    sterilized: true,
    about: "любит поспать, разговорчивый",
    imageId: "image/animal3.png"
  },
  {
    id: "656366a91332ab60de1f212d",
    category: "Кошка",
    name: "Бусинка",
    age: "4 месяца",
    sterilized: false,
    about: "любит поиграть, послушная",
    imageId: "image/animal4.png"
  },
  {
    id: "656366a9f24288ea5ad1ef93",
    category: "Собака",
    name: "Альба",
    age: "4 года",
    sterilized: false,
    about: "любит гулять, игривая",
    imageId: "image/animal5.png"
  },
  {
    id: "656366a99275a02fd0d38fde",
    category: "Пес",
    name: "Бублик",
    age: "7 y.o.",
    sterilized: false,
    about: "скромный, тактильный",
    imageId: "image/animal6.png"
  },
  {
    id: "65637b578db8a601e487f805",
    category: "Кошка",
    name: "Искорка",
    age: "6 месяцев",
    sterilized: false,
    about: "аккуратная, ласковая",
    imageId: "image/animal7.png"
  },
  {
    id: "65637b57a89161e6214a9e46",
    category: "Кот",
    name: "Барсик",
    age: "4 года",
    sterilized: false,
    about: "умный, любит поспать",
    imageId: "image/animal8.png"
  },
  {
    id: "65637b57ba2bbd7f5f35dbf3",
    category: "Кошка",
    name: "Муся",
    age: "1 год",
    sterilized: false,
    about: "смешная, тактильная",
    imageId: "image/animal9.png"
  },
  {
    id: "65637b575bd98ad01df10b9b",
    category: "Собака",
    name: "Грета",
    age: "2 месяца",
    sterilized: false,
    about: "послушная, милая",
    imageId: "image/animal10.png"
  },
  {
    id: "65637b5700250b799791271f",
    category: "Пёс",
    name: "Филя",
    age: "5 лет",
    sterilized: true,
    about: "понимающий, любит помогать",
    imageId: "image/animal11.png"
  },
  {
    id: "65637b57e93079ea14e78528",
    category: "Кот",
    name: "Сёма",
    age: "1 месяц",
    sterilized: false,
    about: "ласковый, любит поиграть",
    imageId: "image/animal12.png"
  },
  {
    id: "65637b5702b5687fbe491926",
    category: "Кот",
    name: "Джери",
    age: "9 месяцев",
    sterilized: false,
    about: "любит поспать, тактильный",
    imageId: "image/animal13.png"
  },
  {
    id: "65637b57082c3df01521183b",
    category: "Кот",
    name: "Кузя",
    age: "6 лет",
    sterilized: true,
    about: "спокойный, послушный",
    imageId: "image/animal14.png"
  },
  {
    id: "65637e199e255819320acbca",
    category: "Пёс",
    name: "Рой",
    age: "7 месяцев",
    sterilized: false,
    about: "активный, любит гулять",
    imageId: "image/animal15.png"
  },
  {
    id: "65637e19a6e36f0e44dd7fe4",
    category: "Пёс",
    name: "Абрам",
    age: "2 года",
    sterilized: false,
    about: "понимающий, послушный",
    imageId: "image/animal16.png"
  },
  {
    id: "65637e198cdc3efa2405897c",
    category: "Кот",
    name: "Дымок",
    age: "6 месяцев",
    sterilized: false,
    about: "озорной, игривый",
    imageId: "image/animal17.png"
  }
];

const elem = document.querySelector('.swiper-wrapper');
pets.forEach(element => {
    let html = `<div class="swiper-slide">
    <img class="img_animals" src=${element.imageId}>
    <p class="text_animals">${element.name}</p>
    <p class="text_animals">${element.age}</p>
    <p class="text_animals_about">${element.about}</p>
    <div class="btn_take">
    <button class="btn_animals" onclick="document.location='https://t.me/CozyIsland_bot'">Забрать</button>
    </div>
    </div>`
    elem.insertAdjacentHTML('beforeend', html)
});
const pageWidth = document.documentElement.scrollWidth
if (pageWidth > 700) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 3,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
} else if (pageWidth < 400) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    slidesPerGroup: 1,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
} else {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 2,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}
