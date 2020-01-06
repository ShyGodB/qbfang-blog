import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    fileId: '',
    fileType: '',
    parentFileId: '',
    parentFileType: 'Desktop'
};

const getters = {};

const mutations = {};

const actions = {};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
