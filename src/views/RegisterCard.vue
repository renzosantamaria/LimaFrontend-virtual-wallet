<template>
  <div class="register-card">
    <Heading-component msgPrimary="Add new card" msgSecondary="new card">></Heading-component>
    <BaseCardv1
    :name="cardName"
    :number="cardNumber"
    :month="cardMonth"
    :year="cardYear"
    :cardStyle="cardVendor"
    :chipImg="chipImg"
    :logoImg="logoImg"

    />

    <form @submit.prevent>
        <label for="cardNumber">CARD NUMBER</label>
        <input v-model="cardNumber" type="text" maxlength="16" placeholder="xxxx xxxx xxxx xxxx">

        <label for="cardName">CARDHOLDER NAME</label>
        <input v-model="cardName" type="text" maxlength="24" placeholder="Firstname Lastname">

        <div class="card-month-year">
            <div class="month">
                <label for="month">MONTH</label>
                <select v-model="cardMonth" name="month" id="month">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div class="year">
                <label for="year">YEAR</label>
                <select v-model="cardYear" name="year" id="year">
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                </select>
            </div>
        </div>

        <label for="vendor">VENDOR</label>
        <select @change="updateVendor" v-model="cardVendor" name="vendor" id="vendor">
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="blockchain"> Blockchain Inc</option>
            <option value="evil"> Evil Corp</option>
            <option value="ninja">Ninja Bank</option>
        </select>
        <router-link to="/"><BaseButton btnContent="Back to Cards" /></router-link>
        <BaseButton @click.native="addNewCard" btnContent="Add Card" />
        
    </form>

  </div>
</template>

<script>
import BaseCardv1 from '@/components/BaseCardv1.vue';
import HeadingComponent from '@/components/HeadingComponent.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseCardv1,
    BaseButton,
    HeadingComponent,
  },

  data(){
      return{
        cardNumber: '',
        cardName: '',
        cardMonth: 'MM',
        cardYear: 'YY',
        cardVendor: 'base-card',
        chipImg: 'chip-dark.svg',
        logoImg: 'vendor-evil.svg'
      }
  },
  methods:{
      addNewCard(){
          this.$root.addCardToArray({
            cardNumber: this.cardNumber,
            cardName: this.cardName,
            cardMonth: this.cardMonth,
            cardYear: this.cardYear,
            cardVendor: this.cardVendor,
            chipImg: this.chipImg,
            logoImg: this.logoImg
          })
        
        this.$router.push('/')

      },
      updateVendor(){
        switch (this.cardVendor) {
            case 'bitcoin':
                this.logoImg = 'vendor-bitcoin.svg'
                this.chipImg = 'chip-light.svg'
                break;
            case 'blockchain':
                this.logoImg = 'vendor-blockchain.svg'
                this.chipImg = 'chip-light.svg'
                break;
            case 'evil':
                this.logoImg = 'vendor-evil.svg'
                this.chipImg = 'chip-light.svg'
                break;
            case 'ninja':
                this.logoImg = 'vendor-ninja.svg'
                this.chipImg = 'chip-light.svg'
                break;
        
            default:
                break;
        }
      }
  }
}
</script>

<style lang="scss">
    .register-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 3rem 0;
        max-width: 380px;
        form{

            display: flex;
            flex-direction: column;
            padding: 3rem 0;
            width: 100%;
            input, select{
                margin-bottom: 1rem;
                padding: 8px;
                border-radius: 4px;
            }
            button{
                width: 100%;
            }

            .card-month-year{
                display: flex;
                justify-content: space-between;
                .month, .year{
                    display: flex;
                    flex-direction: column;
                    width: 48%;
                }
            }
        }
    }
</style>