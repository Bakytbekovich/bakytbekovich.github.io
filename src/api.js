import image from "./screens/test1.jpg";
export const tests = [
    {
        id: 1,
        title: "История",
        photo: "https://avatars.mds.yandex.net/i?id=066de8fe6960520a8aca95ab7f025f559170ba62-7464698-images-thumbs&n=13",
        description: "Проверь свое знание. На сколько хорошо знаешь историю.",
        category_id:3,
    },
    {
        id: 2,
        title: "English.Present Simple",
        photo: "https://avatars.mds.yandex.net/i?id=4d51c622f6fe822f3602e5da2d1ce01831f9bb23-8259800-images-thumbs&n=13",
        description: "А ты знаешь English?",
        category_id:2,
    },

    {
        id: 3,
        photo: "https://avatars.mds.yandex.net/i?id=92c8624fc2147a02f1bc06f3b845293ac80534da-7593510-images-thumbs&n=13",
        description: "Давай узнаем какой ты водитель.",
        category_id:8,
    },
    {
        id: 4,
        photo: "https://avatars.mds.yandex.net/i?id=2a0000017a00172b819e887e46b025620ea3-4613271-images-thumbs&n=13",
        description: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        category_id:8,
    },
    {
        id: 5,
        photo: "https://konstruktortestov.ru/files/05f5/4eaa/2138/e45d/4198/6c1a/923e/2f9e/1094858816_small.jpg",
        description: "ПДД",
        category_id:8,
    },
    {
        id: 6,
        photo: "https://avatars.mds.yandex.net/i?id=241feb759f18e2e09c5df0593df252fd78583db4-8209451-images-thumbs&n=13",
        description: "Test по English",
        category_id:2,
    },
    {
        id: 7,
        title:"Внимательный ли ты человек?",
        photo: "https://konstruktortestov.ru/files/dcf0/50ef/d821/37b9/969e/2b64/22f8/5fb0/2133849253_small.jpg",
        description: "Внимательный ли ты человек?",
        category_id:7,

    },
    {
        id: 8,
        title:"10 вопросов, ответы на которые должен знать каждый.",
        photo: "https://konstruktortestov.ru/images/test_noimg.jpg",
        description: "Внимательный ли ты человек?",
        category_id:6,

    },
    {
        id: 9,
        title:"Проверим, насколько хорошо варят ваши мозги?",
        photo: "https://konstruktortestov.ru/files/9a5c/d826/a8e5/5b50/3498/06bf/e893/e493/2413232289_small.jpg",
        category_id:7,

    },
   
]

export const questions = [
    {
        id: 1,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Германский план нападения на СССР («Барбаросса») предусматривал:",
        answers: [

            {
                id: 1,
                title: "Расчленение СССР на отдельные государства",
                status: false
            },
            {
                id: 2,
                title: "Колонизацию Германией всей территории СССР",
                status: false
            },
            {
                id: 3,
                title: "Уничтожение единого государства, колонизацию европейской части СССР.",
                status: true
            }


        ],
    },

    {
        id: 2,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Высшим государственным органом, сосредоточившим всю полноту власти в годы Великой Отечественной войны стал:",
        answers: [

            {
                id: 1,
                title: "Государственный комитет обороны",
                status: true
            },
            {
                id: 2,
                title: "Совет труда и обороны",
                status: false
            },
            {
                id: 3,
                title: "Ставка Верховного Главнокомандования.",
                status: false
            }
        ],

    },
    {

        id: 3,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "В чем заключалось значение битвы за Москву?",
        answers: [

            {
                id: 1,
                title: "Был сорван план молниеносной войны",
                status: true
            },
            {
                id: 2,
                title: "Был открыт второй фронт в Европе",
                status: false
            },
            {
                id: 3,
                title: "Стратегическая инициатива перешла в руки советского командования.",
                status: false
            }
        ],
    },
    {

        id: 4,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "В каком году СССР превзошел Германию по выпуску военной продукции:",
        answers: [

            {
                id: 1,
                title: "В конце 1942 г.",
                status: true
            },
            {
                id: 2,
                title: "В середине 1943 г.",
                status: false
            },
            {
                id: 3,
                title: "В начале 1944 г.",
                status: false
            }
        ],
    },
    {
        id: 5,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Контрнаступление советских войск под Сталинградом началось:",
        answers: [

            {
                id: 1,
                title: "23 августа 1942 г.",
                status: false
            },
            {
                id: 2,
                title: "19 ноября 1942 г.",
                status: true
            },
            {
                id: 3,
                title: "2 февраля 1943 г.",
                status: false
            }
        ],
    },
    {

        id: 6,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Какая из битв Великой Отечественной войны относится к периоду коренного перелома:",
        answers: [

            {
                id: 1,
                title: "Курская битва",
                status: true
            },
            {
                id: 2,
                title: "Битва под Москвой",
                status: false
            },
            {
                id: 3,
                title: "Битва за Берлин.",
                status: false
            }
        ],
    },
    {
        id: 7,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Второй фронт был открыт на территории",
        answers: [

            {
                id: 1,
                title: "Норвегии.",
                status: false
            },
            {
                id: 2,
                title: "Германии.",
                status: false
            },
            {
                id: 3,
                title: "Франции.",
                status: true
            }
        ],
    },
    {

        id: 8,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Выдающимся советским военачальником в годы Великой Отечественной войны был:",
        answers: [

            {
                id: 1,
                title: "В.К. Блюхер",
                status: false
            },
            {
                id: 2,
                title: "И.С. Конев",
                status: true
            },
            {
                id: 3,
                title: "М.Н.Тухачевский.",
                status: false
            }
        ],
    },
    {
        id: 9,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Какая из перечисленных международных конференций не относится к событиям Великой Отечественной войны:",
        answers: [

            {
                id: 1,
                title: "Потсдамская",
                status: false
            },
            {
                id: 2,
                title: "Мюнхенская",
                status: true
            },
            {
                id: 3,
                title: "Тегеранская.",
                status: false
            }
        ],

    },
    {
        id: 10,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Операция советских войск под кодовым названием «Багратион» была проведена с целью освобождения:",
        answers: [

            {
                id: 1,
                title: "Белоруссии",
                status: true
            },
            {
                id: 2,
                title: "Правобережной Украины",
                status: false
            },
            {
                id: 3,
                title: "Польши.",
                status: false
            }
        ],
    },
    {
        id: 11,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "В годы войны Красная армия освободила:",
        answers: [

            {
                id: 1,
                title: "Стамбул",
                status: false
            },
            {
                id: 2,
                title: "Прагу",
                status: true
            },
            {
                id: 3,
                title: "Париж.",
                status: false
            }
        ],
    },
    {
        id: 12,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "К одной из причин победы над фашистской Германией можно отнести:",
        answers: [

            {
                id: 1,
                title: "Проведение всех основных военных операций против Германии в зимнее время",
                status: false
            },
            {
                id: 2,
                title: "Военная слабость Германии и ее союзников",
                status: false
            },
            {
                id: 3,
                title: "Патриотизм советских граждан.",
                status: true
            }
        ],
    },
    {
        id: 13,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "СССР вступил в войну с Японией в 1945 году:",
        answers: [

            {
                id: 1,
                title: "9 мая",
                status: false
            },
            {
                id: 2,
                title: "9 августа",
                status: true
            },
            {
                id: 3,
                title: "2 сентября.",
                status: false
            }
        ],
    },
    {
        id: 14,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "Когда было водружено Знамя Победы над рейхстагом:",
        answers: [

            {
                id: 1,
                title: "1 мая 1945г.",
                status: true
            },
            {
                id: 2,
                title: "2 мая 1945 г.",
                status: false
            },
            {
                id: 3,
                title: "8 мая 1945 г.",
                status: false
            }
        ],
    },
    {
        id: 15,
        test_id: 1,
        photo: "https://avatars.mds.yandex.net/i?id=e7e9d5d7753b99e4e261bb248a6ffdff-4298658-images-thumbs&n=13",
        title: "Тест по истории Великой Отечественной войны",
        description: "После второй мировой войны и до сих пор не подписан мирный договор:",
        answers: [

            {
                id: 1,
                title: "С Италией",
                status: false
            },
            {
                id: 2,
                title: "С Японией",
                status: true
            },
            {
                id: 3,
                title: "С Англией.",
                status: false
            }
        ],
    },

    {
        id: 16,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/625d/f34d/0435/41e3/8522/c8c4/12ba/2975/2574907941.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Разрешается ли Вам выполнить поворот направо по указанной траектории в данной ситуации?",
        answers: [

            {
                id: 1,
                title: "Запрещается",
                status: false
            },
            {
                id: 2,
                title: "Разрешается",
                status: true
            },



        ],
    },
    {
        id: 17,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/9faf/f206/e486/1f5a/f330/0be9/0377/0684/3582961453.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "По какой траектории водителю легкового автомобиля можно выполнить обгон?",
        answers: [

            {
                id: 1,
                title: "только по Б",
                status: false
            },
            {
                id: 2,
                title: "Только по А",
                status: true
            },
            {
                id: 3,
                title: "По любой из указанных",
                status: false
            },



        ],
    },
    {
        id: 18,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/82d8/8372/6c7b/f2b5/d755/ac16/2ec6/8eff/1356938713.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "С какой максимальной скоростью можно продолжить движение за знаком?",
        answers: [

            {
                id: 1,
                title: "50 км/ч",
                status: false
            },
            {
                id: 2,
                title: "30 км/ч",
                status: false
            },
            {
                id: 3,
                title: "60 км/ч",
                status: false
            },
            {
                id: 4,
                title: "20 км/ч",
                status: true
            },



        ],
    },
    {
        id: 19,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/c6d2/9050/199a/7d4a/5a9d/254f/9772/2cc5/1001338719.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Кто из водителей нарушил правила стоянки?",
        answers: [

            {
                id: 1,
                title: "Только водитель грузового автомобиля.",
                status: true
            },
            {
                id: 2,
                title: "Только водитель мотоцикла.",
                status: false
            },
            {
                id: 3,
                title: "Никто не нарушил.",
                status: false
            },
            {
                id: 4,
                title: "Водитель мотоцикла и грузового автомобиля.",
                status: false
            },



        ],
    },
    {
        id: 20,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/81af/db26/111d/74cb/e4c6/9060/ea0a/2a60/2034391855.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Кому Вы должны уступить дорогу при движении прямо?",
        answers: [

            {
                id: 1,
                title: "Легковому автомобилю и мотоциклу.",
                status: false
            },
            {
                id: 2,
                title: "Только легковому автомобилю.",
                status: true
            },
            {
                id: 3,
                title: "Никому",
                status: false
            },




        ],
    },
    {
        id: 21,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/91c4/cdcb/7f08/ff8e/2680/769c/5708/6e0f/868279057.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Вы можете объехать препятствие:",
        answers: [

            {
                id: 1,
                title: "Только по траектории Б.",
                status: false
            },
            {
                id: 2,
                title: "Только по траектории А.",
                status: true
            },
            {
                id: 3,
                title: "По любой траектории из указанных",
                status: false
            },




        ],
    },
    {
        id: 22,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/afb0/cf41/0d41/dcdd/1cca/7786/a50b/ba6e/2667152127.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Вы намерены проехать перекресток в прямом направлении. Ваши действия?",
        answers: [

            {
                id: 1,
                title: "Проедете первым, руководствуясь сигналом светофора.",
                status: false
            },
            {
                id: 2,
                title: "Проедете первым, руководствуясь знаком Главная дорога.",
                status: false
            },
            {
                id: 3,
                title: "Уступите дорогу трамваю.",
                status: true
            },
        ],
    },
    {
        id: 23,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/762c/7257/75f7/1450/367a/a432/24c1/3821/2953050927.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Можно ли Вам выполнить разворот?",
        answers: [

            {
                id: 1,
                title: "Можно.",
                status: false
            },
            {
                id: 2,
                title: "Можно только по траектории Б.",
                status: false
            },
            {
                id: 3,
                title: "Нельзя.",
                status: true
            },
            {
                id: 4,
                title: "Можно только по траектории А.",
                status: false
            },
        ],
    },
    {
        id: 24,
        test_id: 3,
        photo: "https://konstruktortestov.ru/files/1f6d/672b/7e39/e385/1625/1dc9/c2a8/adb0/1207449605.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Разрешается ли Вам остановка в указанном месте?",
        answers: [

            {
                id: 1,
                title: "Разрешается только для посадки или высадки пассажиров.",
                status: false
            },
            {
                id: 2,
                title: "Разрешается.",
                status: false
            },
            {
                id: 3,
                title: "Запрещается.",
                status: true
            },

        ],
    },
    {
        id: 25,

        test_id: 3,
        photo: "https://konstruktortestov.ru/files/76c1/b295/2b7e/b8c7/148f/93e9/70d0/2bb0/3935373180.jpg",
        title: "На сколько хорошо знаешь ПДД?",
        description: "Как Вам следует поступить при повороте налево?",
        answers: [

            {
                id: 1,
                title: "Уступить дорогу легковому автомобилю.",
                status: true
            },
            {
                id: 2,
                title: "Проехать перекресток первым.",
                status: false
            },


        ],
    },
   
   
   
   
    {
        id: 26,
        test_id: 2,
        title: "english-Present Simple",
        description: "What _____ you _____ at the weekend?      ",
        answers: [

            {
                id: 1,
                title: "does / does ",
                status: false
            },
            {
                id: 2,
                title: "do / does ",
                status: false
            },
            {
                id: 3,
                title: "does / do ",
                status: false
            },
            {
                id: 4,
                title: "do / do ",
                status: true
            },     
        ],
    },
    {
        id: 27,
        test_id: 2,
        title: "english-Present Simple",
        description: "What _____ Dick and Tom like _____?",
        answers: [

            {
                id: 1,
                title: "do / doing  ",
                status: true
            },
            {
                id: 2,
                title: "doing / * ",
                status: false
            },
            {
                id: 3,
                title: "do / do ",
                status: false
            },
            {
                id: 4,
                title: "does / doing",
                status: false
            },     
        ],
    },
    {
        id: 28,
        test_id: 2,
        title: "english-Present Simple",
        description: "Do boys like _____ jeans?",
        answers: [

            {
                id: 1,
                title: " wear  ",
                status: false
            },
            {
                id: 2,
                title: "wearing",
                status: false
            },
            {
                id: 3,
                title: "to wear ",
                status: true
            },
            {
                id: 4,
                title: "worn",
                status: false
            },     
        ],
    },
    {
        id: 29,
        test_id: 2,
        title: "english-Present Simple",
        description: "My classmates _____ on picnic every month.",
        answers: [

            {
                id: 1,
                title: "went ",
                status: false
            },
            {
                id: 2,
                title: " goes ",
                status: false
            },
            {
                id: 3,
                title: "going ",
                status: false
            },
            {
                id: 4,
                title: "go",
                status: true
            },     
        ],
    },
    {
        id: 30,
        test_id: 2,
        title: "english-Present Simple",
        description: "Mary _____ face every morning.",
        answers: [

            {
                id: 1,
                title: "washes his ",
                status: false
            },
            {
                id: 2,
                title: " wash my ",
                status: false
            },
            {
                id: 3,
                title: "washes her ",
                status: true
            },
            {
                id: 4,
                title: "washes their",
                status: false
            },     
        ],
    },
    {
        id: 31,
        test_id: 2,
        title: "english-Present Simple",
        description: "I _____ a cigarette, but my teacher _____ smoke. ",
        answers: [

            {
                id: 1,
                title: "don’t / smokes ",
                status: false
            },
            {
                id: 2,
                title: " smoke / doesn’t ",
                status: true
            },
            {
                id: 3,
                title: "smokes / smokes ",
                status: false
            },
            {
                id: 4,
                title: "smoke / don’t",
                status: false
            },     
        ],
    },
    {
        id: 32,
        test_id: 2,
        title: "english-Present Simple",
        description: "They _____ wash _____ car every day.  ",
        answers: [

            {
                id: 1,
                title: "don’t / my ",
                status: false
            },
            {
                id: 2,
                title: "  don’t / his",
                status: false
            },
            {
                id: 3,
                title: "don’t / their ",
                status: true
            },
            {
                id: 4,
                title: "don’t / our",
                status: false
            },     
        ],
    },
    {
        id: 33,
        test_id: 2,
        title: "english-Present Simple",
        description: "My parents _____ eat meat. ",
        answers: [

            {
                id: 1,
                title: "don’t ",
                status: true
            },
            {
                id: 2,
                title: " aren’t ",
                status: false
            },
            {
                id: 3,
                title: "doesn’t",
                status: false
            },
            {
                id: 4,
                title: "are",
                status: false
            },     
        ],
    },
    {
        id: 34,
        test_id: 2,
        title: "english-Present Simple",
        description: "Summer holidays _____ in June. ",
        answers: [

            {
                id: 1,
                title: "begins",
                status: false
            },
            {
                id: 2,
                title: "begin",
                status: true
            },
            {
                id: 3,
                title: "beginning",
                status: false
            },
            {
                id: 4,
                title: " began",
                status: false
            },     
        ],
    },
    {
        id: 35,
        test_id: 2,
        title: "english-Present Simple",
        description: "We _____ tennis on Monday evenings, but my little sister _____ on Sundays. ",
        answers: [

            {
                id: 1,
                title: "play / play ",
                status: false
            },
            {
                id: 2,
                title: "plays / plays ",
                status: false
            },
            {
                id: 3,
                title: "play / plays ",
                status: true
            },
            {
                id: 4,
                title: " plays / play",
                status: false
            },     
        ],
    },
    {
        id: 36,
        test_id: 2,
        title: "english-Present Simple",
        description: "You _____ a lot of things in _____ free time.",
        answers: [

            {
                id: 1,
                title: "do / our ",
                status: false
            },
            {
                id: 2,
                title: "does / your ",
                status: false
            },
            {
                id: 3,
                title: "do / my ",
                status: false
            },
            {
                id: 4,
                title: "do / your",
                status: true
            },     
        ],
    },
    {
        id: 37,
        test_id: 2,
        title: "english-Present Simple",
        description: " My cat licks _____ tail every evening. But my dogs never lick _____ tails. ",
        answers: [

            {
                id: 1,
                title: "its / their ",
                status: true
            },
            {
                id: 2,
                title: "its / its ",
                status: false
            },
            {
                id: 3,
                title: " their / its ",
                status: false
            },
            {
                id: 4,
                title: "* / *",
                status: false
            },     
        ],
    },
    {
        id: 38,
        test_id: 2,
        title: "english-Present Simple",
        description: " I like _____ football, but my brother doesn’t. ",
        answers: [

            {
                id: 1,
                title: "play ",
                status: false
            },
            {
                id: 2,
                title: " played ",
                status: false
            },
            {
                id: 3,
                title: "playing ",
                status: true
            },
            {
                id: 4,
                title: "plays",
                status: false
            },     
        ],
    },
    {
        id: 39,
        test_id: 2,
        title: "english-Present Simple",
        description: "She likes _____ TV, but her husband doesn’t.",
        answers: [

            {
                id: 1,
                title: " watching  ",
                status: true
            },
            {
                id: 2,
                title: "to watch  ",
                status: false
            },
            {
                id: 3,
                title: " watches ",
                status: false
            },
            {
                id: 4,
                title: "watched",
                status: false
            },     
        ],
    },
    {
        id: 40,
        test_id: 2,
        title: "english-Present Simple",
        description: "Her sister doesn’t _____ eating a hamburger. ",
        answers: [

            {
                id: 1,
                title: "like ",
                status: true
            },
            {
                id: 2,
                title: " likes ",
                status: false
            },
            {
                id: 3,
                title: " liking ",
                status: false
            },
            {
                id: 4,
                title: "liked",
                status: false
            },     
        ],
    },
    {
        id: 41,
        test_id: 2,
        title: "english-Present Simple",
        description: "Do you like _____ in your free time? ",
        answers: [

            {
                id: 1,
                title: "read",
                status: false
            },
            {
                id: 2,
                title: "reads",
                status: false
            },
            {
                id: 3,
                title: "to read ",
                status: false
            },
            {
                id: 4,
                title: "reading",
                status: true
            },     
        ],
    },
    {
        id: 42,
        test_id: 2,
        title: "english-Present Simple",
        description: "I like _____ but I _____ like swimming. ",
        answers: [

            {
                id: 1,
                title: "sailing / don’t ",
                status: true
            },
            {
                id: 2,
                title: "sail / doesn’t ",
                status: false
            },
            {
                id: 3,
                title: "sail / don’t ",
                status: false
            },
            {
                id: 4,
                title: "sail / do",
                status: false
            },     
        ],
    },
    {
        id: 43,
        test_id: 2,
        title: "english-Present Simple",
        description: "Tom _____  her but she doesn’t like _____ . ",
        answers: [

            {
                id: 1,
                title: "like / her ",
                status: false
            },
            {
                id: 2,
                title: "likes / him ",
                status: true
            },
            {
                id: 3,
                title: "likes / he  ",
                status: false
            },
            {
                id: 4,
                title: "like / him",
                status: false
            },     
        ],
    },
    {
        id: 44,
        test_id: 2,
        title: "english-Present Simple",
        description: "Andrew buys a newspaper everyday. _____ reads _____ at home. ",
        answers: [

            {
                id: 1,
                title: "It / he ",
                status: false
            },
            {
                id: 2,
                title: "Him / it ",
                status: false
            },
            {
                id: 3,
                title: "He / it  ",
                status: true
            },
            {
                id: 4,
                title: "His / it",
                status: false
            },     
        ],
    },
    {
        id: 45,
        test_id: 2,
        title: "english-Present Simple",
        description: "Mike eats cheeseburgers because _____ likes _____ .  ",
        answers: [

            {
                id: 1,
                title: "he / their ",
                status: false
            },
            {
                id: 2,
                title: "him / they ",
                status: false
            },
            {
                id: 3,
                title: "he / them ",
                status: true
            },
            {
                id: 4,
                title: "him / them",
                status: false
            },     
        ],
    },
    
    
    
    
    {
        id: 46,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: image,
       
        description:" Какие из указанных знаков запрещают движение водителям мопедов? ",      
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Все",
                status: true
            },
            {
                id: 2,
                title: "Только А",
                status: false
            },
            {
                id: 3,
                title: "Только Б",
                status: false
            },
            {
                id: 4,
                title: "В и Г",
                status: false
            },     
        ],
    },
    
    {
        id: 47,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/1db9/ce81/758e/cb2a/4e25/6c5f/69a5/6c5d/1597066896.jpg",
       
        description:" Разрешено ли водителю легкового автомобиля движение задним ходом для посадки пассажира?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Разрешено",
                status: false
            },
            {
                id: 2,
                title: "Разрешено, если при этом не будут созданы помехи маршрутным транспортным средствам",
                status: false
            },
            {
                id: 3,
                title: "Запрещено",
                status: true
            },
                
        ],
    },
     {
        id: 48,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/ff6b/8ebf/6d9d/3b27/8eca/49db/a29e/a36c/2661145940.jpg",
  
        description:" Как Вам следует поступить при повороте налево?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Уступить дорогу только автомобилю с включенными проблесковым маячком и специальным звуковым сигналом",
                status: true
            },
            {
                id: 2,
                title: "Проехать перекресток первым",
                status: false
            },
            {
                id: 3,
                title: "Уступить дорогу обоим транспортным средствам",
                status: false
            },
                
        ],
    },
    {
        id: 49,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/9a22/6b66/6d1c/a403/c7a1/f467/e75c/7ac0/3701435122.jpg",
      
        description:" С какой максимальной скоростью Вы имеете право продолжить движение на легковом автомобиле с прицепом?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "70 км/ч",
                status: false
            },
            {
                id: 2,
                title: "50 км/ч",
                status: false
            },
            {
                id: 3,
                title: "110 км/ч",
                status: false
            },
            {
                id: 4,
                title: "90 км/ч",
                status: true
            },     
        ],
    },
    {
        id: 50,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/50da/cdf3/1d00/93c5/2981/9457/206f/03ec/819777623.jpg",
        description:" Разрешается ли перевозка людей в салоне легкового автомобиля, буксирующего неисправное транспортное средство?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Разрешается только при буксировке на жесткой сцепке",
                status: false
            },
            {
                id: 2,
                title: "Запрещается",
                status: false
            },
            {
                id: 3,
                title: "Разрешается",
                status: true
            },     
        ],
    },
    {
        id: 51,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/d4d8/7e49/dbfd/a686/32f0/9e43/6383/ac3f/30138998.jpg",
        description:" Как следует поступить водителю при посадке в автомобиль, стоящий у тротуара или на обочине?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Допустимы оба варианта действий",
                status: false
            },
            {
                id: 2,
                title: "Обойти автомобиль сзади",
                status: false
            },
            {
                id: 3,
                title: "Обойти автомобиль спереди",
                status: true
            },     
        ],
    },
    {
        id: 52,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/5a86/a6b5/2351/b71f/35c0/e093/fd57/cb1e/1138186717.jpg",    
        description:"Какое расстояние проедет транспортное средство за время, равное среднему времени реакции водителя, при скорости движения около 90 км/час?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Примерно 15 метров",
                status: false
            },
            {
                id: 2,
                title: "Примерно 35 метров",
                status: false
            },
            {
                id: 3,
                title: "Примерно 25 метров",
                status: true
            },     
        ],
    },
    {
        id: 53,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/6523/ef00/e3a3/bb99/3a3c/924a/eeeb/9104/741026599.jpg",
        description:"Ситуация, в которой водитель транспортного средства, движущегося по правой полосе, обязан уступить дорогу при перестроении, показана:",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "На левом рисунке",
                status: true
            },
            {
                id: 2,
                title: "На правом рисунке",
                status: false
            },
            {
                id: 3,
                title: "На обоих рисунках",
                status: false
            },     
        ],
    },
    {
        id: 54,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/01b6/a05a/0cea/c548/1657/03f0/af2d/2cfb/3723961532.jpg",
        description:"Разрешается ли Вам выполнить разворот в указанном месте?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Разрешается",
                status: false
            },
            {
                id: 2,
                title: "Разрешается при видимости дороги не менее 100 метров",
                status: true
            },
            {
                id: 3,
                title: "Запрещается",
                status: false
            },     
        ],
    },
    {
        id: 55,
        test_id: 4,
        title: "Тест на знание ПДД: Сможете сдать теоретический экзамен с первого раза?",
        photo: "https://konstruktortestov.ru/files/3f33/92ec/1f8b/c922/6703/d5b9/d646/b609/1634270491.jpg",
        description:"В каких случаях водители привлекаются к уголовной ответственности за нарушения Правил, повлекшие тяжкие последствия?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "При наличии пострадавшего (в независимости от степени тяжести полученных им повреждений) или причинении крупного материального ущерба",
                status: false
            },
            {
                id: 2,
                title: "Только при причинении смерти человеку",
                status: false
            },
            {
                id: 3,
                title: "При причинении смерти человеку или тяжкого вреда здоровью человека",
                status: true
            },     
        ],
    },
   
   
    {
        id: 56,
        test_id: 5,
        title: "ПДД",
        photo: "https://konstruktortestov.ru/files/05f5/4eaa/2138/e45d/4198/6c1a/923e/2f9e/1094858816.jpg",
        description:"Какой дорожный знак изображен на картинке?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Разрешается идти только вне населенных пунктов навстречу движению транспортных средств.",
                status: false
            },
            {
                id: 2,
                title: "Запрещается.",
                status: true
            },
            {
                id: 3,
                title: "Разрешается идти вне населенных пунктов по ходу движения транспортных средств.",
                status: false
            },     
        ],
    },
    {
        id: 57,
        test_id: 5,
        title: "ПДД",
        photo: "https://konstruktortestov.ru/files/3c4f/5711/9434/4e67/e6ba/e7d0/ea25/149e/483693228.jpg",
        description:"На картинке изображена ситуация. Какой дорожный знак следует разместить в этом случае?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "2",
                status: false
            },
            {
                id: 2,
                title: "1",
                status: true
            },
            {
                id: 3,
                title: "3",
                status: false
            },     
        ],
    },
    {
        id: 58,
        test_id: 5,
        title: "ПДД",
        description:"Где следует переходить дорогу, если обозначенного пешеходного перехода нет?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "На перекрестках по линии тротуаров или обочин.",
                status: false
            },
            {
                id: 2,
                title: "Во всех перечисленных случаях.",
                status: true
            },
            {
                id: 3,
                title: "В любом месте, если поблизости нет перекрестка и дорога просматривается в обе стороны.",
                status: false
            },     
        ],
    },
    {
        id: 59,
        test_id: 5,
        title: "ПДД",
        description:"Какой стороны должен придерживаться пешеход при движении по тротуару?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Безразлично",
                status: false
            },
            {
                id: 2,
                title: "Левой",
                status: false
            },
            {
                id: 3,
                title: "Правой.",
                status: true
            },     
        ],
    },
    {
        id: 60,
        test_id: 5,
        title: "ПДД",
        description:"Разрешается ли движение пешеходов по дороге, обозначенной знаком «Автомагистраль»?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Разрешается идти вне населенных пунктов по ходу движения транспортных средств.",
                status: false
            },
            {
                id: 2,
                title: "Разрешается идти только вне населенных пунктов навстречу движению транспортных средств.",
                status: false
            },
            {
                id: 3,
                title: "Запрещается.",
                status: true
            },     
        ],
    },
    {
        id: 61,
        test_id: 5,
        title: "ПДД",
        description:"В каком случае разрешается переходить дорогу в произвольном месте?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Если в зоне видимости нет перекрестка или пешеходного перехода, и дорога хорошо просматривается в обе стороны.",
                status: true
            },
            {
                id: 2,
                title: "В произвольном месте переходить дорогу нельзя.",
                status: false
            },
            {
                id: 3,
                title: "Всегда, если это безопасно.",
                status: false
            },     
        ],
    },
    {
        id: 62,
        test_id: 5,
        title: "ПДД",
        description:"Кому должны подчиняться пешеходы и водители, если на перекрестке работают одновременно и светофор и регулировщик?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Регулировщику",
                status: true
            },
            {
                id: 2,
                title: "Светофору",
                status: false
            },
            {
                id: 3,
                title: "Никому",
                status: false
            },     
        ],
    },
    {
        id: 63,
        test_id: 5,
        title: "ПДД",
        description:"Как называется пересечение дорог и улиц?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Обочина",
                status: false
            },
            {
                id: 2,
                title: "Перекресток",
                status: true
            },
            {
                id: 3,
                title: "Шоссе",
                status: false
            },     
        ],
    },
    {
        id: 64,
        test_id: 5,
        title: "ПДД",
        description:"С какого возраста разрешается детям ездить на велосипеде по улицам и дорогам?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "10 лет",
                status: false
            },
            {
                id: 2,
                title: "14 лет",
                status: true
            },
            {
                id: 3,
                title: "16 лет",
                status: false
            },     
        ],
    },
    {
        id: 65,
        test_id: 5,
        title: "ПДД",
        description:"Какое положение регулировщика запрещает движение всем участникам движения?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Рука поднята вверх",
                status: true
            },
            {
                id: 2,
                title: "Руки опущены",
                status: false
            },
            {
                id: 3,
                title: "Руки разведены в стороны",
                status: false
            },     
        ],
    },
   
    {
        id: 66,
        test_id: 6,
        title: "Начало теста:",
        description:"1. You aren't busy now, ___ you?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "are",
                status: true
            },
            {
                id: 2,
                title: "don't",
                status: false
            },
            {
                id: 3,
                title: "aren't",
                status: false
            }, 
            {
                id: 4,
                title: "do",
                status: false
            },     
        ],
    },
    {
        id: 67,
        test_id: 6,
        title: "Начало теста:",
        description:"2. Did you ski last weekend?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Yes, I played on Saturday.",
                status: false
            },
            {
                id: 2,
                title: "Yes, I skied on Tuesday.",
                status: false
            },
            {
                id: 3,
                title: "Yes, I skied on Sunday.",
                status: true
            }, 
            {
                id: 4,
                title: "Yes, I played on Wednesday.",
                status: false
            },     
        ],
    },
    {
        id: 68,
        test_id: 6,
        title: "Начало теста:",
        description:"3. We ___ students.",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "are",
                status: true
            },
            {
                id: 2,
                title: "is",
                status: false
            },
            {
                id: 3,
                title: "being",
                status: false
            }, 
            {
                id: 4,
                title: "be",
                status: false
            },     
        ],
    },
    {
        id: 69,
        test_id: 6,
        title: "Начало теста:",
        description:"4. What did you eat last night?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Spaghetti.",
                status: true
            },
            {
                id: 2,
                title: "At home.",
                status: false
            },
            {
                id: 3,
                title: "With my family.",
                status: false
            }, 
            {
                id: 4,
                title: "At six.",
                status: false
            },     
        ],
    },
    {
        id: 70,
        test_id: 6,
        title: "Начало теста:",
        description:"5. How do you spell ''dog''? ",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Cat.",
                status: false
            },
            {
                id: 2,
                title: "No, I don't.",
                status: false
            },
            {
                id: 3,
                title: "D-O-G",
                status: true
            }, 
            {
                id: 4,
                title: "I have one dog.",
                status: false
            },     
        ],
    },
    {
        id: 71,
        test_id: 6,
        title: "Начало теста:",
        description:"6. We ___ baseball next Saturday. ",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "will play",
                status: true
            },
            {
                id: 2,
                title: "playing",
                status: false
            },
            {
                id: 3,
                title: "plays",
                status: false
            }, 
            {
                id: 4,
                title: "played",
                status: false
            },     
        ],
    },
    {
        id: 72,
        test_id: 6,
        title: "Начало теста:",
        description:"7. ''___ is that girl?'' ''She's my sister.'' ",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Who",
                status: true
            },
            {
                id: 2,
                title: "Which",
                status: false
            },
            {
                id: 3,
                title: "Whose",
                status: false
            }, 
            {
                id: 4,
                title: "What",
                status: false
            },     
        ],
    },
    {
        id: 73,
        test_id: 6,
        title: "Начало теста:",
        description:"8. How many hours a day do you sleep?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "I slept 7 hours.",
                status: false
            },
            {
                id: 2,
                title: "I sleep 7 hours.",
                status: true
            },
            {
                id: 3,
                title: "I am sleeping 7 hours.",
                status: false
            }, 
            {
                id: 4,
                title: "I have slept 7 hours.",
                status: false
            },     
        ],
    },
    {
        id: 74,
        test_id: 6,
        title: "Начало теста:",
        description:"9. When was the last time you took a picture?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Seven pictures.",
                status: false
            },
            {
                id: 2,
                title: "A picture of Jane.",
                status: false
            },
            {
                id: 3,
                title: "With my camera.",
                status: false
            }, 
            {
                id: 4,
                title: "About four days ago.",
                status: true
            },     
        ],
    },
    {
        id: 75,
        test_id: 6,
        title: "Начало теста:",
        description:"10. Will you ___ your car to school tomorrow?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "driving",
                status: false
            },
            {
                id: 2,
                title: "drives",
                status: false
            },
            {
                id: 3,
                title: "drive",
                status: true
            }, 
            {
                id: 4,
                title: "drove",
                status: false
            },     
        ],
    },
    {
        id: 76,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/dcf0/50ef/d821/37b9/969e/2b64/22f8/5fb0/2133849253.jpg",
        title: "Начало теста:",
        description:"Двигается фигура?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "да",
                status: false
            },
            {
                id: 2,
                title: "нет",
                status: true
            },
                
        ],
    },
    {
        id: 77,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/8217/d59a/ffed/c9ad/0e59/2279/07c6/316c/1091219667.jpg",
        title: "Начало теста:",
        description:"Линии параллельны ?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "да",
                status: true
            },
            {
                id: 2,
                title: "нет",
                status: false
            },
                
        ],
    },
    {
        id: 78,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/7d8c/4b87/46f9/f192/20be/924a/439b/119d/3483448752.jpg",
        title: "Начало теста:",
        description:"Круги находится в движении?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "да",
                status:false
            },
            {
                id: 2,
                title: "нет",
                status: true
            },
                
        ],
    },
    {
        id: 79,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/93aa/0896/b9ee/e8b7/ec74/ad2e/c2d1/b903/839501852.jpg",
        title: "Начало теста:",
        description:"Сколько треугольников ?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "16",
                status:false
            },
            {
                id: 2,
                title: "20",
                status: true
            },
            {
                id: 3,
                title: "17",
                status:false
            },
            {
                id: 4,
                title: "15",
                status: false
            },
            {
                id: 5,
                title: "22",
                status:false
            },
            {
                id: 6,
                title: "21",
                status: false
            },
                
        ],
    },
    {
        id: 80,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/3a1b/a579/f038/247f/a3ad/9a4a/96ca/176a/235011784.jpg",
        title: "Начало теста:",
        description:"Двигается ли фигура ?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "да",
                status:false
            },
            {
                id: 2,
                title: "иногда",
                status: true
            },
            {
                id: 3,
                title: "нет",
                status: false
            },
                
        ],
    },
   
    {
        id: 81,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/dac1/de4d/a6a1/8ed6/169d/50eb/f6a8/d1bb/2308692324.jpg",
        title: "Начало теста:",
        description:"Здесь есть что-то кроме точек ?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Вроде да",
                status:false
            },
            {
                id: 2,
                title: "Вроде нет",
                status: true
            },
            {
                id: 3,
                title: "нет",
                status: false
            },
            {
                id: 4,
                title: "да",
                status: true
            },
           
                
                
        ],
    },
    {
        id: 82,
        test_id: 7,
        photo:"https://konstruktortestov.ru/files/d4f4/614a/4999/5191/c186/a24a/4e59/ca12/1930998544.jpg",
        title: "Начало теста:",
        description:"Это гифка или картинка?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Гифка",
                status:false
            },
            {
                id: 2,
                title: "Картинка",
                status: false
            },
            {
                id: 3,
                title: "Оптическая иллюзия",
                status: true
            },
           
                
        ],
    },
    {
        id: 83,
        test_id: 8,
        title: "Начало теста:",
        description:"Кто написал знаменитую повесть ''Метель''? ",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Астафьев",
                status:false
            },
            {
                id: 2,
                title: "Лесков",
                status: false
            },
            {
                id: 3,
                title: "Пушкин",
                status: true
            },
           
                
        ],
    },
    {
        id: 84,
        test_id: 8,
        title: "Начало теста:",
        description:"Самый высокий водопад в мире - это..",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Кивач",
                status:false
            },
            {
                id: 2,
                title: "Ниагарский",
                status: false
            },
            {
                id: 3,
                title: "Анхель",
                status: true
            },
           
                
        ],
    },
    {
        id: 85,
        test_id: 8,
        title: "Начало теста:",
        description:"Когда был Ливонский поход Александра Невского?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "в 1250 г.",
                status:false
            },
            {
                id: 2,
                title: "в 1295 г.",
                status: false
            },
            {
                id: 3,
                title: "в 1245 г.",
                status: true
            },
           
                
        ],
    },
    {
        id: 86,
        test_id: 8,
        title: "Начало теста:",
        description:"Столица Ирландии - это..",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Дублин",
                status:true
            },
            {
                id: 2,
                title: "Голуэй",
                status: false
            },
            {
                id: 3,
                title: "Уотерфорд",
                status: false
            },
           
                
        ],
    },
    {
        id: 87,
        test_id: 8,
        title: "Начало теста:",
        description:"Что и этого не является полезным ископаемым?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Песок",
                status:false
            },
            {
                id: 2,
                title: "Гранит",
                status: false
            },
            {
                id: 3,
                title: "Бронза",
                status: true
            },
            {
                id: 4,
                title: "Газ",
                status: false
            },
           
                
        ],
    },
    {
        id: 88,
        test_id: 8,
        title: "Начало теста:",
        description:"С помощью какого прибора измеряется артериальное давление?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "тахометр",
                status:false
            },
            {
                id: 2,
                title: "тонометр",
                status: true
            },
            {
                id: 3,
                title: "авометр",
                status: false
            },
            {
                id: 4,
                title: "манометр",
                status: false
            },
           
                
        ],
    },
    {
        id: 89,
        test_id: 8,
        title: "Начало теста:",
        description:"Какие страны формируют Пиренейский полуостров?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Турция и Греция",
                status:false
            },
            {
                id: 2,
                title: "Португалия и Нидерланды",
                status: false
            },
            {
                id: 3,
                title: "Испания и Португалия",
                status: true
            },
            {
                id: 4,
                title: "Италия и Греция",
                status: false
            },
           
                
        ],
    },
    {
        id: 90,
        test_id: 8,
        title: "Начало теста:",
        description:"Кого использует апитерапевт для лечения людей?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "пиявок",
                status:false
            },
            {
                id: 2,
                title: "пауков",
                status: false
            },
            {
                id: 3,
                title: "змей",
                status: false
            },
            {
                id: 4,
                title: "пчел",
                status: true
            },
           
                
        ],
    },
    {
        id: 91,
        test_id: 8,
        title: "Начало теста:",
        description:"Кто открыл Америку",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Васко да Гама",
                status:false
            },
            {
                id: 2,
                title: "Диего Колон",
                status: false
            },
            {
                id: 3,
                title: "Христофор Колумб",
                status: true
            },
           
           
                
        ],
    },
    {
        id: 92,
        test_id: 8,
        title: "Начало теста:",
        description:"Как часто проводятся Олимпийские игры?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "Раз в три года",
                status:false
            },
            {
                id: 2,
                title: "Каждый год",
                status: false
            },
            {
                id: 3,
                title: "Раз в четыре года",
                status: true
            },
           
           
                
        ],
    },
    {
        id: 93,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/e141/5df6/2665/7b13/cc04/9522/1794/ae58/3149043322.jpg",      
        title: "Начало теста:",
        description:"На парковочном месте под каким номером стоит этот автомобиль?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "87",
                status:true
            },
            {
                id: 2,
                title: "96",
                status: false
            },
            {
                id: 3,
                title: "90",
                status: false
            },
           
           
                
        ],
    },
    {
        id: 94,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/c28d/746f/0c83/83bb/3663/ecac/3423/9ecb/610596762.jpg",      
        title: "Начало теста:",
        description:"Торговец может вместить 8 больших коробок или 10 маленьких коробок в контейнер для отправки. Сколько контейнеров он использовал для отправки партии из 96 коробок, при условии что больших коробок было больше, чем маленьких?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "26",
                status:false
            },
            {
                id: 2,
                title: "40",
                status: false
            },
            {
                id: 3,
                title: "11",
                status: true
            },
           
           
                
        ],
    },
    {
        id: 95,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/30eb/4ced/eff4/6d21/1ea1/960f/937f/3d3c/707962132.jpg",      
        title: "Начало теста:",
        description:"Моему внуку столько же дней, сколько моей дочери - недель. Также моему внуку столько же месяцев, сколько мне - лет. Суммарный возраст нас троих - 120 лет. Сколько мне лет?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "72",
                status:true
            },
            {
                id: 2,
                title: "60",
                status: false
            },
            {
                id: 3,
                title: "81",
                status: false
            },
           
           
                
        ],
    },
    {
        id: 96,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/6e6b/51ec/3de4/4418/f0ad/c6b1/fd8a/8b0b/2678363649.jpg",      
        title: "Начало теста:",
        description:"Какое число - следующее?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "98",
                status:true
            },
            {
                id: 2,
                title: "74",
                status: false
            },
            {
                id: 3,
                title: "86",
                status: false
            },
           
           
                
        ],
    },
    {
        id: 97,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/192e/ecc5/cca4/254e/3cf4/dead/1552/cd08/3150283472.jpg",      
        title: "Начало теста:",
        description:"Если 9999 = 4, 8888 = 8, 1816 = 6, 1212 = 0, тогда 1919 = ?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "4",
                status:true
            },
            {
                id: 2,
                title: "2",
                status: false
            },
            {
                id: 3,
                title: "10",
                status: false
            },
           
           
                
        ],
    },
    {
        id: 98,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/00da/776c/b00a/8433/d4f9/6d47/ccfd/3138/2155293924.jpg",      
        title: "Начало теста:",
        description:"Найдите пятизначное число, в котором нет единиц, нулей и повторяющихся цифр. А также:",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "29857",
                status: false
            },
            {
                id: 2,
                title: "32987",
                status: false
            },
            {
                id: 3,
                title: "24976",
                status: true
            },
           
           
                
        ],
    },
    {
        id: 99,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/889f/4a0a/c24c/75ef/98b4/47a0/d49d/4607/2278957317.jpg",      
        title: "Начало теста:",
        description:"Перед вами 10 синих и 10 серых носков, которые должны быть разложены по парам. В комнате темно. Носки полностью одинаковые, за исключением цвета. Сколько носков вы должны взять из комнаты, чтобы у вас получилась хотя бы одна пара со 100%-ной вероятностью?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "3",
                status: true
            },
            {
                id: 2,
                title: "16",
                status: false
            },
            {
                id: 3,
                title: "8",
                status: false
            },
           
           
                
        ],
    },
    {
        id: 100,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/2d15/db8f/f9c5/701f/2355/075f/a6dd/160b/2547594339.jpg",      
        title: "Начало теста:",
        description:"Вы на корпоративе. Все жмут друг другу руки в знак приветствия. Сколько людей присутствуют на вечеринке, если всего состоялось 66 рукопожатий?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "25",
                status: false
            },
            {
                id: 2,
                title: "14",
                status: false
            },
            {
                id: 3,
                title: "12",
                status: true
            },
           
           
                
        ],
    },
    {
        id: 101,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/fbce/42a8/278c/fa94/d731/ec11/47ce/2d51/3755994077.jpg",      
        title: "Начало теста:",
        description:"Где находится самая маленькая мышца нашего тела?",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "В языке",
                status: false
            },
            {
                id: 2,
                title: "В ладони",
                status: false
            },
            {
                id: 3,
                title: "В ухе",
                status: true
            },
           
           
                
        ],
    },
    {
        id: 102,
        test_id: 9,  
        photo:"https://konstruktortestov.ru/files/a709/e1fc/0af5/8896/e09a/0dc4/8f35/4aec/3578597523.jpg",      
        title: "Начало теста:",
        description:"Решите этот пример:",
        description2:"Варианты ответов",
        answers: [

            {
                id: 1,
                title: "4",
                status: false
            },
            {
                id: 2,
                title: "9",
                status: false
            },
            {
                id: 3,
                title: "5",
                status: true
            },
           
           
                
        ],
    },
   
   







]
export const categories=[

    {   
        id:1,
        title:"Популярные",
    },
    {
        id:2,
        title:"English"
    },
    {
        id:3,
        title:"Итория"
    },
    {
        id:4,
        title:"Просмотренные"
    },
    {
        id:5,
        title:"Пройденные"
    },
    {
        id:6,
        title:"На внимание"
    },
    {
        id:7,
        title:"На IQ"
    },
  
    {
        id:8,
        title:"На ПДД"
    },
  
    {
        id:9,
        title:"Добавить тест"
    },
    {
        id:10,
        title:"Комментарии"
    },
]
export const users = [
    {
        id:1,
        login:"mirba",
        password:"1294",
        fullname:"БАЙДЕН БАРАК ОБАМОВИЧ",
        avatar:"https://avatars.mds.yandex.net/i?id=abdd81f4c9eff93d9823a09cf2666868-5294137-images-thumbs&n=13",
        date:"1994.01.12",
        sex:"Мужской",
        contact:"+996701139413",
        mail:"mirlan4ikbek@gmail.com"
    },
    {
        id:2,
        login:"mirlan",
        password:"1994",
        fullname:"ПУТИН ВЛАДИМИР ВЛАДИМИРОВИЧ",
        avatar:"https://avatars.mds.yandex.net/i?id=4dd5ca773196f86764e40c59cbc190096f8d5f94-6887327-images-thumbs&n=13",
        date:"1994.01.12",
        sex:"Мужской",
        contact:"+996701139413",
        mail:"mirlan4ikbek@gmail.com"
    },
    {
        id:3,
        login:"mister",
        fullname:"Асанов Усон Эсенович",
        password:"sss",
        avatar:"https://avatars.mds.yandex.net/i?id=8f66e6e464ab2ebe3eba1427cf0f1e33c629900d-7755895-images-thumbs&n=13",
        date:"1994.01.12",
        sex:"Мужской",
        contact:"+996701139413",
        mail:"mirlan4ikbek@gmail.com"

    },
]
