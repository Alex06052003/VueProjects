Vue.createApp({
    data() {
        return {
            usernames: ['anotherjesse', 'defunkt', 'bmizerany', 'pjhyett']
        }
    }
})
    .component('github-user-card', {
        props: {
            username: {type: String, requried: true}
        },
        template: `#github-user`,
        data() {
            return {
                user: {}
            }
        },
        async created() {
            const response = await axios.get(`https://api.github.com/users/${this.username}`);
            this.user = response.data;
        }
    })
    .mount('#app')