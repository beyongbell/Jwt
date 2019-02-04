export default {
    state: {
        welcomeMessage : 'Welcome to my Vue'
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions : {}
}
