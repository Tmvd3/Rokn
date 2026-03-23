const productsDB = {
    novelties: [
        {
            name: "Темпура чеддер с форелью",
            desc: "Нежная форель, сыр чеддер и хрустящая темпура.",
            price: "499 ₽",
            image: "https://static.tildacdn.com/stor6363-3235-4933-b364-636364336463/38482170.jpg",
            badge: "NEW"
        },
        {
            name: "Юдзу с дымком",
            desc: "Копченый угорь, юдзу-соус и авокадо.",
            price: "559 ₽",
            image: "https://avatars.mds.yandex.net/i?id=f742f5d1cf6f5e8084f5111f4dee8c00_l-5236662-images-thumbs&n=13",
            badge: "NEW"
        },
        {
            name: "Тропический с креветкой",
            desc: "Креветка, манго, ананас и сливочный соус.",
            price: "589 ₽",
            image: "https://mandarin-kokuy.qr-cafe.ru/imagebase/83d0b9c122b0ca4c4f24ebe74d314e1d.jpeg",
            badge: "NEW"
        },
        {
            name: "Пицца Том Ям с курицей",
            desc: "Острая основа том-ям, курица и моцарелла.",
            price: "690 ₽",
            image: "https://sushi-samurai-sev.ru/upload/resize_cache/iblock/108/1000_1000_0/s9cu6ubb9t2pbac83lf1vecsp24vyyqo.jpg",
            badge: "ХИТ"
        }
    ],
    rolls: [
        {
            name: "Филадельфия классик",
            desc: "Лосось, сливочный сыр и свежий огурец.",
            price: "529 ₽",
            image: "https://starsrus.ru/upload/iblock/872/1x22y1w1k9gtv04wne0algwzpr5b8ovs.jpg"
        },
        {
            name: "Калифорния с крабом",
            desc: "Краб, авокадо и икра тобико.",
            price: "489 ₽",
            image: "https://cdn.smt.bz/uploads/media/photo/584358/17.jpg"
        },
        {
            name: "Запеченный с угрем",
            desc: "Угорь, сыр и соус унаги.",
            price: "599 ₽",
            image: "https://avatars.mds.yandex.net/i?id=d9ce575fa51667ddd1e8673c2ce4e4d1_l-5666966-images-thumbs&n=13"
        }
    ],
    combo: [
        {
            name: "Рок-сет #1",
            desc: "Филадельфия, Калифорния и напиток.",
            price: "1190 ₽",
            image: "https://img.freepik.com/premium-photo/big-sushi-set-isolated-white-background_159315-644.jpg?semt=ais_hybrid&w=740",
            badge: "СЕТ"
        },
        {
            name: "Сет 'Рокнролль'",
            desc: "Три ролла и пицца Маргарита для компании.",
            price: "1490 ₽",
            image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-18/018/611/227/131/838/100032549084b0.jpg",
            badge: "BEST"
        }
    ],
    pizza: [
        {
            name: "Пепперони",
            desc: "Пикантная пепперони и тянущаяся моцарелла.",
            price: "590 ₽",
            image: "https://static.tildacdn.com/stor3563-3664-4438-b562-346335396639/34964175.jpg"
        },
        {
            name: "Маргарита",
            desc: "Моцарелла, томатный соус и базилик.",
            price: "490 ₽",
            image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-99/921/428/110/915/37/100040809142b0.jpg"
        },
        {
            name: "Четыре сыра",
            desc: "Дорблю, пармезан, моцарелла и сливочная база.",
            price: "620 ₽",
            image: "https://avatars.mds.yandex.net/i?id=7a7709992b9542a79fd2f1848fc0f8d8_l-4599171-images-thumbs&n=13"
        }
    ],
    hot: [
        {
            name: "Лапша WOK с курицей",
            desc: "Рисовая лапша, курица и соус терияки.",
            price: "389 ₽",
            image: "https://sushiart-vrn.ru/upload/resize_cache/iblock/3eb/600_600_1/3eb13638cbf2b47b8c8d8653a8f0d6b6.jpg"
        },
        {
            name: "Рис с морепродуктами",
            desc: "Микс морепродуктов, рис и овощи wok.",
            price: "459 ₽",
            image: "https://sushiart-vrn.ru/upload/iblock/043/043bbfd4262120567ea14c46c486b686.jpg"
        }
    ],
    salads: [
        {
            name: "Поке с лососем",
            desc: "Лосось, рис, авокадо и овощи.",
            price: "529 ₽",
            image: "https://avatars.mds.yandex.net/i?id=fb8ea920e026c9d2de54c4f06f4c9190_sr-4289111-images-thumbs&n=13"
        },
        {
            name: "Цезарь с креветкой",
            desc: "Креветки, айсберг, пармезан и соус цезарь.",
            price: "470 ₽",
            image: "https://reg-inet.ru/upload/iblock/259/03q6pbgph5j1vnt0z05qllebashughn0.jpg"
        }
    ],
    soups: [
        {
            name: "Том Ям с креветками",
            desc: "Острый суп с креветками, грибами и кокосом.",
            price: "420 ₽",
            image: "https://avatars.mds.yandex.net/i?id=14d0d561061fb03a5c57f94126acca1c_l-10840831-images-thumbs&n=13"
        },
        {
            name: "Мисо суп",
            desc: "Легкий японский суп с тофу и водорослями.",
            price: "230 ₽",
            image: "https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-tofu-in-a-white-soup-bowl-image_2524000.jpg"
        }
    ],
    snacks: [
        {
            name: "Креветки в темпуре",
            desc: "Хрустящие креветки с фирменным соусом.",
            price: "410 ₽",
            image: "https://avatars.mds.yandex.net/i?id=cd656c891676c50fb71673487e02bc46_l-5650958-images-thumbs&n=13"
        },
        {
            name: "Наггетсы",
            desc: "Куриные наггетсы с хрустящей панировкой.",
            price: "250 ₽",
            image: "https://avatars.mds.yandex.net/i?id=7d24e24f4fbcd8b397beac34d8aa6d310498ec58-12759831-images-thumbs&n=13"
        }
    ],
    kids: [
        {
            name: "Мини-пицца ветчина и сыр",
            desc: "Небольшая пицца для маленьких гостей.",
            price: "320 ₽",
            image: "https://avatars.mds.yandex.net/i?id=467c5fa51426af7d7f032c835ee97b1742ecd34c-12490006-images-thumbs&n=13"
        },
        {
            name: "Детский набор",
            desc: "Картофель, наггетсы, соус и сок.",
            price: "390 ₽",
            image: "https://avatars.mds.yandex.net/i?id=978ac26936349e917bb0da2130706c95ab94e0ec-4102669-images-thumbs&n=13"
        }
    ],
    sauces: [
        {
            name: "Соус спайси",
            desc: "Острый сливочный соус к роллам и закускам.",
            price: "60 ₽",
            image: "https://avatars.mds.yandex.net/i?id=4668ee661811d1030dbacd6e0d39d042_l-10350577-images-thumbs&n=13"
        },
        {
            name: "Имбирь и васаби",
            desc: "Классическое дополнение к сетам и роллам.",
            price: "90 ₽",
            image: "https://avatars.mds.yandex.net/i?id=43dbac4287e6bf477680fad76113c530_l-16242408-images-thumbs&n=13"
        }
    ]
};

const categoryTitles = {
    novelties: "Новинки",
    rolls: "Роллы",
    combo: "Комбо / Сеты",
    pizza: "Пицца",
    hot: "Горячее",
    salads: "Салаты / Поке",
    soups: "Супы",
    snacks: "Закуски",
    kids: "Детское меню",
    sauces: "Соусы и добавки"
};

const modalTemplates = {
    about: `
        <h2><i class="fas fa-info-circle"></i> О нас</h2>
        <p>«Рокнролль» уже 17 лет готовит роллы, пиццу и горячие блюда для тех, кто любит яркий вкус и быструю доставку.</p>
        <div class="about-stats">
            <div class="stat-item">
                <div class="stat-number">17</div>
                <div>лет с вами</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">24/7</div>
                <div>принимаем заказы</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div>довольных гостей</div>
            </div>
        </div>
        <div class="about-section-block">
            <h3>Почему нас выбирают</h3>
            <p>Мы делаем ставку на понятное меню, хорошие порции, аккуратную сборку заказов и теплый сервис.</p>
        </div>
    `,
    game: `
        <h2><i class="fas fa-gamepad"></i> Игровая зона</h2>
        <p>У нас можно не только поесть, но и провести время с друзьями: настолки, приставка и мини-турниры по выходным.</p>
        <div class="game-features">
            <div class="game-feature"><i class="fas fa-dice"></i><p>Настольные игры для компании.</p></div>
            <div class="game-feature"><i class="fas fa-tv"></i><p>Консольная зона с большими экранами.</p></div>
            <div class="game-feature"><i class="fas fa-trophy"></i><p>Регулярные розыгрыши и тематические вечера.</p></div>
        </div>
        <div class="game-highlight">Следи за анонсами в приложении и участвуй в мероприятиях.</div>
    `,
    delivery: `
        <h2><i class="fas fa-truck-fast"></i> Доставка и оплата</h2>
        <p>Принимаем заказы круглосуточно. Среднее время доставки зависит от зоны, но мы стараемся привозить как можно быстрее.</p>
        <div class="delivery-cards">
            <div class="delivery-card">
                <i class="fas fa-clock"></i>
                <div class="card-title">Время</div>
                <div class="card-value">45-60 мин</div>
                <div class="card-desc">Среднее время доставки по городу.</div>
            </div>
            <div class="delivery-card">
                <i class="fas fa-wallet"></i>
                <div class="card-title">Оплата</div>
                <div class="card-value">Онлайн / карта</div>
                <div class="card-desc">Удобно оплатить на сайте или при получении.</div>
            </div>
            <div class="delivery-card">
                <i class="fas fa-bag-shopping"></i>
                <div class="card-title">Самовывоз</div>
                <div class="card-value">15-20 мин</div>
                <div class="card-desc">Соберем заказ заранее к вашему приходу.</div>
            </div>
        </div>
        <div class="delivery-phone">
            <i class="fas fa-phone-volume"></i>
            <div>
                <div class="phone-number">8 (800) 555-17-17</div>
                <div class="phone-label">Если нужен быстрый заказ по телефону</div>
            </div>
        </div>
    `,
    contacts: `
        <h2><i class="fas fa-phone-alt"></i> Контакты</h2>
        <p>Связаться с нами можно любым удобным способом. Подскажем по меню, акциям и статусу заказа.</p>
        <div class="about-section-block">
            <div class="contact-item"><i class="fas fa-phone"></i> 8 (800) 555-17-17</div>
        </div>
        <div class="about-section-block">
            <div class="contact-item"><i class="fas fa-location-dot"></i> Центральная улица, 17</div>
        </div>
        <div class="about-section-block">
            <div class="contact-item"><i class="fas fa-clock"></i> Работаем 24/7</div>
        </div>
    `,
    gifts: `
        <h2><i class="fas fa-gift"></i> Подарки к заказу</h2>
        <p>В честь 17-летия дарим бонусы и приятные комплименты к заказам из раздела новинок.</p>
        <div class="game-highlight">Оформите заказ на сумму от 1490 ₽ и получите подарок от шефа.</div>
    `
};

const productsArea = document.getElementById("productsArea");
const toastMsg = document.getElementById("toastMsg");
const categoryList = document.getElementById("categoryList");
const dynamicModal = document.getElementById("dynamicModal");
const modalInner = document.getElementById("modalInner");
const closeDynamicModal = document.getElementById("closeDynamicModal");
const appModal = document.getElementById("appModal");
const downloadAppBtn = document.getElementById("downloadAppBtn");
const closeAppModalBtn = document.getElementById("closeAppModalBtn");
const giftBanner = document.getElementById("giftBanner");
const appStoreBtn = document.getElementById("appStoreBtn");
const googlePlayBtn = document.getElementById("googlePlayBtn");

let toastTimerId;

function showToast(message) {
    clearTimeout(toastTimerId);
    toastMsg.textContent = message;
    toastMsg.classList.add("show");
    toastTimerId = window.setTimeout(() => {
        toastMsg.classList.remove("show");
    }, 2200);
}

function renderProducts(category) {
    const items = productsDB[category] || [];
    const title = categoryTitles[category] || "Меню";

    productsArea.innerHTML = `
        <h2 class="section-title">${title}</h2>
        <div class="product-grid">
            ${items.map((item) => `
                <article class="product-card">
                    <div class="card-img">
                        ${item.badge ? `<div class="badge-new">${item.badge}</div>` : ""}
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="card-info">
                        <h3>${item.name}</h3>
                        <p class="desc">${item.desc}</p>
                        <div class="price-order">
                            <div class="price">${item.price}</div>
                            <button class="order-btn" type="button" data-name="${item.name}">
                                <i class="fas fa-basket-shopping"></i> Заказать
                            </button>
                        </div>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function openModal(modal, content) {
    if (content !== undefined) {
        modalInner.innerHTML = content;
    }
    modal.classList.add("active");
}

function closeModal(modal) {
    modal.classList.remove("active");
}

categoryList.addEventListener("click", (event) => {
    const categoryItem = event.target.closest("li[data-category]");
    if (!categoryItem) {
        return;
    }

    document.querySelectorAll(".cat-list li").forEach((item) => {
        item.classList.remove("active-cat");
    });

    categoryItem.classList.add("active-cat");
    renderProducts(categoryItem.dataset.category);
});

productsArea.addEventListener("click", (event) => {
    const orderButton = event.target.closest(".order-btn");
    if (!orderButton) {
        return;
    }

    showToast(`"${orderButton.dataset.name}" добавлен в корзину`);
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const template = modalTemplates[link.dataset.modal];
        if (template) {
            openModal(dynamicModal, template);
        }
    });
});

document.querySelectorAll(".delivery-btn").forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".delivery-btn").forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        showToast(button.dataset.type === "delivery" ? "Выбрана доставка" : "Выбран самовывоз");
    });
});

downloadAppBtn.addEventListener("click", () => {
    openModal(appModal);
});

giftBanner.addEventListener("click", () => {
    openModal(dynamicModal, modalTemplates.gifts);
});

closeDynamicModal.addEventListener("click", () => closeModal(dynamicModal));
closeAppModalBtn.addEventListener("click", () => closeModal(appModal));

[dynamicModal, appModal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal(dynamicModal);
        closeModal(appModal);
    }
});

appStoreBtn.addEventListener("click", () => {
    window.open("https://www.apple.com/app-store/", "_blank", "noopener");
});

googlePlayBtn.addEventListener("click", () => {
    window.open("https://play.google.com/store", "_blank", "noopener");
});

renderProducts("novelties");
