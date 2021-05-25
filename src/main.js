import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data(){
    return{
      cards: [
        {
          cardNumber: '0000 0000 0000 0000',
          cardName: 'Test user',
          cardMonth: '02',
          cardYear: '25',
          cardVendor: 'bitcoin',
          chipImg: 'chip-light.svg',
          logoImg: 'vendor-bitcoin.svg'
        },
        {
          cardNumber: '0000 0000 0000 0000',
          cardName: 'Test user22',
          cardMonth: '02',
          cardYear: '25',
          cardVendor: 'evil',
          chipImg: 'chip-light.svg',
          logoImg: 'vendor-evil.svg'
        },
      ],

      displayCard:{
        cardNumber: '0000 0000 0000 0000',
        cardName: '',
        cardMonth: 'MM',
        cardYear: 'YY',
        cardVendor: 'base-card',
        chipImg: 'chip-light.svg',
        logoImg: 'vendor-bitcoin.svg'
      }
    }
  },
  methods:{
    addCardToArray(payload){
      this.cards.push(
        {
          cardNumber: payload.cardNumber,
          cardName: payload.cardName,
          cardMonth: payload.cardMonth,
          cardYear: payload.cardYear,
          cardVendor: payload.cardVendor,
          chipImg: payload.chipImg,
          logoImg: payload.logoImg
        }
      )
    },
    updateDisplayCard(payload){
      this.displayCard = {
        cardNumber: payload.cardNumber,
        cardName: payload.cardName,
        cardMonth: payload.cardMonth,
        cardYear: payload.cardYear,
        cardVendor: payload.cardVendor,
        chipImg: payload.chipImg,
        logoImg: payload.logoImg
      }
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
