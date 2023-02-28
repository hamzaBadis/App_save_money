import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
    state(){
        return {
            isAuth : false,
            userID :""
        }
    },
    mutations:{
        reverseAuth(state, val){
            state.isAuth = val
        },
        setUserID(state,id){
            state.userID = id;
        }
    },
    getters:{
        getAuth(state){
            return state.isAuth;
        },
        getUserID(state){
            return state.userID;
        }
    },
    plugin :[createPersistedState()]
});

export default store