
const state = {
    funds: 10000,
    stocks: [], // stocks in our portfolio, NOT all stocks available

}

const mutations = {
        //payload obj comes from component/stocks/Stock.vue - order obj
    'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
        //check if stock is already in my stocks array
        const record = state.stocks.find(element => element.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        // update funds
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCKS'(state, {stockId, quantity, stockPrice}) {
        //check if stock is already in my stocks array
        const record = state.stocks.find(element => element.id === stockId);
        if (ecord.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            // remove particular stock from the array
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        // update funds
        state.funds += stockPrice * quantity;
    }
}

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCKS', order);
    }
}

const getters = {
    // we injected getters, because we need to 'get' data from other module (stocks.js)
    // getters refers to the overall store getters (which holds ALL the stocks)
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id)
            return {
                id: stock.id,
                quantity:  stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}