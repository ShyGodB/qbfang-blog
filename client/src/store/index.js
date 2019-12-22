import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
};

const getters = {
    getCount(){
       return state.count
    }
};

const mutations = {
    add() {
        state.count++;
    },
    subtract() {
        state.count--;
    }

};

const actions = {
   a(context) {
       context.commit('add');
   },
   s(context){
       context.commit('subtract')
   }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
