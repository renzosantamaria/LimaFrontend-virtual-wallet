<template>
  <div class="home">
    <Heading-component msgPrimary="e-wallet" msgSecondary="active card"></Heading-component>
    
    <BaseCardv1 class="display-card"
      :name=" displayCard.cardName"
      :number="displayCard.cardNumber"
      :month="displayCard.cardMonth"
      :year="displayCard.cardYear"
      :cardStyle="displayCard.cardVendor"
      :chipImg="displayCard.chipImg"
      :logoImg="displayCard.logoImg"
    />

    <div class="cards-pile">
      <BaseCardv1 @click.native="updateDisplayCard(card)" class="pile-card" v-for="(card, index) in cards" :key="index"
        :name="card.cardName"
        :number="card.cardNumber"
        :month="card.cardMonth"
        :year="card.cardYear"
        :cardStyle="card.cardVendor"
        :chipImg="card.chipImg"
        :logoImg="card.logoImg"
      />

    </div>


    <router-link to="/register"> <BaseButton btnContent="Register new Card" /> </router-link>
  </div>
</template>

<script>
import BaseCardv1 from '@/components/BaseCardv1.vue';
import HeadingComponent from '@/components/HeadingComponent.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'Home',
  components: {
    BaseCardv1,
    HeadingComponent,
    BaseButton,
  },
  computed:{
    cards(){
      return this.$root.cards
    },
    displayCard(){
      return this.$root.displayCard
    }

  },
  methods:{
    updateDisplayCard(payload){
      this.$root.updateDisplayCard(payload)
    }
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    margin: 0 auto;
    width: 380px;

    .display-card{
      margin-bottom: 100px;
    }
    
    .cards-pile .pile-card:not(:first-child){
      position: relative;
      margin-top: -140px;
    }

    button, a{
      width: 100%;
      margin-top: 40px;
    }
  }
</style>
