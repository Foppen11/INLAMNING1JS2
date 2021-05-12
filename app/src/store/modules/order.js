import axios from 'axios'
import router from '@/router'


export default{
    state: {
        orders: []
    },
    getters:{
        orders: state => state.orders,
    },
    mutations:{
        SET_ORDER: (state, orders) => {
            state.orders = orders
        },
        PLACED_ORDER: () => {
            router.push('/thanks')
        }
    },
    actions:{
        getOrders: async({commit}, email) => {
            const res = await axios.get('http://localhost:9999/api/order/' + email)
            commit('SET_ORDER', res.data)
        },
        makeOrder: ({commit} , order) => {
            axios.post('http://localhost:9999/api/order/new', order).then((res) => {
                if(res.status === 201) {
                    commit('PLACED_ORDER')
                }
            })
        }
    }
}