<template>
  <div id="product-list-one">
    <h2>Product List One</h2>

    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name"> {{ product.name }} </span>
        <span class="price">R$ {{ product.price }} </span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
//se tivesse mts getters e mts actions, pra n chamar cada um individual ali como to fazendo
//this.$store... tem como mapear eles, getters pro computed, actions pros métodos
//mas pra ...map funcionar precisa de traduçao do babel, pois como eh coisa do es6 e navegador n entende
//então instala npm install babel-preset-stage-2 --save-dev
//depois disso vai no arquivo .babelrc

import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  computed: {
    products(){
      return this.$store.state.products;
    },
    ...mapGetters([ //pega getters e spread them pra diferentes computed methods
      'saleProducts',
      //'o proximo'; é mais facil q criar metodos computed pra cada um 
    ])
    /*saleProducts(){
      return this.$store.getters.saleProducts;
    }*/
  },
  methods: {
    ...mapActions([ 
      'reducePrice'
    ])
    /*reducePrice(amount){
      //isso aqui agr ta lá na action então pra chamar action uso dispatch, n é mais commit -> 
      //mesmo q n tenha nada async é good practice commitar mutation pela action
      this.$store.dispatch('reducePrice', amount);
    }*/
  }
}
</script>

<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>

