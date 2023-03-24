import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const options = {
    state: {
        screenWidth: window.innerWidth,
    },
    getters: {
        isMobile(state) {
            return state.screenWidth < 600;
        },
    },
    mutations: {
        
    },
    actions: {
        
    }
}

export default new Vuex.Store(options);