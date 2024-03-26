Vue.createApp({
    data() {
        return {
            header: `ToDoList`,
            message: `You have no tasks for today!`,
            userInput: ``,
            isPriority: false,
            tasksNumber: 0,
            allTasksNumber: 0,
            tasks: [
                {name: `To cook a meal`, isCompleted: false, priority: false},
                {name: `To wash the dishes`, isCompleted: true, priority: false},
                {name: `Take a walk with the dog`, isCompleted: false, priority: true}
            ]
        }
    },
    computed: {
        counterTasks() {
            this.allTasksNumber = this.tasks.length;
            this.tasksNumber = this.allTasksNumber;
            this.tasks.forEach(task => {
                if (task.isCompleted) {
                    this.tasksNumber--;
                }
            });
            return `${this.tasksNumber}/${this.allTasksNumber}`;
        }
    },
    methods: {
        addTask() {
            if(this.userInput) {
                this.tasks.push({name: this.userInput, priority: this.isPriority});
                this.userInput = ``;
            }
        },
        toggleClass(task) {
            task.isCompleted = !task.isCompleted;
        }
    }
}).mount(`#app`);