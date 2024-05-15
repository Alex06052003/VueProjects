let express = require(`express`);
let app = express();
let cors = require('cors');
let port = 3000;
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));



// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contacts');

// Схемы
let contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requred: true
    },
    lastName: String,
    phoneNumber: {
        type: String,
        unique: true,
        requred: true
    },
    email: String
}, {
    timestamps: true
});
let Contact = mongoose.model('contacts', contactSchema);



// Получить список контактов
app.get(`/contacts`, async function (req, res) {
    try {
        let contacts = await Contact.find({}).sort({ lastName: 1 });
        res.send(contacts);
    } catch (error) {
        res.sendStatus(400);
    }
});


// Получить контакт
app.get(`/contact`, async function (req, res) {
    let id = req.query.id;

    try {
        let contact = await Contact.findOne({ _id: id });
        res.send(contact);
    } catch (err) {
        res.sendStatus(400);
    }
});

// Добавление 
app.post(`/contacts`, async function (req, res) {
    let { firstName, lastName, phoneNumber, email } = req.body;

    let contact = new Contact({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
    });

    try {
        await contact.save();
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
});

// Удаление
app.delete(`/contacts`, async function (req, res) {
    let id = req.query.id;

    try {
        await Contact.deleteOne({ _id: id });
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
});

// Изменение 
app.put(`/contacts`, async function (req, res) {
    let { id, firstName, lastName, phoneNumber, email } = req.body;
    
    try {
        let contact = await Contact.findOne({ _id: id });
        contact.firstName = firstName;
        contact.lastName = lastName;
        contact.phoneNumber = phoneNumber;
        contact.email = email;
        await contact.save();
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(400);
    }
});
