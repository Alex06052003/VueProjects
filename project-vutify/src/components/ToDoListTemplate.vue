<script>
    export default {
        data() {
            return {
                tasks: [
                    {title: `Сделать дз`, isComplete: true, isImportant: false}, 
                    {title: `Погулять с собакой`, isComplete: false, isImportant: true}, 
                    {title: `Помыть посуду`, isComplete: false, isImportant: false},
                ],
                userInput: ``,
                isImportant: false,
                isComplete: false,
                tasksNumber: 0,
                allTasksNumber: 0,
            }
        },
        methods: {
            addTask() {
                if(this.userInput) {
                    this.tasks.push({title: this.userInput, isComplete: this.isComplete, isImportant: this.isImportant});
                    this.userInput = ``;
                    this.isImportant = false;
                }
            },
            toggleClassComplete(task) {
                task.isComplete = !task.isComplete;
            },
            toggleClassImportant() {
                this.isImportant = true;
            }
        },
        computed: {
            counterTasks() {
                this.allTasksNumber = this.tasks.length;
                this.tasksNumber = this.allTasksNumber;
                this.tasks.forEach(task => {
                    if (task.isComplete) {
                        this.tasksNumber--;
                    }
                });
                return `${this.tasksNumber}/${this.allTasksNumber}`;
            }
        }
    }
</script>

<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col align="center" justify="center">
                <div class="main-field">
                    <h1 class="header-app">ToDoList</h1>
                    <v-row align="center" justify="space-around">
                        <v-col align="center" justify="center">
                            <v-responsive max-width="400px">
                                <v-text-field label="Task" variant="underlined" v-model="userInput"></v-text-field>
                            </v-responsive>
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center" class="row-space">
                        <v-col align="center" justify="center">
                            <v-btn color="primary" @click="addTask">
                                Add
                                <v-icon icon="mdi-plus"></v-icon>
                            </v-btn>
                        </v-col>
                        <v-col align="center" justify="center">
                            <p class="counter-tasks"> {{ counterTasks }} </p>
                        </v-col>
                        <v-col align="center" justify="center">
                            <v-btn color="red" @click="toggleClassImportant">
                                Impt
                                <v-icon icon="mdi-alert" v-if="isImportant"></v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-card class="mx-auto v-card" max-width="400">
                        <v-list class="list-left">
                            <v-list-item v-for="(task, index) in tasks" :class="{'text-decoration-line-through': task.isComplete}" class="list-item" @click="toggleClassComplete(task)"> 
                                {{ index + 1 }} - {{ task.title }}
                                <v-icon icon="mdi-alert" v-if="task.isImportant"></v-icon>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .main-field {
        border-radius: 30px;
        width: 438px;
        height: 653px;
        text-align: center;
        background-color: #363636;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    .header-app {
        padding: 15px 0;
    }

    .v-card {
        overflow-y: auto; /* Добавляем вертикальную прокрутку, если содержимое выходит за пределы блока */
        max-height: 400px; /* Максимальная высота блока */
    }

    .counter-tasks {
        font-size: 20px;
    }

    .row-space {
        margin-bottom: 20px;
    }

    .list-left {
        text-align: left;
    }

    .list-item {
        border-radius: 5px;
        transition: all .3s;
    }

    .list-item:hover {
        background-color: #636363;
    }
</style>