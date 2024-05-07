let express = require(`express`);
let app = express();
let cors = require('cors')
let port = 3000;
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors())
app.use(express.json())
app.use(express.static('public'));



// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Bvito');


// Схемы
let schema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        min: 1
    },
    category: {
        type: String,
        required: true
    },
    image: String,
    isMine: Boolean,
    asNew: Boolean
}, {
    timestamps: true
});

let Product = mongoose.model('product', schema);

// Роуты

app.get(`/products`, async function (req, res) {
    let title = req.query.title;
    let category = req.query.category;
    let sort = Number(req.query.sort);

    let search = {}; // объект настроек поиска
    let sorting = {}; // объект настроек сортировки

    // Наполняем объекты данными
    if (title) {
        search.title = title;
    }
    if (category) {
        search.category = category;
    }
    if (sort) {
        sorting.price = sort;
    }

    let data = await Product.find(search).sort(sorting).limit(10);

    res.send(data);
});



app.get(`/products/my`, async function (req, res) {
    let data = await Product.find({ isMine: true }).sort({ createdAt: -1 });

    res.send(data);
});


app.post(`/products`, async function (req, res) {
    let title = req.body.title;
    let description = req.body.description;
    let category = req.body.category;
    let image = req.body.image;
    let price = Number(req.body.price);
    let asNew = Boolean(req.body.asNew);

    // Создание модели товара
    let product = new Product({
        title: title,
        description: description,
        category: category,
        price: price,
        image: image,
        asNew: asNew,
        isMine: true
    });

    try {
        await product.save();
        res.sendStatus(201);
    } catch (err) {
        res.sendStatus(400);
    }
});


app.delete(`/products`, async function (req, res) {
    let id = req.query.id;

    await Product.deleteOne({ _id: id });

    res.sendStatus(200);
});

app.get(`/product`, async function (req, res) {
    let { id } = req.query;
    let product = await Product.findOne({ _id: id });
    res.send(product);
});

app.put(`/products`, async function (req, res) {
    let { id, title, category, description, price, image, asNew } = req.body;
    let product = await Product.findOne({ _id: id });

    product.title = title;
    product.category = category;
    product.description = description;
    product.price = price;
    product.image = image;
    product.asNew = asNew;

    try {
        await product.save();
        res.sendStatus(200);
    } catch (err) {
        send.sendStatus(400);
    }
});