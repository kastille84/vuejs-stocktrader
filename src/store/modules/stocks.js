import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    //set our stocks
    'SET_STOCKS'(state, stocks){
        state.stocks = stocks;
    } ,
    // randomize the stocks
    'RND_STOCKS'(state) { 

    }
}

const actions = {
    buyStock: ({commit}, order) => {
        commit('');
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: (context) => {
        context.commit('RND_STOCKS')
    }
}

const getters = {
    stocks: (state) => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}