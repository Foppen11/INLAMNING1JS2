
export default{
    state: {
        cart: []
    },
    getters: {
        shoppingCart: state => state.cart,
        cartItemQuantity: state => {
            let counter = 0
            state.cart.forEach(item => {
                counter += item.quantity
            })
            return counter
        },
        cartTotalCost: state => {
            let total = 0
            if(state.cart.length !== 0){
                state.cart.forEach(item => {
                    total += item.product.price * item.quantity
                })
            }
            return total
        }
    },
    mutations:{
        ADD_TO_CART: (state, {product, quantity}) => {
            let exists = state.cart.find(item => item.product._id === product._id)
            if(exists){
                exists.quantity += 1
                return
            }
            else{
                state.cart.push({product, quantity})
            }
        },
        REDUCE_FROM_CART: (state, item) => {
            let productQuantity = state.cart.find(i => i.product._id === item.product._id)
            if(productQuantity.quantity > 1){
                productQuantity.quantity -= 1
                return
            }
            else{
                state.cart.splice((state.cart.find(i => i.product._id === item.product._id)), 1)
            }
        },
        DELETE_FROM_CART: (state, item) => {
            state.cart.splice((state.cart.find(i => i.product._id === item.product._id)), 1)
            return
        },
        CLEAN_CART: state => {
            state.cart = []
        }
    },
    actions: {
        addProductToCart: ({commit}, { product, quantity }) => {
            commit('ADD_TO_CART', {product, quantity})
        },
        reduseItem: ({commit}, {product, quantity }) => {
            commit('REDUCE_FROM_CART', {product, quantity})
        },
        deleteItem: ({commit}, product) => {
            commit('DELETE_FROM_CART', product)
        },
        cleanCartList: ({commit}) => {
            commit('CLEAN_CART')
        }
    }
}