// export const state = () => ({
//   cart: []
// })

// export const getters = {
//   getCart(state){
//     if(localStorage.getItem('cart') !== null){
//       state.cart = (JSON.parse(localStorage.getItem('cart')));
//     }
//   }
// }

// export const mutations = {
//   increment(state) {
//     state.counter++
//   }
// }

// export const actions = {
//   async fetchCounter({ state }) {
//     // make request
//     const res = { data: 10 };
//     state.counter = res.data;
//     return res.data;
//   }
// }