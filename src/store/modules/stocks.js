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
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5 ));
        })
    }
}

const actions = {
    buyStock: ({commit}, order) => {
        //IMPORTANT - BUY_STOCK is in moddules/portfolio.js file, 
        //BUT we can still reference it here because of the GLOBAL NAMESPACE
        commit('BUY_STOCK', order);
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