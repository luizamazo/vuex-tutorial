import Vue from  'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'banana skin', price:20},
            {name: 'shiny star', price:40},
            {name: 'green shells', price:60},
            {name: 'red shells', price:80},
          ]     
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map( product => { //take these original products array, map to a new array and perform something as it maps it through
                return { //vai retornar um objeto tb
                  name: '**' + product.name + '**', //this item is on sale 
                  price: product.price / 2
                }
              })
              return saleProducts; 
        }
    },
    mutations: {
      reducePrice: (state, payload) => {
          state.products.forEach(product => {
            product.price -= payload;
        });
      }
    },
    actions: {
      reducePrice: (context, payload) => { //context é basicamente store, podemos usá-lo como
        //payload: refere à data que foi mandada como segundo parametro lá no componente -> amount
        setTimeout(function(){
          context.commit('reducePrice', payload)
        }, 2000)
      } 
    }
})