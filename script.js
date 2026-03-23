
const productsDB = {
    novelties: [
        { 
            name: "Темпура чеддер с форелью", 
            desc: "Нежная форель, сыр чеддер, темпура", 
            price: "499 ₽", 
            image: "https://static.tildacdn.com/stor6363-3235-4933-b364-636364336463/38482170.jpg",
            badge: "NEW" 
        },
        { 
            name: "Юдзу с дымком", 
            desc: "Копченый угорь, юдзу-соус, авокадо", 
            price: "559 ₽", 
            image: "https://avatars.mds.yandex.net/i?id=f742f5d1cf6f5e8084f5111f4dee8c00_l-5236662-images-thumbs&n=13",
            badge: "NEW" 
        },
        { 
            name: "Тропический с креветкой", 
            desc: "Креветка, манго, ананас", 
            price: "589 ₽", 
            image: "https://mandarin-kokuy.qr-cafe.ru/imagebase/83d0b9c122b0ca4c4f24ebe74d314e1d.jpeg",
            badge: "NEW" 
        },
        { 
            name: "Пицца Том ям с курицей", 
            desc: "Острая том-ям, курица, моцарелла", 
            price: "690 ₽", 
            image: "https://sushi-samurai-sev.ru/upload/resize_cache/iblock/108/1000_1000_0/s9cu6ubb9t2pbac83lf1vecsp24vyyqo.jpg",
            badge: "ХИТ" 
        }
    ],
    rolls: [
        { 
            name: "Филадельфия классик", 
            desc: "Лосось, сливочный сыр, огурец", 
            price: "529 ₽", 
            image: "https://starsrus.ru/upload/iblock/872/1x22y1w1k9gtv04wne0algwzpr5b8ovs.jpg",
            badge: "" 
        },
        { 
            name: "Калифорния с крабом", 
            desc: "Краб, авокадо, икра тобико", 
            price: "489 ₽", 
            image: "https://cdn.smt.bz/uploads/media/photo/584358/17.jpg",
            badge: "" 
        },
        { 
            name: "Запеченный с угрем", 
            desc: "Угорь, сыр, соус унаги", 
            price: "599 ₽", 
            image: "https://avatars.mds.yandex.net/i?id=d9ce575fa51667ddd1e8673c2ce4e4d1_l-5666966-images-thumbs&n=13",
            badge: "" 
        }
    ],
    combo: [
        { 
            name: "Рок-сет #1", 
            desc: "Филадельфия + Калифорния + напиток", 
            price: "1190 ₽", 
            image: "https://img.freepik.com/premium-photo/big-sushi-set-isolated-white-background_159315-644.jpg?semt=ais_hybrid&w=740",
            badge: "СЕТ" 
        },
        { 
            name: "Сет 'Рокнролль'", 
            desc: "3 ролла + пицца маргарита", 
            price: "1490 ₽", 
            image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-18/018/611/227/131/838/100032549084b0.jpg",
            badge: "BEST" 
        }
    ],
    pizza: [
        { 
            name: "Пепперони", 
            desc: "Пикантная пепперони, моцарелла", 
            price: "590 ₽", 
            image: "https://static.tildacdn.com/stor3563-3664-4438-b562-346335396639/34964175.jpg",
            badge: "" 
        },
        { 
            name: "Маргарита", 
            desc: "Моцарелла, базилик", 
            price: "490 ₽", 
            image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-99/921/428/110/915/37/100040809142b0.jpg",
            badge: "" 
        },
        { 
            name: "Четыре сыра", 
            desc: "Дорблю, пармезан, моцарелла", 
            price: "620 ₽", 
            image: "https://avatars.mds.yandex.net/i?id=7a7709992b9542a79fd2f1848fc0f8d8_l-4599171-images-thumbs&n=13",
            badge: "" 
        }
    ],
    hot: [
        { 
            name: "Лапша WOK с курицей", 
            desc: "Рисовая лапша, курица, терияки", 
            price: "389 ₽", 
            image: "https://kandry.sushi-fabrika.ru/upload/resize_cache/iblock/78a/z4yynvxo890t30xtnw4jed2px8qau954/600_600_1/вок%20с%20кур.png",
            badge: "" 
        },
        { 
            name: "Рис с морепродуктами", 
            desc: "Микс морепродуктов", 
            price: "459 ₽", 
            image: "https://sushiart-vrn.ru/upload/iblock/043/043bbfd4262120567ea14c46c486b686.jpg",
            badge: "" 
        }
    ],
    salads: [
        { 
            name: "Поке с лососем", 
            desc: "Лосось, рис, авокадо", 
            price: "529 ₽", 
            image: "https://avatars.mds.yandex.net/i?id=fb8ea920e026c9d2de54c4f06f4c9190_sr-4289111-images-thumbs&n=13",
            badge: "" 
        },
        { 
            name: "Цезарь с креветкой", 
            desc: "Креветки, айсберг, пармезан", 
            price: "470 ₽", 
            image: "https://reg-inet.ru/upload/iblock/259/03q6pbgph5j1vnt0z05qllebashughn0.jpg",
            badge: "" 
        }
    ],
    soups: [
        { 
            name: "Том Ям с креветками", 
            desc: "Острый суп с креветками", 
            image: "https://avatars.mds.yandex.net/i?id=14d0d561061fb03a5c57f94126acca1c_l-10840831-images-thumbs&n=13",
            price: "570 ₽",
            badge: "" 
        }, 
        {
            name: "Мисо суп с тофу",
            desc: "Традиционный японский суп с тофу",
            image: "https://avatars.mds.yandex.net/i?id=a4d308cf0118ce57809a414928470aa1_l-5669663-images-thumbs&n=13",
            price: "450 ₽",
            badge: ""
        }
    ],
}