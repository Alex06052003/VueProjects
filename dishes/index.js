let express = require(`express`);
let app = express();
let port = 3005;

let dayjs = require('dayjs');
let relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/ru');
dayjs.locale('ru');
dayjs.extend(relativeTime)

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
})

// Настройка CORS
let cors = require('cors');
app.use(cors());

// Настройка POST-запроса — JSON
app.use(express.json());


let dishes = [
{
    "id": '1',
    "title": "Тайский суп Том Ям",
    "preparation": "Прокипятите бульон в кастрюле и добавьте лемонграсс, листья лайма, чеснок, имбирь и чили. Доведите до кипения, затем уменьшите огонь и варите 15 минут. Добавьте креветки, грибы, рыбный соус, соевый соус, лимонный сок и томатную пасту. Варите еще 5 минут.Посолите по вкусу и подавайте, украсив порцию свежим кориандром.",
    "image": 'https://my.mshp.ru/media/ck_uploads/zubkov_vs/2024/03/06/1.png',
    "timeToCook": 80
},
{
    "id": '2',
    "title": "Итальянская паста Карбонара",
    "preparation": "Сварите спагетти в подсоленной воде до готовности, затем откиньте на дуршлаг, сохраняя часть воды. Обжарьте панчетту и чеснок на сковороде до золотистости. В миске взбейте яйца, добавьте половину тертого пармезана, черный перец и небольшое количество соли.Переложите спагетти в сковороду с панчеттой, перемешайте, затем добавьте яичную смесь, аккуратно перемешивая, чтобы яйца сформировали кремообразный соус. Добавьте немного сохраненной воды от варки, если соус получился слишком густым. Подавайте, посыпав оставшимся пармезаном и свежемолотым черным перцем.",
    "image": 'https://my.mshp.ru/media/ck_uploads/zubkov_vs/2024/03/06/2.png',
    "timeToCook": 40
},
{
    "id": '3',
    "title": "Индийский чикен масала",
    "preparation": "Разогрейте масло в большой сковороде на среднем огне и обжарьте лук и чеснок до мягкости. Добавьте кусочки куриного филе и обжаривайте до золотистости со всех сторон. Полейте йогуртом, добавьте соль по вкусу и перемешайте. Тушите под крышкой на низком огне приблизительно 20-25 минут или пока курица не станет нежной. Подавайте с рисом или индийским нааном.",
    "image": 'https://my.mshp.ru/media/ck_uploads/zubkov_vs/2024/03/06/3.png',
    "timeToCook": 60
},
{
    "id": '4',
    "title": 'Японский ролл "Филадельфия"',
    "preparation": "Сварите рис, используя слегка меньше воды, чтобы он получился более липким. Пока рис готовится, смешайте рисовый уксус с сахаром в небольшой миске. Переложите готовый рис в большую миску и аккуратно перемешайте с уксусной смесью, чтобы рис остыл.Положите лист нори на мат для суши, а затем равномерно распределите рис по всей поверхности нори, оставляя свободное пространство на одном краю. На середине листа нори выложите полоску сыра Филадельфия, лосося, авокадо и огурца. Сверните ролл с помощью специального матика, чтобы он получился компактным и цилиндрическим.Разрежьте ролл на 8 частей с острым ножом.Подавайте ролл Филадельфия с соевым соусом и васаби.",
    "image": 'https://my.mshp.ru/media/ck_uploads/zubkov_vs/2024/03/06/4.png',
    "timeToCook": 1
},
];

let cooking = [];



function getTimeToCook(date) {
    let day = dayjs(date);
    return day.format('HH:mm');
};


// Роуты

app.get('/dishes', async function (req, res) {
    res.send(dishes);
});

app.get('/dish', async function (req, res) {
    let id = req.query.id;

    let dish = dishes.find((element) => element.id == id);
    if(dish) {
        res.send(dish);
    } else {
        res.send('Не найдено');
    }
});


app.post('/dishes', async function (req, res) {
    let title = req.body.title;
    let preparation = req.body.preparation;
    let time = req.body.time;
    let image = req.body.image;
    if(!title) {
        title = "Блюдо без названия"
    }
    if(!preparation) {
        preparation = "Блюдо без рецепта"
    }
    if(!time && time !== 0 || time < 0) {
        time = 404
    }
    if(!image){
        image = "https://my.mshp.ru/media/ck_uploads/zubkov_vs/2024/03/06/3.png"
    }


    dish = dishes[dishes.push({
        id: Math.random().toString(16).slice(2),
        title: title,
        preparation: preparation,
        image: image,
        timeToCook: time,
    }) - 1]


    res.send(dish);
});

app.get('/cooking', async function (req, res) {
    res.send(cooking);
});

app.post('/cooking/cook', async function (req, res) {
    let id = req.body.id;
    let dish = dishes.find((element) => element.id == id);
    if(dish) {
        cookingDish = cooking[cooking.push(dish) - 1];
        cookingDish.isCooked = false;
        cookingDish.preparingTime = 0;
        res.send(cookingDish);
    } else {
        res.send('Не найдено');
    }
});

async function cookingTimer() {
    for(let i = 0; i < cooking.length; i++){
        cooking[i].preparingTime++;
        if(cooking[i].preparingTime == cooking[i].timeToCook) {
            cooking[i].isCooked = true;
        }
    }
}

setInterval(() => {
    cookingTimer();
}, 60000);