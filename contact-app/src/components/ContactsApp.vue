<script>
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";
export default {
    data() {
        return {
            contacts: [],
            contact: {},
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            birthday: '',
            isShow: false,
            isCreate: false,
            isEdit: false
        };
    },
    methods: {
        async loadContacts() {
            let response = await axios.get('/contacts');
            this.contacts = response.data;
            this.isEdit = false;
            this.isShow = false;
        },
        async getContact(id) {
            let response = await axios.get('/contact', {
                params: {
                    id: id
                }
            });
            this.contact = response.data;
            this.isShow = true;
        },
        async removeContact(id) {
            await axios.delete('/contacts', {
                params: {
                    id: id
                }
            });
            this.loadContacts();
            this.isEdit = false;
        },
        async createContact() {
            await axios.post('/contacts', {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber,
                email: this.email,
            });

            this.firstName = '';
            this.lastName = '';
            this.phoneNumber = '';
            this.email = '';

            this.loadContacts();
        },
        async editContact(id, firstName, lastName, phoneNumber, email) {
            await axios.put('/contacts', {
                id: id,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
            });

            this.loadContacts();
            this.isEdit = false;
        }
    },
    mounted() {
        this.loadContacts();
    }
};
</script>

<template>
    <div class="app-container container mt-5">
        <div class="row justify-content-center">

            <!-- Список контактов -->
            <div class="col-4 contacts-column">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">
                            <div>
                                Список контактов
                            </div>

                            <a @click="isCreate = !isCreate" class="plus-link" title="Создать контакт">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                            </a>
                        </h5>

                        <div class="column-list">
                            <div class="card mb-2" v-for="contact in contacts">
                                <div class="card-body">
                                    <a @click="getContact(contact._id)">
                                        {{ contact.firstName }} {{ contact.lastName }}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Колонка с информацией о контакте -->

            <div class="col-4 contact-column" v-if="isShow">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">
                            {{ contact.firstName }} {{ contact.lastName }}
                        </h5>

                        <div class="column-list">
                            <div class="row">
                                <div class="col">Телефон </div>
                                <div class="col"> {{ contact.phoneNumber }}</div>
                            </div>

                            <div class="row">
                                <div class="col">Почта </div>
                                <div class="col"> {{ contact.email }}</div>
                            </div>

                            <div class="controls">
                                <a @click="isEdit = true" class="btn btn-secondary">
                                    Редактировать
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Колонка с формой создания -->
            <div class="create-column col-4" v-if="isCreate">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">
                            Новый контакт
                        </h5>

                        <div class="column-list">
                            <form @submit.prevent="createContact">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Имя</span>
                                    <input v-model="firstName" type="text" class="form-control">
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Фамилия</span>
                                    <input v-model="lastName" type="text" class="form-control">
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Телефон</span>
                                    <input v-model="phoneNumber" type="tel" class="form-control">
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Почта</span>
                                    <input v-model="email" type="email" class="form-control">
                                </div>

                                <div class="controls">
                                    <button type="submit" class="btn btn-primary">Добавить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Колонка с формой редактирования -->
            <div class="edit-column col-4" v-if="isEdit">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">
                            Редактор контакта
                        </h5>

                        <div class="column-list">
                            <form @submit.prevent="editContact(contact._id, contact.firstName, contact.lastName, contact.phoneNumber, contact.email)">
                                <div class="input-group mb-3">
                                    <span class="input-group-text">Имя</span>
                                    <input name="firstName" type="text" class="form-control"
                                        v-model="contact.firstName">
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Фамилия</span>
                                    <input name="lastName" type="text" class="form-control" v-model="contact.lastName">
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Телефон</span>
                                    <input v-model="contact.phoneNumber" name="phoneNumber" type="tel" class="form-control">
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text">Почта</span>
                                    <input v-model="contact.email" name="email" type="email" class="form-control">
                                </div>

                                <div class="controls">
                                    <button type="submit"
                                        class="btn btn-primary">Сохранить</button>
                                    <a @click="removeContact(contact._id)" class="btn btn-secondary ms-2">Удалить</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
* {
    font-family: 'Arial';
}

.contacts-column .card-title {
    display: flex;
    justify-content: space-between;
}

.plus-link {
    width: 24px;
}

.plus-link img {
    width: 100%;
}

.column-list {
    height: 70vh;
    position: relative;
    overflow-y: scroll;
}

.contact-column .card-title {
    text-align: center;
}

.column-list .controls {
    display: flex;
    justify-content: flex-end;
    left: 0;
    right: 0;
    padding-top: 20px;
    position: absolute;
    bottom: 0;
}

.create-column .input-group-text,
.edit-column .input-group-text {
    width: 120px;
}
</style>