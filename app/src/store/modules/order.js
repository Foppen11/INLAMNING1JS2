import axios from 'axios'
import router from '@/router'


export default{
    state: {
        orders: [],
        order: null
    },
    getters:{
        orders: state => state.orders,
        order: state => state.order
    },
    mutations:{
        PLACED_ORDER: () => {
            router.push('/thanks')
        }
    },
    actions:{
        getOrders: async({commit}) => {
            const res = await axios.get('http://localhost:9999/api/order')
            commit('ORDERS', res.data)
        },
        getOneOrder: async({commit}, id) => {
            const res = await axios.get('http://localhost:9999/api/order/' + id)
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