
Vue.createApp({
    data() {
        return {
            typHead: [{type: 'info', header: 'INFO'}, {type: 'error', header: 'ERROR'}, {type: 'warning', header: 'WARNING'}, {type: 'success', header: 'SUCCESS'}, {}]
        }
    }
})
.component(`notification-message`, {
    template: `#notification-message-template`,
    props: {
        header: {type: String, default: 'ERROR'},
        type: {type: String, default: 'error'}
    },
    data() {
        return {
            hidden: false
        }
    },
    methods: {
        mesClose() {
            this.hidden = true;
        }
    }
})
.mount('#app')