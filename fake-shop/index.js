let express = require(`express`);
let cors = require(`cors`);
let app = express();

let port = 3000;

// Раздача статики
app.use(express.static(`public`));

app.use(cors());

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
})

// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fake-shop');

let schema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  isOnSale: Boolean,
  likes: Number,
  category: String,
});

let Product = mongoose.model(`product`, schema);

// Роуты
app.get(`/products`, async function (req, res) {
  let data = await Product.find();
  res.send(data);
});

app.get(`/category`, async function (req, res) {
  let name = req.query.name;
  let data = await Product.find({category: name});
  res.send(data);
});

app.get(`/discount`, async function (req, res) {
  let data = await Product.find({isOnSale: true}).sort({price: 1}).limit(10);
  res.send(data);
});


app.get(`/product`, async function (req, res) {
  let id = req.query.id;
  let data = await Product.findOne({_id: id});
  res.send(data);
});

app.get(`/sort`, async function (req, res) {
  let sort = req.query.sort;
  let name = req.query.name;
  let data;
  if (sort == `up`) {
    data = await Product.find({category: name}).sort({price: -1});
  } else if (sort == `down`) {
    data = await Product.find({category: name}).sort({price: 1});
  }
  res.send(data);
});